<template>
    <div class="bg-white p-5 rounded-xl mt-5" ref="comments_block">
        <p class="text-xl mb-8 font-medium">Комментарии</p>
        <div class="px-2 mb-5">
            <div v-if="!showReplyInterface && !showEditingInterface">
                <CommentInput
                    @sendComment="createComment"
                    :commentIsCreated="commentIsCreated"
                ></CommentInput>
            </div>
        </div>
        <main>
            <AnimationLoader
                v-if="!isLoaded"
                class="mx-auto stroke-gray-500"
            ></AnimationLoader>

            <div v-for="(comment, index) in comments">
                <Comment
                    :key="comment.id"
                    v-if="index < limitComments"
                    :index="
                        index == 0 ? 0 : comments[index - 1].replies_count + 1
                    "
                    :comment="comment"
                    @remove="remove(comment.id)"
                ></Comment>
            </div>
        </main>
    </div>
</template>

<script setup>
import { inject, ref, provide, onMounted, watch, nextTick } from "vue";
import Comment from "./Comment.vue";
import CommentInput from "./CommentInput.vue";
import axios from "axios";
import AnimationLoader from "../Animations/AnimationLoader.vue";
import { comment } from "postcss";

const isLoaded = ref(false);

const limitComments = 10;

const visibleComments = ref(0);

provide("visibleComments", visibleComments);

provide("limitComments", limitComments);

const emit = defineEmits(["load"]);

watch(isLoaded, (newValue, oldValue) => {
    if (newValue == true) emit("load");
});

const loadComments = async () => {
    await axios
        .get(route("comments.get", [props.post.id]))
        .catch((res) => {
            console.log(res);
        })
        .then(async (res) => {
            console.log(res);
            isLoaded.value = true;
            comments.value = res.data;
            await processComments();
        });
};

const findComment = (id) => {
    console.log("Trying to find this comment:", id);
    function find(comment) {
        if (comment.id == id) {
            return comment;
        }
        if (comment.replies?.length) {
            let result;
            comment.replies.forEach((reply) => {
                if (find(reply) != null) {
                    result = find(reply);
                    return;
                }
            });
            return result;
        }
        return null;
    }

    let found_comment = null;

    comments.value.forEach((comment) => {
        if (find(comment) != null) {
            console.log("found", find(comment));
            found_comment = find(comment);
        }
    });

    return found_comment;
};

const hasParam = (param) => {
    const url = new URL(window.location.href);
    return url.searchParams.has(param);
};

const getParam = (param) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
};

const processComments = async () => {
    function findMaxLevel() {
        let max_level = 0;

        comments.value.forEach((comment) => {
            if (comment.level > max_level) max_level = comment.level;
        });

        return max_level;
    }

    let depth = findMaxLevel();

    function index(id) {
        return comments.value.findIndex((comment) => comment.id == id);
    }

    let to_splice = [];

    while (depth != 0) {
        comments.value.forEach((comment) => {
            if (comment.level == depth) {
                if (!comments.value[index(comment.comment_id)].replies)
                    comments.value[index(comment.comment_id)].replies = [];
                if (!comments.value[index(comment.id)].comment)
                    comments.value[index(comment.id)].comment = null;
                comments.value[index(comment.comment_id)].replies.push(comment);
                countReplies(comment);
                // scrollInto
                if (
                    commentToScrollInto.value.has &&
                    commentToScrollInto.value.id == comment.id
                ) {
                    showRepliesArray.value.push(comment.comment_id);
                    commentToScrollInto.value.id = comment.comment_id;
                }
                to_splice.push(comment.id);
                // scrollInto End
            }
        });
        depth -= 1;
    }

    to_splice.forEach((id) => {
        comments.value.splice(index(id), 1);
    });

    comments.value.forEach((comment) => {
        countReplies(comment);
    });

    return true;
};

const countReplies = (comment) => {
    let count = 0;
    function updateCount(comm) {
        if (comm.replies?.length > 0) {
            comm.replies.forEach((reply) => {
                let r = updateCount(reply);
                count += r;
            });
        }

        return 1;
    }
    updateCount(comment);
    comment.replies_count = count;
};

const commentToScrollInto = ref({
    has: false,
    id: null,
});

onMounted(async () => {
    if (hasParam("comment")) {
        nextTick(() => {
            comments_block.value?.scrollIntoView();
            nextTick(() => {
                comments_block.value?.scrollIntoView();
            });
            commentToScrollInto.value.has = true;
            commentToScrollInto.value.id = getParam("comment");
            scrollIntoComment.value = getParam("comment");
        });
    }
    if (hasParam("comments"))
        nextTick(() => {
            comments_block.value?.scrollIntoView();
        });
    await loadComments();
    if (hasParam("comments"))
        nextTick(() => {
            comments_block.value?.scrollIntoView();
        });
    // prepareToFocusComment();
    // if (hasParam("comments")) comments_block.value.scrollIntoView();
    comments.value.forEach((comment) => {
        if (comment.level == 0) showRepliesArray.value.unshift(comment.id);
    });
});

const callModal = inject("callModal");

const props = defineProps({
    post: null,
});

const showRepliesArray = ref([]);
const showReplyInterface = ref(null);
const showReplyEditingInterface = ref(null);
const showEditingInterface = ref(null);
const comments = ref(null);
const comments_block = ref(null);
const commentIsCreated = ref(false);
const scrollIntoComment = ref(null);

