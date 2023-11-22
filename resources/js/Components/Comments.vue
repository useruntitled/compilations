<template>
    <Csrf></Csrf>
    <div class="bg-white shadow-xl p-5 my-5 mx-auto">
        <div class="shadow p-5 my-5">
            <p class="text-sm">Оставить комментарий</p>
            <div class="w-full mx-auto text-center flex">
                <textarea
                    v-model="input"
                    @input="handleInputTextarea($event)"
                    rows="1"
                    type="text"
                    class="rounded-xl w-full text-sm"
                    @keydown.enter.exact.prevent="addComment()"
                />
                <button type="button" @click.prevent="addComment()">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <div v-if="!post.comments.length">
            <p class="text-sm">Пока нет комментариев</p>
        </div>
        <div
            v-else
            v-for="comment in comments"
            :key="comment.id"
            class="rounded-xl p-5 shadow my-5"
        >
            <Comment
                :comment="comment"
                @edit="edit(comment.id)"
                @remove="remove(comment.id)"
                @reply="reply(comment.id)"
                @cancelReply="cancelReply(comment.id)"
                @cancelEditing="cancelEditing(comment.id)"
                @put="put(comment.id)"
            ></Comment>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Comment from "./Comment.vue";

export default {
    props: {
        post: null,
    },
    data() {
        return {
            comments: this.post ? this.post.comments : [],
            input: null,
        };
    },
    methods: {
        handleInputTextarea(e) {
            // console.log(this.$refs['edit-input-15'][0].value);
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
        },

        addComment() {
            axios
                .post(route("comment.create"), {
                    post_id: this.post.id,
                    text: this.input,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        this.comments.unshift(res.data);
                        console.log(this.input);
                        this.input = "";
                    }
                });
        },
        edit(id) {
            let listIndex = this.comments.findIndex((obj) => obj.id == id);
            this.comments[listIndex].isEditing = true;
        },

        cancelEditing(id) {
            let listIndex = this.comments.findIndex((obj) => obj.id == id);
            this.comments[listIndex].isEditing = false;
        },
        remove(id) {
            let listIndex = this.comments.findIndex((obj) => obj.id == id);
            this.comments.splice(listIndex, 1);
        },
        reply(id) {
            let listIndex = this.comments.findIndex((obj) => obj.id == id);
            this.comments[listIndex].isReplying = true;
        },
        cancelReply(id) {
            let listIndex = this.comments.findIndex((obj) => obj.id == id);
            this.comments[listIndex].isReplying = false;
        },
        sortedComments() {
            return this.comments.sort((a, b) => b - a);
        },
    },
    components: { Comment },
};
</script>
