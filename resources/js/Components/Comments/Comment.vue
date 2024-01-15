<template>
    <div class="flex w-full" v-if="!completelyDeleted">
        <div
            style="width: 20px; height: 20px"
            class="border-2 border-t-0 border-e-0 border-bl-1 border-bl-gray-200 border-bl-1 rounded-bl-lg hover:cursor-pointer"
            :class="hoverAllValue ? 'border-sky-600' : ''"
            @mouseenter="this.$emit('enableHoverBranches')"
            @mouseleave="this.$emit('disableHoverBranches')"
            @click="this.$emit('closeReplies')"
            v-if="isReply && countOfNeighbours == 0 && nestingLevel < 5"
        ></div>

        <div
            v-if="isReply && countOfNeighbours > 0 && nestingLevel < 5"
            class="h-full border-s-2 hover:cursor-pointer"
            :class="hoverAllValue ? 'border-sky-600' : ''"
            style="height: auto"
            @mouseenter="this.$emit('enableHoverBranches')"
            @mouseleave="this.$emit('disableHoverBranches')"
            @click="this.$emit('closeReplies')"
        >
            <div
                style="width: 20px; height: 20px"
                class="ms-[-1.5px] border-2 border-t-0 border-e-0 border-bl-1 border-bl-gray-200 border-bl-1 rounded-bl-lg"
                :class="hoverAllValue ? 'border-sky-600' : ''"
            ></div>
        </div>
        <div
            class="my-2 px-0 bg-white rounded-xl p-2 pb-0 w-full"
            :class="nestingLevel < 5 && isReply ? 'ms-4' : ''"
        >
            <section
                ref="comment"
                class="duration-500"
                :class="colorizeComment ? 'bg-orange-50' : ''"
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
                        class="text-base"
                        v-if="!isDeleted"
                    ></p>
                </main>
                <footer class="flex items-center" v-if="!isDeleted">
                    <Reputation
                        type="Comment"
                        :reputation="comment.rep"
                    ></Reputation>
                    <button
                        class="ms-2 text-sm text-secondary"
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
                    :id="comment.id"
                    @closeEditingInterface="
                        changeShowEditingInterfaceValue(null)
                    "
                    @updateCommentValue="updateComment"
                ></EditingInput>
            </div>

            <div v-if="isReply && replies.length > 0 && !openReplies">
                <button
                    @click="openReplies = true"
                    class="text-dtfpr hover:opacity-80"
                >
                    {{ $tc("answer", replies.length) }}
                </button>
            </div>

            <div v-if="replies.length > 0">
                <div v-if="isReply && !openReplies"></div>
                <div v-else>
                    <comment
                        @enableHoverBranches="this.hoverBranches = true"
                        @disableHoverBranches="this.hoverBranches = false"
                        @focusEmit="focusFunction()"
                        @enableColorize="this.colorizeComment = true"
                        @disableColorize="this.colorizeComment = false"
                        @closeReplies="
                            this.openReplies = false;
                            this.hoverBranches = false;
                        "
                        v-for="(reply, index) in replies"
                        :isReply="true"
                        :key="reply.id"
                        :hoverAllValue="hoverBranches"
                        :showRepliesByDefault="nestingLevel < 5"
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
import Reputation from "../Reputation.vue";
import UserTabletWithElementInside from "../UserTabletWithElementInside.vue";
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
            this.comment.text = value;
        },
        hoverBranchesFunction() {
            this.hoverBranches = !this.hoverBranches;
        },
        showRepliesFunction() {
            this.showReplies = true;
            this.showRepliesArray.unshift(this.comment.id);
        },
        sendReply(reply_value) {
            axios
                .post(route("comment.create"), {
                    comment_id: this.showReplyInterface,
                    post_id: this.comment.post_id,
                    text: reply_value,
                })
                .catch((res) => {
                    if (res.response.status == 401) this.callModal("Auth");
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    this.commentIsCreated = true;
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
    },
};
</script>
