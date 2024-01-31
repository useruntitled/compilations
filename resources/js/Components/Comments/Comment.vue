<template>
    <div class="flex w-full" v-if="!completelyDeleted">
        <div
            style="width: 20px; height: 30px"
            class="border-2 border-t-0 border-e-0 border-bl-1 border-bl-gray-200 border-bl-1 rounded-bl-lg hover:cursor-pointer"
            :class="hoverAllValue ? 'border-sky-600' : ''"
            @mouseenter="this.$emit('enableHoverBranches')"
            @mouseleave="this.$emit('disableHoverBranches')"
            @click="closeReplies(comment.comment.id)"
            v-if="isReply && countOfNeighbours == 0 && nestingLevel < 7"
        ></div>

        <div
            v-if="isReply && countOfNeighbours > 0 && nestingLevel < 7"
            class="h-full border-s-2 hover:cursor-pointer"
            :class="hoverAllValue ? 'border-sky-600' : ''"
            style="height: auto"
            @mouseenter="this.$emit('enableHoverBranches')"
            @mouseleave="this.$emit('disableHoverBranches')"
            @click="closeReplies(comment.comment.id)"
        >
            <div
                style="width: 20px; height: 30px"
                class="ms-[-1.5px] border-2 border-t-0 border-e-0 border-bl-1 border-bl-gray-200 border-bl-1 rounded-bl-lg"
                :class="hoverAllValue ? 'border-sky-600' : ''"
            ></div>
        </div>
        <div
            class="my-2 px-0 bg-white rounded-xl p-2 pb-0 w-full"
            :class="nestingLevel < 7 && isReply ? 'ms-2' : ''"
        >
            <section
                ref="comment"
                class="duration-500"
                :class="colorizeComment ? 'opacity-50' : ''"
                @mouseenter="this.showLinkToParent = true"
                @mouseleave="this.showLinkToParent = false"
            >
                <header class="flex items-start p-0 m-0">
                    <!-- <UserTablet :user="comment.user"></UserTablet> -->
                    <UserTabletWithElementInside
                        :user="comment.user"
                        v-if="!isDeleted"
                    >
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
                    <div v-else>
                        <div class="flex items-center">
                            <div class="p-2 bg-gray-200 rounded-full">
                                <IconTrash class="w-6 h-6"></IconTrash>
                            </div>
                            <span class="ms-2 font-semibold"
                                >Удалённый комментарий</span
                            >
                        </div>
                    </div>
                    <button
                        @click="this.$emit('focusEmit')"
                        @mouseenter="this.$emit('enableColorize')"
                        @mouseleave="this.$emit('disableColorize')"
                        v-if="isReply && showLinkToParent"
                        class="pt-2"
                    >
                        <IconArrowUp
                            class="stroke-1 w-4 h-4 hover:opacity-60"
                        ></IconArrowUp>
                    </button>
                </header>
                <main>
                    <p
                        v-html="comment.text"
                        class="text-17"
                        v-if="!isDeleted"
                    ></p>
                    <div v-if="comment.image && !isDeleted">
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
                <footer class="flex items-center" v-if="!isDeleted">
                    <Reputation
                        type="Comment"
                        :reputation="comment.rep"
                    ></Reputation>
                    <button
                        class="ms-2 text-secondary text-sm"
                        @click="
                            this.changeShowReplyInterfaceValue(this.comment.id)
                        "
                    >
                        Ответить
                    </button>
                    <span class="ms-5"
                        ><CommentDropdown
                            @remove="deleteComment()"
                            @enableEditing="
                                changeShowEditingInterfaceValue(comment.id)
                            "
                            :comment="this.comment"
                        ></CommentDropdown
                    ></span>
                </footer>
            </section>

            <div v-if="showReplyInterface == comment.id" class="px-2">
                <ReplyInput
                    @sendReply="sendReply"
                    :commentIsCreated="this.commentIsCreated"
                ></ReplyInput>
            </div>
            <div v-if="showEditingInterface == comment.id" class="px-2">
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
                    replies.length > 0 && !showRepliesArray.includes(comment.id)
                "
            >
                <button
                    @click="showRepliesArray.push(comment.id)"
                    class="text-dtfpr hover:opacity-80"
                >
                    {{ $tc("answer", replies.length) }}
                </button>
            </div>

            <div v-if="replies.length > 0">
                <!-- <div
                    v-if="isReply && !showRepliesArray.includes(comment.id)"
                ></div> -->
                <div v-show="showRepliesArray.includes(comment.id)">
                    <comment
                        @enableHoverBranches="this.hoverBranches = true"
                        @disableHoverBranches="this.hoverBranches = false"
                        @focusEmit="focusFunction()"
                        @enableColorize="this.colorizeComment = true"
                        @disableColorize="this.colorizeComment = false"
                        v-for="(reply, index) in replies"
                        :isReply="true"
                        :key="reply.id"
                        :hoverAllValue="hoverBranches"
                        :showRepliesByDefault="nestingLevel < 7"
                        :comment="reply"
                        :countOfNeighbours="replies.length - (index + 1)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Dropdown from "../Dropdown.vue";
import IconArrowUp from "../Icons/IconArrowUp.vue";
import IconTrash from "../Icons/IconTrash.vue";
import LazyImage from "../LazyImage.vue";
import Reputation from "../Reputation.vue";
import UserTabletWithElementInside from "../UserTabletWithElementInside.vue";
import ZoomableImage from "../ZoomableImage.vue";
import CommentDropdown from "./CommentDropdown.vue";
import EditingInput from "./EditingInput.vue";
import ReplyInput from "./ReplyInput.vue";

export default {
    inject: [
        "showRepliesArray",
        "changeShowReplyInterfaceValue",
        "changeShowEditingInterfaceValue",
        "showReplyInterface",
        "showEditingInterface",
        "callModal",
        "scrollIntoComment",
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
    },
    data() {
        return {
            isEdited: false,
            enableEditing: false,
            showReplies: this.showRepliesByDefault,
            replies: this.comment.replies,
            commentIsCreated: false,
            openReplies: !this.showRepliesByDefault,
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
    computed: {
        nestingLevel() {
            function process(comment, count) {
                if (comment.comment != null) {
                    return process(comment.comment, count + 1);
                } else {
                    return count;
                }
            }
            return process(this.comment, 0);
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
        closeReplies(id) {
            const index = this.showRepliesArray.findIndex((i) => i == id);
            this.showRepliesArray.splice(index, 1);
            this.openReplies = false;
            this.hoverBranches = false;
            this.$emit("disableHoverBranches");
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
        console.log(this.nestingLevel);
        if (this.comment.id == this.scrollIntoComment) {
            this.focusFunction();
            setTimeout(() => {
                this.focusFunction();
            }, 50);
        }
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
</script>
