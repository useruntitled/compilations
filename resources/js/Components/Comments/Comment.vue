<template>
    <div class="flex w-full">
        <!-- branches -->
        <!-- solo branch -->

        <div
            style="width: 20px; height: 30px"
            class="border-2 border-t-0 border-e-0 border-bl-1 border-bl-gray-200 border-bl-1 rounded-bl-lg hover:cursor-pointer"
            :class="hoverAllValue ? 'border-sky-600' : ''"
            @mouseenter="emit('enableHoverBranches')"
            @mouseleave="emit('disableHoverBranches')"
            @click="closeReplies()"
            v-if="isReply && countOfNeighbours == 0 && comment.level < 7"
        ></div>

        <!-- multi-branch (with stick) -->
        <div
            v-if="isReply && countOfNeighbours > 0 && comment.level < 7"
            class="h-full border-s-2 hover:cursor-pointer"
            :class="hoverAllValue ? 'border-sky-600' : ''"
            style="height: auto"
            @mouseenter="emit('enableHoverBranches')"
            @mouseleave="emit('disableHoverBranches')"
            @click="closeReplies()"
        >
            <div
                style="width: 20px; height: 30px"
                class="ms-[-1.5px] border-2 border-t-0 border-e-0 border-bl-1 border-bl-gray-200 border-bl-1 rounded-bl-lg"
                :class="hoverAllValue ? 'border-sky-600' : ''"
            ></div>
        </div>
        <!-- branches end -->
        <div
            class="px-0 bg-white rounded-xl p-2 pb-0 w-full"
            :class="comment.level < 7 && isReply ? 'ms-2' : ''"
        >
            <section
                ref="commentRef"
                class="duration-500"
                :class="colorizeComment ? 'opacity-50' : ''"
                @mouseenter="showLinkToParent = true"
                @mouseleave="showLinkToParent = false"
            >
                <header class="flex items-start p-0 m-0">
                    <!-- <UserTablet :user="comment.user"></UserTablet> -->
                    <UserTabletWithElementInside :user="comment.user">
                        <template #content>
                            <p class="text-xs opacity-80">
                                {{ comment.timestamp }}
                                <!-- <span
                                    class="text-orange-500 opacity-100 ms-1"
                                    v-if="
                                        comment.user.id == comment.post.user.id
                                    "
                                >
                                    Автор
                                </span> -->
                            </p>
                        </template>
                    </UserTabletWithElementInside>

                    <button
                        @click="emit('focusEmit')"
                        @mouseenter="emit('enableColorize')"
                        @mouseleave="emit('disableColorize')"
                        v-if="isReply && showLinkToParent"
                        class="pt-2"
                    >
                        <IconArrowUp
                            class="stroke-1 w-4 h-4 hover:opacity-60"
                        ></IconArrowUp>
                    </button>
                </header>
                <main>
                    <p v-html="comment.text" class="text-17"></p>
                    <div v-if="comment.image">
                        <ZoomableImage
                            :preview="'/media/' + comment.image_preview"
                            :then="route('im', [comment.image, 1000])"
                            class="rounded-xl w-[300px]"
                        ></ZoomableImage>
                        <!-- <img
                            :src="route('im', [comment.image, 1000])"
                            alt=""
                            class="rounded-xl"
                            style="max-width: 300px"
                        /> -->
                    </div>
                </main>
                <footer class="flex items-center">
                    <Reputation
                        type="Comment"
                        :reputation="comment.rep"
                    ></Reputation>
                    <button
                        class="ms-2 text-secondary text-sm"
                        @click="changeShowReplyInterfaceValue(comment.id)"
                    >
                        Ответить
                    </button>
                    <span class="ms-5"
                        >
                        <CommentDropdown class="w-5 h-5 text-secondary opacity-80"
                            @remove="deleteComment()"
                            @enableEditing="
                                changeShowEditingInterfaceValue(comment.id)
                            "
                            :comment="comment"
                        ></CommentDropdown
                    ></span>
                </footer>
            </section>

            <div v-if="showReplyInterface == comment.id" class="px-2 my-2">
                <ReplyInput
                    @sendReply="sendReply"
                    :commentIsCreated="commentIsCreated"
                ></ReplyInput>
            </div>
            <div v-if="showEditingInterface == comment.id" class="px-2 my-2">
                <EditingInput
                    :text="comment.text"
                    :image="comment.image"
                    :id="comment.id"
                    @closeEditingInterface="
                        changeShowEditingInterfaceValue(null)
                    "
                    @updateCommentValue="updateComment"
                ></EditingInput>
            </div>
            <div
                v-if="
                    comment?.replies?.length > 0 &&
                    !showRepliesArray.includes(comment.id)
                "
            >
                <button
                    @click="showRepliesArray.push(comment.id)"
                    class="text-dtfpr hover:opacity-80"
                >
                    {{ $tc("answer", comment.replies_count) }}
                </button>
            </div>
            <div v-if="comment?.replies?.length > 0">
                <!-- <div
                    v-if="isReply && !showRepliesArray.includes(comment.id)"
                ></div> -->
                <div v-if="showRepliesArray.includes(comment.id)">
                    <div v-for="(reply, i) in comment.replies">
                        <Comment
                            @enableHoverBranches="hoverBranches = true"
                            :isBranchParrent="false"
                            @disableHoverBranches="hoverBranches = false"
                            @focusEmit="focusFunction()"
                            @closeReplies="closeReplies()"
                            @enableColorize="colorizeComment = true"
                            @disableColorize="colorizeComment = false"
                            :isReply="true"
                            :key="reply.id"
                            :hoverAllValue="hoverBranches"
                            :showRepliesByDefault="comment.level < 7"
                            :comment="reply"
                            :countOfNeighbours="
                                comment.replies.length - (i + 1)
                            "
                            :branchParrentId="branchParrentId"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, inject, watch, onMounted, onUnmounted, nextTick } from "vue";
