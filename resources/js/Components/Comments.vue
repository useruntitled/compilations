<template>
    <Csrf></Csrf>
    <div class="bg-white rounded-xl p-5 my-5 mx-auto">
        <div class="p-5 my-5">
            <p class="text-sm mb-2">Оставить комментарий</p>
            <div class="w-full mx-auto text-center flex">
                <textarea
                    v-model="input"
                    @input="handleInputTextarea($event)"
                    rows="1"
                    type="text"
                    class="rounded-xl w-full overflow-hidden bg-gray-100 border-2 border-white hover:border-kp focus:border-kp focus:ring-kp focus:bg-white hover:bg-white"
                    @keydown.enter.exact.prevent="addComment()"
                />
            </div>
            <div class="text-end mt-2">
                <!-- <PrimaryButton v-if="!isLoading" @click="addComment()"
                    >Отправить</PrimaryButton
                >
                <div v-else class="flex justify-end px-8 my-4 mb-5">
                    <AnimationLoading></AnimationLoading>
                </div> -->
                <LoadingPrimaryButton
                    @click="addComment()"
                    :isLoaded="isLoading"
                    >Отправить</LoadingPrimaryButton
                >
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
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import AnimationLoading from "./Animations/AnimationLoading.vue";
import LoadingPrimaryButton from "./Buttons/LoadingPrimaryButton.vue";

export default {
    props: {
        post: null,
    },
    data() {
        return {
            comments: this.post ? this.post.comments : [],
            input: null,
            isLoading: false,
        };
    },
    methods: {
        handleInputTextarea(e) {
            // console.log(this.$refs['edit-input-15'][0].value);
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
        },

        addComment() {
            this.isLoading = true;
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
                    this.isLoading = false;
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
    components: {
        Comment,
        PrimaryButton,
        AnimationLoading,
        LoadingPrimaryButton,
    },
};
</script>
