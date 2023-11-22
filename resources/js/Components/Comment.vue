<template>
    <p class="text-sm">#{{ comment.id }}</p>
    <header class="border-b flex items-center justify-between">
        <UserTablet :user="comment.user"></UserTablet>

        <Dropdown
            width="auto"
            v-if="
                $page.props.auth.user &&
                comment_data.user.id == $page.props.auth.user.id
            "
        >
            <template #trigger>
                <button class="font-semibold text-xl text-slate-800">
                    ...
                </button>
            </template>
            <template #content>
                <div class="px-2">
                    <button
                        @click.prevent="isEditing = true"
                        class="block text-sm"
                        type="button"
                    >
                        Редактировать
                    </button>
                    <button
                        @click.prevent="remove()"
                        class="block text-sm"
                        type="button"
                    >
                        Удалить
                    </button>
                </div>
            </template>
        </Dropdown>
    </header>
    <main class="text-sm text-slate-900">
        <div v-if="isEditing">
            <textarea
                v-html="comment_data.text.replace('<br />', '')"
                v-model="input_edit"
                @input="handleInputTextarea($event)"
                :rows="countTextareaRowsByBrs(comment_data.text)"
                type="text"
                class="rounded-xl w-full text-sm"
                @keydown.enter.exact.prevent="put()"
            />
            <div class="text-sm flex justify-between">
                <button @click.prevent="isEditing = false">Отменить</button>
                <button @click.prevent="put()">Сохранить</button>
            </div>
        </div>
        <p v-else v-html="comment_data.text"></p>
        <div class="flex justify-between items-center">
            <Reputation
                :reputation="comment_data.reputation"
                type="comment"
            ></Reputation>
            <button
                @click.prevent="isReplying = true"
                v-if="$page.props.auth.user"
                class="text-sm text-slate-800"
            >
                Ответить
            </button>
        </div>
    </main>

    <div v-if="isReplying" class="p-5 shadow my-5">
        <p class="text-sm">Оставить ответ</p>
        <div class="w-full mx-auto text-center flex">
            <textarea
                v-model="input_reply"
                @input="handleInputTextarea($event)"
                rows="1"
                type="text"
                class="rounded-xl w-full text-sm"
                @keydown.enter.exact.prevent="leaveReply()"
            />
            <button type="button" @click.prevent="leaveReply()">
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
        <button @click.prevent="isReplying = false" class="text-sm">
            Отменить
        </button>
    </div>

    <!-- replies  -->
    <button
        v-if="!showReplies && comment.replies_count > 0"
        @click.prevent="loadReplies()"
        class="text-sm text-sky-600"
    >
        Показать ответы ({{ comment.replies_count }})
    </button>
    <button
        v-if="showReplies"
        @click.prevent="loadReplies()"
        class="text-sm text-sky-600"
    >
        Скрыть ответы
    </button>

    <!-- svg loading status -->
    <div v-if="loading" class="my-5 bg-white pb-2">
        <p class="text-sm text-slate-500 animate-spin">
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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
            </svg>
        </p>
    </div>

    <TransitionGroup>
        <div
            v-if="showReplies"
            v-for="reply in replies"
            :key="reply.id"
            class="shadow p-5 my-5"
        >
            <Reply
                :reply="reply"
                @remove="removeReply(reply.id)"
                @createReplyToReply="createReplyToReply"
            ></Reply>
        </div>
    </TransitionGroup>
</template>
<script>
import axios from "axios";
import Dropdown from "./Dropdown.vue";
import Reputation from "./Reputation.vue";
import Reply from "./Reply.vue";
import UserTablet from "./UserTablet.vue";

export default {
    emits: ["edit", "remove", "reply", "cancelEditing", "cancelReply", "put"],
    props: {
        comment: null,
    },
    data() {
        return {
            replies: null,
            comment_data: this.comment ?? null,
            isEditing: false,
            isReplying: false,
            input_edit: this.comment.text ?? null,
            input_reply: null,
            loading: false,
            showReplies: false,
        };
    },
    methods: {
        countTextareaRowsByBrs(text) {
            return text.split("<br />").length;
        },
        handleInputTextarea(e) {
            // console.log(this.$refs['edit-input-15'][0].value);
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
        },
        leaveReply() {
            axios
                .post(route("reply.create"), {
                    comment_id: this.comment.id,
                    text: this.input_reply,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    if ((res.status = 200)) {
                        this.input_reply = "";
                        if (this.replies == null) {
                            this.replies = [];
                            this.loadReplies();
                        }
                        this.replies.push(res.data);
                        this.isReplying = false;
                    }
                    console.log(res);
                });
        },
        createReplyToReply(reply) {
            // alert("!!!!!!!!!!");
            this.replies.push(reply);
            // console.log("!!!!!!!!!!!", this.replies);
        },
        loadReplies() {
            if (this.replies == null) {
                this.loading = true;
                axios
                    .get(route("replies.get", [this.comment.id]))
                    .catch((res) => {
                        console.log(res);
                    })
                    .then((res) => {
                        console.log(res);
                        this.loading = false;
                        if (res.status == 200) {
                            this.replies = res.data;
                            this.showReplies = true;
                            console.log(this.comment);
                        }
                    });
            } else {
                this.showReplies = !this.showReplies;
            }
        },
        put() {
            // let listIndex = this.comments.findIndex((obj) => obj.id == id);
            // this.comments[listIndex].isEditing = false;
            axios
                .post(route("comment.update"), {
                    _method: "PUT",
                    id: this.comment.id,
                    text: this.input_edit,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        // this.comments[listIndex].text = res.data.text;
                        this.comment_data.text = res.data.text;
                        this.isEditing = false;
                    }
                });
        },
        remove() {
            axios
                .post(
                    route("comment.delete", {
                        _method: "DELETE",
                        id: this.comment.id,
                    })
                )
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        this.$emit("remove");
                    }
                });
        },
        removeReply(id) {
            let listIndex = this.replies.findIndex((obj) => obj.id == id);
            this.replies.splice(listIndex, 1);
        },
    },
    components: { Reputation, Dropdown, Reply, UserTablet },
};
</script>
<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transition: 0s ease;
}
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    position: absolute;
    animation: spin 1.5s linear infinite;
}
</style>
