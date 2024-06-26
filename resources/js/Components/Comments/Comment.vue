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
                    <user-tablet-with-element-inside :user="comment.user">
                        <template #content>
                            <p class="text-xs opacity-80">
                                {{ comment.timestamp }}
                            </p>
                        </template>
                    </user-tablet-with-element-inside>

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
                    <p
                        v-html="comment.text"
                        class="text-17 w-auto sm:w-auto sm:max-w-screen-sm overflow-hidden break-words"
                    ></p>
                    <div style="max-width: 50%">
                        <fluid-lazy-media
                            v-if="comment.image"
                            :media="comment.image"
                            :max-height="200"
                            rounded="lg"
                        />
                    </div>
                </main>
                <footer class="flex items-center">
                    <Reputation
                        type="Comment"
                        :reputation="comment.reputation"
                    ></Reputation>
                    <button
                        class="ms-2 text-secondary text-sm"
                        @click="changeShowReplyInterfaceValue(comment.id)"
                    >
                        Ответить
                    </button>
                    <span class="ms-5">
                        <CommentDropdown
                            class="w-5 h-5 text-secondary opacity-80"
                            @remove="emit('remove', comment.id)"
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
                    :comment_id="comment.id"
                ></ReplyInput>
            </div>
            <div v-if="showEditingInterface == comment.id" class="px-2 my-2">
                <EditingInput
                    :comment="comment"
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
                            @remove="remove(reply.id)"
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
import Reputation from "../Forms/Reputation.vue";
import UserTabletWithElementInside from "../User/UserTabletWithElementInside.vue";
import CommentDropdown from "./CommentDropdown.vue";
import EditingInput from "./EditingInput.vue";
import ReplyInput from "./ReplyInput.vue";
import FluidLazyMedia from "@/Components/Media/FluidLazyMedia.vue";
import { commentApi } from "@/api/commentApi.js";

const limitComments = inject("limitComments");

const isIgnoreLimitEnabled = inject("isIgnoreLimitEnabled");

const showRepliesArray = inject("showRepliesArray");
const changeShowReplyInterfaceValue = inject("changeShowReplyInterfaceValue");
const changeShowEditingInterfaceValue = inject(
    "changeShowEditingInterfaceValue",
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
    "remove",
]);

const closeReplies = () => {
    const index = showRepliesArray.value.findIndex(
        (i) => i == props.comment.comment_id,
    );
    showRepliesArray.value.splice(index, 1);
    commentRef.value.scrollIntoViewIfNeeded({ block: "center" });
};

const commentIsCreated = ref(false);

const addCommentInObjectTree = inject("addCommentInObjectTree");

const sendReply = (form) => {
    commentApi.store(form, (res) => {
        console.log(res);
        commentIsCreated.value = true;
        showRepliesArray.value.unshift(props.comment.id);
        scrollIntoComment.value = res.data.id;
        setTimeout(() => {
            commentIsCreated.value = false;
        }, 20);
        if (res.status == 200 || res.status == 201) {
            addCommentInObjectTree(res.data, props.branchParrentId);
        }
    });
};

const updateComment = (value) => {
    props.comment.text = value.text;
    props.comment.image = value.image;
};

const remove = (id) => {
    props.comment.replies[
        props.comment.replies.findIndex((c) => c.id == id)
    ].text = "Комментарий удалён";
    axios
        .post(route("comment.delete"), {
            _method: "DELETE",
            id: id,
        })
        .then((res) => {});
};
</script>