import IconArrowUp from "../Icons/IconArrowUp.vue";
import Reputation from "../Reputation.vue";
import UserTabletWithElementInside from "../UserTabletWithElementInside.vue";
import ZoomableImage from "../ZoomableImage.vue";
import CommentDropdown from "./CommentDropdown.vue";
import EditingInput from "./EditingInput.vue";
import ReplyInput from "./ReplyInput.vue";

const limitComments = inject("limitComments");

const isIgnoreLimitEnabled = inject("isIgnoreLimitEnabled");

const showRepliesArray = inject("showRepliesArray");
const changeShowReplyInterfaceValue = inject("changeShowReplyInterfaceValue");
const changeShowEditingInterfaceValue = inject(
    "changeShowEditingInterfaceValue"
);
const showReplyInterface = inject("showReplyInterface");
const showEditingInterface = inject("showEditingInterface");
const callModal = inject("callModal");
const scrollIntoComment = inject("scrollIntoComment");
const post = inject("post");

const props = defineProps({
    isReply: false,
    comment: null,
    type: null,
    showRepliesByDefault: {
        default: false,
    },
    countOfNeighbours: 0,
    hoverAllValue: {
        default: false,
    },
    index: {
        type: Number,
        default: 0,
    },
    isBranchParrent: false,
    branchParrentId: {
        required: true,
    },
});

const commentRef = ref(false);
const replies = ref(props.comment.replies ?? []);
const showReplies = ref(false);
const hoverBranches = ref(false);
const colorizeComment = ref(false);
const showLinkToParent = ref(false);

const focusFunction = () => {
    commentRef.value.scrollIntoView();

    colorizeComment.value = true;
    setTimeout(() => {
        colorizeComment.value = false;
    }, 500);
    nextTick(() => {
        commentRef.value.scrollIntoView({
            block: "center",
        });
    });
    setTimeout(() => {
        commentRef.value.scrollIntoView();

        colorizeComment.value = true;
        setTimeout(() => {
            colorizeComment.value = false;
        }, 500);
        nextTick(() => {
            commentRef.value.scrollIntoView({
                block: "center",
            });
        });
    }, 200);
};

const openSomeReplies = () => {
    if (props.comment.replies?.length == 1 && props.comment.level > 1) {
        if (!showRepliesArray.value.includes(props.comment.id)) {
            showRepliesArray.value.unshift(props.comment.id);
        }
    }
};

onMounted(() => {
    openSomeReplies();
    if (props.comment.id == scrollIntoComment.value) {
        focusFunction();
    }
});

onUnmounted(() => {
    emit("disableHoverBranches");

    if (scrollIntoComment.value == props.comment.id)
        scrollIntoComment.value = null;
});

const emit = defineEmits([
    "enableHoverBranches",
    "disableHoverBranches",
    "enableColorize",
    "disableColorize",
    "closeReplies",
]);

const closeReplies = () => {
    // showRepliesArray.value.splice(
    //     showRepliesArray.value.findIndex((i) => i == props.comment.id)
    // );
    const index = showRepliesArray.value.findIndex(
        (i) => i == props.comment.comment_id
    );
    showRepliesArray.value.splice(index, 1);
    commentRef.value.scrollIntoViewIfNeeded({ block: "center" });
};

const commentIsCreated = ref(false);

const addCommentInObjectTree = inject("addCommentInObjectTree");

const sendReply = (form) => {
    const formData = new FormData();
    formData.append("_method", "POST");
    formData.append("comment_id", showReplyInterface.value);
    formData.append("post_id", props.comment.post_id);
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
            commentIsCreated.value = true;
            showRepliesArray.value.unshift(props.comment.id);
            scrollIntoComment.value = res.data.id;
            setInterval(() => {
                commentIsCreated.value = false;
            }, 20);
            if (res.status == 200 || res.status == 201) {
                // replies.value.unshift(res.data);
                addCommentInObjectTree(res.data, props.branchParrentId);
            }
        });
};

