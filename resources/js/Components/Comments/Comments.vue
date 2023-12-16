<template>
    <div class="bg-white p-5 rounded-xl mt-5" ref="comments">
        <p class="text-xl mb-8 font-semibold">Комментарии</p>
        <div class="px-2 mb-5" v-if="showReplyInterface == null">
            <CommentInput
                @sendComment="sendComment"
                :commentIsCreated="commentIsCreated"
            ></CommentInput>
        </div>
        <main>
            <div v-for="comment in comments" :key="comment.id">
                <Comment
                    :comment="comment"
                    @showReplies="showRepliesFunction(comment.id)"
                    @showReplyInterface="
                        showReplyInterface = comment.id;
                        showReplyToReplyInterface = null;
                    "
                ></Comment>
                <div class="px-2 mb-5" v-if="showReplyInterface == comment.id">
                    <ReplyInput
                        :replyTo="comment.id"
                        @sendReply="sendReply"
                        :commentIsCreated="commentIsCreated"
                        @closeReplyInterface="
                            showReplyInterface = null;
                            showReplyToReplyInterface = null;
                        "
                    ></ReplyInput>
                </div>
                <div v-show="showRepliesArray.includes(comment.id)">
                    <div v-for="reply in comment.replies" class="ms-5">
                        <Reply
                            :reply="reply"
                            @openReplies="findCommentAndOpenReplies"
                            @showReplyInterface="
                                showReplyToReplyInterface = reply.id;
                                showReplyInterface = -1;
                            "
                        ></Reply>
                        <div
                            class="px-2 mb-5"
                            v-show="showReplyToReplyInterface == reply.id"
                        >
                            <ReplyInput
                                :replyTo="reply.id"
                                @sendReply="sendReply"
                                :commentIsCreated="commentIsCreated"
                                @closeReplyInterface="
                                    showReplyToReplyInterface = null;
                                    showReplyInterface = null;
                                "
                            ></ReplyInput>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Csrf from "@/Pages/shared/csrf.vue";
import Comment from "./Comment.vue";
import CommentInput from "./CommentInput.vue";
import Reply from "./Reply.vue";
import ReplyInput from "@/Components/Comments/ReplyInput.vue";
export default {
    props: {
        post: null,
    },
    data() {
        return {
            showRepliesArray: [],
            showReplyInterface: null,
            showReplyToReplyInterface: null,
            comments: this.post.comments,
            commentIsCreated: false,
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
        sendComment(comment_value) {
            axios
                .post(route("comment.create"), {
                    post_id: this.post.id,
                    text: comment_value,
                })
                .catch((res) => {
                    if (res.response.status == 401) this.callAuthModal();
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
        sendReply(reply_value) {
            axios
                .post(route("reply.create"), {
                    comment_id: this.showReplyInterface,
                    text: reply_value,
                })
                .catch((res) => {
                    if (res.response.status == 401) this.callAuthModal();
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    let index = this.comments.findIndex(
                        (obj) => obj.id == this.showReplyInterface
                    );
                    if (res.status == 200 || res.status == 201) {
                        this.comments[index].replies.unshift(res.data);
                        this.comments[index].replies_count += 1;
                        this.commentIsCreated = true;
                        setTimeout(() => {
                            this.commentIsCreated = false;
                        }, 20);
                    }
                });
        },
    },
    emits: ["showReplies", "showReplyInterface", "sendComment"],
    components: { Comment, Reply, CommentInput, Csrf, ReplyInput },
};
</script>
