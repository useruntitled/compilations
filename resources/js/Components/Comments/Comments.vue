<template>
    <div class="bg-white p-5 rounded-xl mt-5" ref="comments">
        <p class="text-xl mb-8 font-semibold">Комментарии</p>
        <div class="px-2 mb-5">
            <div v-if="!showReplyInterface && !showEditingInterface">
                <CommentInput
                    @sendComment="sendComment"
                    :commentIsCreated="commentIsCreated"
                ></CommentInput>
            </div>
        </div>
        <main>
            <Comment
                v-for="comment in comments"
                v-show="!comment.is_reply"
                :key="comment.id"
                :comment="comment"
                @sendReply="sendReply"
                @remove="remove(comment.id)"
            ></Comment>
        </main>
    </div>
</template>

<script>
import Csrf from "@/Pages/shared/csrf.vue";
import Comment from "./Comment.vue";
import CommentInput from "./CommentInput.vue";
import Reply from "./Reply.vue";
import ReplyInput from "@/Components/Comments/ReplyInput.vue";
import axios from "axios";
import EditingInput from "./EditingInput.vue";
import { computed } from "vue";
import ZoomableImage from "../ZoomableImage.vue";

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
        sendComment(comment_value) {
            axios
                .post(route("comment.create"), {
                    post_id: this.post.id,
                    text: comment_value,
                })
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
        sendReply(reply_value) {
            axios
                .post(route("comment.create"), {
                    comment_id: this.showReplyInterface,
                    post_id: this.post.id,
                    text: reply_value,
                })
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
</script>
