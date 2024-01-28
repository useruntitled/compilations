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
            <Comment
                v-for="comment in comments"
                v-show="!comment.is_reply"
                :key="comment.id"
                :comment="comment"
                @remove="remove(comment.id)"
            ></Comment>
        </main>
    </div>
</template>

<script setup>
import { inject, ref, provide, onMounted } from "vue";
import Comment from "./Comment.vue";
import CommentInput from "./CommentInput.vue";
import axios from "axios";
import AnimationLoader from "../Animations/AnimationLoader.vue";

const isLoaded = ref(false);

const loadComments = async () => {
    await axios
        .get(route("comments.get", [props.post.id]))
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            console.log(res);
            isLoaded.value = true;
            comments.value = res.data;
        });
};

onMounted(async () => {
    if (window.location.hash == "#comments")
        setTimeout(() => {
            comments_block.value.scrollIntoView();
        }, 200);
    await loadComments();
    if (window.location.hash == "#comments")
        comments_block.value.scrollIntoView();
    comments.value.forEach((comment) => {
        if (!comment.is_reply) showRepliesArray.value.unshift(comment.id);
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
