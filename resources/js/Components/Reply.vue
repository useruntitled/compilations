<template>
    <header class="border-b flex items-center justify-between">
        <UserTablet :user="reply.user"></UserTablet>
        <Dropdown
            width="auto"
            v-if="
                $page.props.auth.user &&
                reply.user.id == $page.props.auth.user.id
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
        <!-- :href="
                reply.isReplyToReply
                    ? '#reply' + reply.reply_to.reply_id
                    : '#comment-' + reply.reply_to.reply_id
            " -->
        <a v-if="reply.reply_to" class="text-sm my-1 text-slate-600">
            Ответ {{ reply.reply_to.user.name }}
            <span class="text-slate-400">
                {{
                    reply.isReplyToReply
                        ? "Ответ на ответ #" + reply.reply_to.reply_id
                        : "Ответ на комментарий"
                }}
            </span>
        </a>
        <div v-if="isEditing">
            <textarea
                v-html="reply_data.text.replace('<br />', '')"
                v-model="input_edit"
                @input="handleInputTextarea($event)"
                :rows="countTextareaRowsByBrs(reply.text)"
                type="text"
                class="rounded-xl w-full text-sm"
                @keydown.enter.exact.prevent="put()"
            />
            <div class="text-sm flex justify-between">
                <button @click.prevent="isEditing = false">Отменить</button>
                <button @click.prevent="put()">Сохранить</button>
            </div>
        </div>
        <p v-else v-html="reply.text"></p>
        <div class="flex justify-between items-center">
            <Reputation
                :reputation="reply.reputation"
                type="reply"
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
    <div class="my-5" v-if="isReplying">
        <p class="text-sm">Оставить ответ</p>
        <div class="w-full mx-auto text-center flex">
            <textarea
                v-model="input_reply"
                @input="handleInputTextarea($event)"
                rows="1"
                type="text"
                class="rounded-xl w-full text-sm"
                @keydown.enter.exact.prevent="createReply()"
            />
            <button type="button" @click.prevent="createReply()">
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
</template>
<script>
import axios from "axios";
import Dropdown from "./Dropdown.vue";
import Reputation from "./Reputation.vue";
import UserTablet from "./UserTablet.vue";

export default {
    emits: ["remove", "createReplyToReply"],
    props: {
        reply: null,
    },
    data() {
        return {
            isReplying: false,
            isEditing: null,
            reply_data: this.reply,
            input_edit: this.reply.text,
            input_reply: null,
        };
    },
    methods: {
        remove() {
            axios
                .post(route("reply.delete"), {
                    _method: "DELETE",
                    reply_id: this.reply.id,
                })
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
        handleInputTextarea(e) {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
        },
        put() {
            axios
                .post(route("reply.update"), {
                    _method: "PUT",
                    reply_id: this.reply.id,
                    text: this.input_edit,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        this.reply_data.text = res.data.text;
                        this.isEditing = false;
                    }
                });
        },
        createReply() {
            axios
                .post(route("reply.create"), {
                    isReplyToReply: true,
                    text: this.input_reply,
                    reply_id: this.reply.id,
                    comment_id: this.reply.comment_id,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200 || res.status == 201) {
                        this.$emit("createReplyToReply", res.data);
                        this.isReplying = false;
                        this.input_reply = "";
                    }
                });
        },
        countTextareaRowsByBrs(text) {
            return text.split("<br />").length;
        },
    },
    components: { Reputation, Dropdown, UserTablet },
};
</script>
