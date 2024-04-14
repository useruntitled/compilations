<template>
    <div
        class="bg-white md:p-5 xs:py-4 xs:px-2 rounded-xl mt-5 z-0"
        :class="!123 ? 'rounded-b-none' : ''"
        ref="comments_block"
    >
        <p class="text-xl mb-8 font-medium flex justify-between items-center">
            <p>Комментарии</p>
            <div class="text-sm  hover:opacity-80  hover:cursor-pointer">
                <dropdown>
                    <template #trigger>
                        <div class="flex items-center">
                            <span>{{ currentSort }}</span>
                            <div class="ms-2">
                                <IconChewronDown class="w-5 h-5" />
                            </div>
                        </div>
                    </template>
                    <template #content>
                        <div class="items-start px-5 opacity-100 text-black space-y-1">
                            <button class="block hover:opacity-80"
                                    @click="resortComments(sortByReputationOverall, 'sortByReputationOverall')">По
                                количеству оценок
                            </button>
                            <button class="block hover:opacity-80"
                                    @click="resortComments(sortByNewest, 'sortByNewest')">Сначала новые
                            </button>
                        </div>
                    </template>
                </dropdown>
            </div>
        </p>
        <div class="md:px-2 mb-5">
            <div v-if="!showReplyInterface && !showEditingInterface">
                <CommentInput
                    @sendComment="createComment"
                    :commentIsCreated="commentIsCreated"
                    :post_id="post.id"
                />
            </div>
        </div>
        <div></div>
        <main class="max-w-screen">
            <AnimationLoader
                v-if="!isLoaded"
                class="mx-auto stroke-gray-500"
            />

            <div v-for="(comment, index) in comments">
                <Comment
                    v-if="index < limitComments || isIgnoreLimitEnabled"
                    :comment="comment"
                    @remove="removeComment(comment.id)"
                    :isBranchParrent="true"
                    :branchParrentId="comment.id"
                    :key="comment.id"
                />
            </div>
        </main>
        <div
            v-if="!showReplyInterface && !showEditingInterface && isLoaded && comments?.length > 10 && isIgnoreLimitEnabled"
            class="mt-4">
            <comment-input
                @sendComment="createComment"
                :commentIsCreated="commentIsCreated"
            ></comment-input>
        </div>
    </div>

    <div
        v-if="comments?.length > limitComments && !isIgnoreLimitEnabled"
        class="bg-white border-t-2 w-full p-3 px-5 mt-[-15px] flex items-center justify-between rounded-b-xl"
    >
        <button
            class="text-dtfpr hover:opacity-70 text-17px"
            @click="isIgnoreLimitEnabled = true"
        >
            Раскрыть
        </button>
    </div>
</template>

<script setup>
import { inject, ref, provide, onMounted, watch, nextTick } from "vue";
import Comment from "./Comment.vue";
import CommentInput from "./CommentInput.vue";
import AnimationLoader from "../Animations/AnimationLoader.vue";
import Dropdown from "../Dropdowns/Dropdown.vue";
import IconChewronDown from "../Icons/IconChewronDown.vue";
import { usePage } from "@inertiajs/vue3";
import { commentApi } from "@/api/commentApi.js";

const isLoaded = ref(false);

const limitComments = 7;

const isIgnoreLimitEnabled = ref(false);

const visibleComments = ref(0);

const postRepliesCount = ref(0);

const page = usePage();

provide("visibleComments", visibleComments);

provide("isIgnoreLimitEnabled", isIgnoreLimitEnabled);

provide("limitComments", limitComments);

const emit = defineEmits(["load"]);

watch(isLoaded, (newValue, oldValue) => {
    if (newValue == true) emit("load");
});

const loadComments = async () => {
    await commentApi.getByPostId(props.post.id, async (res) => {
        console.log(res);
        isLoaded.value = true;
        comments.value = res.data;
        await processComments();
    });

};

const hasParam = (param) => {
    const url = new URL(window.location.href);
    return url.searchParams.has(param);
};

const getParam = (param) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
};

const sortByReputationOverall = (a, b) => {
    if (b.reputation.overall > a.reputation.overall) return 1;
    return -1;
};

const sortByNewest = (a, b) => {
    if (b.created_at > a.created_at) return 1;
    return -1;
};

const resortComments = async (func, value) => {

    await processComments(func);
    nextTick(() => {
        comments_block.value.scrollIntoViewIfNeeded();
    });

    currentSort.value = sortingValues[value];
};

const sortingValues = {
    sortByReputationOverall: "По количеству оценок",
    sortByNewest: "Сначала новые"
};

const currentSort = ref(sortingValues.sortByReputationOverall);

const processComments = async (sortFunction = sortByReputationOverall) => {
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
                comments.value[index(comment.comment_id)].replies.sort(
                    sortFunction
                );
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
        comments.value.sort(sortFunction);
    });

    return true;
};

const countReplies = (comment) => {
    let count = 0;

    function updateCount(comm) {
        if (comm?.replies?.length > 0) {
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
    id: null
});

const postCommentsCount = ref(0);
const postVisibleCommentsCount = ref(0);

onMounted(async () => {
    if (hasParam("comment")) {
        isIgnoreLimitEnabled.value = true;

        comments_block.value?.scrollIntoView();
        nextTick(() => {
            comments_block.value?.scrollIntoView();
        });
        commentToScrollInto.value.has = true;
        commentToScrollInto.value.id = getParam("comment");
        scrollIntoComment.value = getParam("comment");
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
    comments.value.forEach((comment) => {
        if (comment.level == 0) showRepliesArray.value.unshift(comment.id);
        countReplies(comment);
    });
});

const callModal = inject("callModal");

const props = defineProps({
    post: null
});

const showRepliesArray = ref([]);
const showReplyInterface = ref(null);
const showReplyEditingInterface = ref(null);
const showEditingInterface = ref(null);
const comments = ref(null);
const comments_block = ref(null);
const commentIsCreated = ref(false);
const scrollIntoComment = ref(null);

const findComment = (id) => {
    function find(comment) {
        if (comment.id === id) {
            return comment;
        }
        if (comment.replies) {
            for (const reply of comment.replies) {
                const found = find(reply);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    }

    for (const comment of comments.value) {
        const found = find(comment);
        if (found) {
            return found;
        }
    }
    return null;
};

const addCommentInObjectTree = (comment, parrent_id) => {
    const parrent = findComment(comment.comment_id);
    console.log("!!", parrent);
    if (!parrent.replies) {
        parrent.replies = [];
    }
    parrent.replies.unshift(comment);

    const index = comments.value.findIndex((obj) => obj.id == parrent_id);
    console.log("parrent index :", index, "parrent_id", parrent_id);
    if (index == -1) return;
    countReplies(comments.value[index]);
    countReplies(findComment(comment.comment_id));
};

provide("addCommentInObjectTree", addCommentInObjectTree);


const createComment = (form) => {
    if (!page.props.auth.check) {
        callModal("auth");
        return;
    }
    commentApi.store(form, (res) => {
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

const removeComment = (id) => {
    comments.value[comments.value.findIndex((c) => c.id == id)].text = "Комментарий удалён";
    commentApi.destroy(id, (res) => {
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
