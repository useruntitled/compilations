<template>
    <div class="my-2 px-0 bg-white rounded-xl p-2">
        <header class="flex items-center justify-between">
            <!-- <UserTablet :user="comment.user"></UserTablet> -->
            <user-tablet-with-element-inside :user="comment.user">
                <template #content>
                    <p class="text-xs opacity-80">{{ comment.timestamp }}</p>
                </template>
            </user-tablet-with-element-inside>
        </header>
        <main>
            <p v-html="comment.text" class="text-base"></p>
        </main>
        <footer class="flex items-center">
            <Reputation :type="type" :reputation="comment.reputation" />
            <button
                class="ms-2 text-sm text-secondary"
                @click="
                    this.changeShowReplyInterfaceValue(
                        this.type,
                        this.comment.id,
                    )
                "
            >
                Ответить
            </button>
            <span class="ms-5"
                ><CommentDropdown
                    @remove="this.$emit('remove')"
                    @enableEditing="
                        changeShowEditingInterfaceValue(type, comment.id)
                    "
                    :comment="this.comment"
            /></span>
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
import Dropdown from "../Dropdowns/Dropdown.vue";
import Reputation from "../Forms/Reputation.vue";
import UserTabletWithElementInside from "../User/UserTabletWithElementInside.vue";
import CommentDropdown from "./CommentDropdown.vue";

export default {
    inject: [
        "showRepliesArray",
        "changeShowReplyInterfaceValue",
        "changeShowEditingInterfaceValue",
    ],
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
            this.showRepliesArray.unshift(this.comment.id);
        },
    },
    emits: [
        "showReplies",
        "showReplyInterface",
        "remove",
        "showEditingInterface",
    ],
    components: {
        UserTabletWithElementInside,
        Dropdown,
        Reputation,
        CommentDropdown,
    },
};
</script>