const createComment = (form) => {
    const formData = new FormData();
    formData.append("_method", "POST");
    formData.append("post_id", props.post.id);
    formData.append("text", form.content);
    formData.append("hasImage", form.image?.hasImage);
    formData.append("image", form.image?.image);
    axios
        .post(route("comment.create"), formData)
        .catch((res) => {
            if (res.response.status == 401) callModal("Auth");
            console.log(res);
        })
        .then((res) => {
            console.log(res);
            if (res.status == 200 || res.status == 201) {
                comments.value.unshift(res.data);
                commentIsCreated.value = true;
                scrollIntoComment.value = res.data.id;

                setTimeout(() => {
                    commentIsCreated.value = false;
                }, 20);
            }
        });
};

const setInputValuesToNull = () => {
    showReplyInterface.value = null;
    showEditingInterface.value = null;
};

const changeShowReplyInterfaceValue = (value) => {
    setInputValuesToNull();
    showReplyInterface.value = value;
};

const changeShowEditingInterfaceValue = (value) => {
    setInputValuesToNull();
    showEditingInterface.value = value;
};

provide("changeShowReplyInterfaceValue", changeShowReplyInterfaceValue);
provide("setInputValuesToNull", setInputValuesToNull);
provide("showReplyInterface", showReplyInterface);
provide("changeShowEditingInterfaceValue", changeShowEditingInterfaceValue);
provide("showEditingInterface", showEditingInterface);
provide("showRepliesArray", showRepliesArray);
provide("scrollIntoComment", scrollIntoComment);
provide("post", props.post);
</script>

<!-- <script>


export default {
    inject: ["callModal"],
    props: {
        post: null,
    },
    data() {
        return {
            showRepliesArray: [],
            showReplyInterface: null,
            showReplyEditingInterface: null,
            showEditingInterface: null,
            showReplyToReplyInterface: null,
            comments: this.post.comments,
            commentIsCreated: false,
        };
    },
    provide() {
        return {
            showRepliesArray: computed(() => this.showRepliesArray),
            showReplyInterface: computed(() => this.showReplyInterface),
            showEditingInterface: computed(() => this.showEditingInterface),
            changeShowReplyInterfaceValue: this.changeShowReplyInterfaceValue,
            changeShowEditingInterfaceValue:
                this.changeShowEditingInterfaceValue,
            setInputValuesToNull: this.setInputValuesToNull,
            sendReply: this.sendReply,
        };
    },
    mounted() {
        if (window.location.hash == "#comments") {
            setTimeout(() => {
                this.$refs["comments"].scrollIntoView();
            }, 200);
        }
    },
    methods: {
        changeShowReplyInterfaceValue(value) {
            this.setInputValuesToNull();
            this.showReplyInterface = value;
        },
        changeShowEditingInterfaceValue(value) {
            this.setInputValuesToNull();

            this.showEditingInterface = value;
        },
        setInputValuesToNull() {
            this.showReplyInterface = null;
            this.showReplyToReplyInterface = null;
            this.showEditingInterface = null;
            this.showReplyEditingInterface = null;
        },
        showRepliesFunction(comment_id) {
            this.showRepliesArray.push(comment_id);
        },
        findCommentAndOpenReplies(reply_id) {
            console.log(reply_id);
            let index = this.comments.findIndex(
                (obj) =>
                    obj.replies.findIndex((reply) => reply.id == reply_id) >= 0
            );
            this.showRepliesArray.unshift(this.comments[index].id);
        },
        sendComment(form) {
            const formData = new FormData();
            formData.append("_method", "POST");
            formData.append("post_id", this.post.id);
            formData.append("text", form.content);
            formData.append("image", form.image?.image);
            axios
                .post(route("comment.create"), formData)
                .catch((res) => {
                    if (res.response.status == 401) this.callModal("Auth");
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200 || res.status == 201) {
                        this.comments.unshift(res.data);
                        this.commentIsCreated = true;
                        setTimeout(() => {
                            this.commentIsCreated = false;
                        }, 20);
                    }
                });
        },
        sendReply(form) {
            console.log("FORM", form);
            const formData = new FormData();
            formData.append("_method", "POST");
            formData.append("comment_id", this.showReplyInterface);
            formData.append("post_id", this.post.id);
            formData.append("text", form.content);
            formData.append("image", form.image?.image);
            axios
                .post(route("comment.create"), formData)
                .catch((res) => {
                    if (res.response.status == 401) this.callModal("Auth");
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    let index = this.comments.findIndex(
                        (obj) => obj.id == this.showReplyInterface
                    );
                    if (res.status == 200 || res.status == 201) {
                        this.commentIsCreated = true;
                        setTimeout(() => {
                            this.commentIsCreated = false;
                        }, 20);
                    }
                });
        },
        removeComment(comment_id) {
            axios
                .post(route("comment.delete"), {
                    _method: "DELETE",
                    id: comment_id,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    let listIndex = this.comments.findIndex(
                        (obj) => obj.id == comment_id
                    );
                    this.comments.splice(listIndex, 1);
                });
        },
        updateCommentOrReplyValue(type, id, text) {
            if (type == "Comment") {
                let listIndex = this.comments.findIndex((obj) => obj.id == id);
                this.comments[listIndex].text = text;
            } else {
                let listIndex = this.comments.findIndex((obj) =>
                    obj.replies.findIndex((obj) => obj.id == id)
                );
                let replyIndex = this.comments[listIndex].replies.findIndex(
                    (obj) => obj.id == id
                );
                this.comments[listIndex].replies[replyIndex].text = text;
            }
        },
    },
    components: {
        Comment,
        Reply,
        CommentInput,
        Csrf,
        ReplyInput,
        EditingInput,
        ZoomableImage,
    },
};
</script> -->