const updateComment = (value) => {
    props.comment.text = value.text;
    props.comment.image = value.image;
    props.comment.image_preview = value.image_preview;
};
</script>

<!-- <script>


export default {
    inject: [
        "showRepliesArray",
        "changeShowReplyInterfaceValue",
        "changeShowEditingInterfaceValue",
        "showReplyInterface",
        "showEditingInterface",
        "callModal",
        "scrollIntoComment",
        "post",
    ],
    props: {
        isReply: false,
        comment: null,
        type: null,
        withoutReplies: false,
        showRepliesByDefault: {
            default: false,
        },
        countOfNeighbours: 0,
        hoverAllValue: {
            default: false,
        },
        closeAllReplies: false,
    },
    data() {
        return {
            isEdited: false,
            enableEditing: false,
            replies: comment.replies ?? [],
            showReplies: this.showRepliesByDefault,
            commentIsCreated: false,
            openReplies: !this.showRepliesByDefault,
        : this.closeAllReplies,
            hoverBranches: this.hoverAllValue,
            colorizeComment: false,
            showLinkToParent: false,
            isDeleted: this.comment.deleted_at != null,
            completelyDeleted: false,
        };
    },
    watch: {
        scrollIntoComment() {
            if (this.comment.id == this.scrollIntoComment) {
                this.focusFunction();
            }
        },
    },

    methods: {
        focusFunction() {
            this.$refs["comment"].scrollIntoView({
                block: "center",
            });
            const interval = setInterval(() => {
                this.colorizeComment = true;
            });
            setTimeout(() => {
                clearInterval(interval);
                this.colorizeComment = false;
            }, 500);
        },
        deleteComment() {
            axios
                .post(route("comment.delete"), {
                    _method: "DELETE",
                    id: this.comment.id,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        if (res.data == null) {
                            this.completelyDeleted = true;
                        } else {
                            this.isDeleted = true;
                        }
                    }
                });
        },
        updateComment(value) {
            this.comment.text = value.text;
            this.comment.image = value.image;
            this.comment.image_preview = value.image_preview;
        },
        hoverBranchesFunction() {
            this.hoverBranches = !this.hoverBranches;
        },
        showRepliesFunction() {
            this.showReplies = true;
            this.showRepliesArray.unshift(this.comment.id);
        },
        closeReplies() {
            this.showRepliesArray.splice(
                this.showRepliesArray.findIndex((i) => i == this.comment.id),
                1
            );
            this = true;
            this.$refs["comment"].scrollIntoViewIfNeeded();
            // const index = this.showRepliesArray.findIndex((i) => i == id);
            // this.showRepliesArray.splice(index);

            // this.comment?.replies.forEach((reply) => {
            //     const index = this.showRepliesArray.findIndex(
            //         (i) => i == reply.id
            //     );
            //     this.showRepliesArray.splice(index, 1);
            // });

            // this.showRepliesArray.splice(index, 1);
            // this.openReplies = false;
            // this.hoverBranches = false;
            // this.$emit("disableHoverBranches");
        },

        sendReply(form) {
            const formData = new FormData();
            formData.append("_method", "POST");
            formData.append("comment_id", this.showReplyInterface);
            formData.append("post_id", this.comment.post_id);
            formData.append("text", form.content);
            formData.append("hasImage", form.image?.hasImage);
            formData.append("image", form.image?.image);
            axios
                .post(route("comment.create"), formData)
                .catch((res) => {
                    if (res.response.status == 401) this.callModal("Auth");
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    this.commentIsCreated = true;
                    this.showRepliesArray.unshift(this.comment.id);
                    this.scrollIntoComment = res.data.id;
                    setInterval(() => {
                        this.commentIsCreated = false;
                    }, 20);
                    if (res.status == 200 || res.status == 201) {
                        this.replies.unshift(res.data);
                    }
                });
        },
    },
    mounted() {
        if (this) {
            const index = this.showRepliesArray.findIndex(
                (i) => i == this.comment.comment_id
            );

            this.showRepliesArray.splice(index, 1);
        }

        if (this.comment.replies?.length == 1 && this.comment.level > 1) {
            this.showRepliesArray.unshift(this.comment.id);
        }
        if (this.comment.id == this.scrollIntoComment) {
            this.focusFunction();
            setTimeout(() => {
                this.focusFunction();
            }, 50);
        }
    },
    unmounted() {
        this.$emit("disableHoverBranches");
    },
    emits: [
        "showReplies",
        "showReplyInterface",
        "remove",
        "showEditingInterface",
        "sendReply",
        "enableHoverBranches",
        "disableHoverBranches",
        "focusEmit",
        "enableColorize",
        "disableColorize",
        "closeReplies",
        "remove",
    ],
    components: {
        UserTabletWithElementInside,
        Dropdown,
        Reputation,
        CommentDropdown,
        ReplyInput,
        IconArrowUp,
        EditingInput,
        IconTrash,
        LazyImage,
        ZoomableImage,
    },
};
</script> -->
