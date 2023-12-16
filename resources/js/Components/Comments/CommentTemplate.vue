<template>
    <div class="my-2 px-0 bg-white rounded-xl p-2">
        <header class="flex items-center justify-between">
            <!-- <UserTablet :user="comment.user"></UserTablet> -->
            <UserTabletWithElementInside :user="comment.user">
                <p class="text-xs opacity-80">{{ comment.timestamp }}</p>
            </UserTabletWithElementInside>
        </header>
        <main>
            <p v-html="comment.text" class="text-base"></p>
        </main>
        <footer class="flex items-center">
            <Reputation
                :type="type"
                :reputation="comment.reputation"
            ></Reputation>
            <button
                class="ms-2 text-sm text-secondary"
                @click="this.$emit('showReplyInterface')"
            >
                Ответить
            </button>
            <span class="ms-5"
                ><CommentDropdown :comment="this.comment"></CommentDropdown
            ></span>
        </footer>
        <button
            v-if="comment.replies_count > 0 && !showReplies"
            class="text-dtfpr text-17px"
            @click="showRepliesFunction()"
        >
            {{ comment.replies_count }} ответов
        </button>
    </div>
</template>
<script>
import Dropdown from "../Dropdown.vue";
import Reputation from "../Reputation.vue";
import UserTabletWithElementInside from "../UserTabletWithElementInside.vue";
import CommentDropdown from "./CommentDropdown.vue";

export default {
    props: {
        comment: null,
        type: null,
    },
    data() {
        return {
            isEdited: false,
            enableEditing: false,
            showReplies: false,
        };
    },
    methods: {
        showRepliesFunction() {
            this.showReplies = true;
            this.$emit("showReplies");
        },
    },
    emits: ["showReplies", "showReplyInterface"],
    components: {
        UserTabletWithElementInside,
        Dropdown,
        Reputation,
        CommentDropdown,
    },
};
</script>
