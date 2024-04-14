<template>
    <div class="ms-2 mt-2">
        <comment-input
            @sendComment="sendReply"
            :commentIsCreated="commentIsCreated"
            :comment_id="comment_id"
            @closeReplyInterface="$emit('closeReplyInterface')"
            v-focus
        >
            <template #button>
                <flat-primary-button
                    primaryColor="neutral-200"
                    textColor="black"
                    class="font-medium"
                    @click="changeShowReplyInterfaceValue(null)"
                    >Отмена
                </flat-primary-button>
            </template>
        </comment-input>
    </div>
</template>
<script setup>
import { inject } from "vue";
import FlatPrimaryButton from "../Buttons/FlatPrimaryButton.vue";
import CommentInput from "./CommentInput.vue";

const emit = defineEmits(["sendReply", "closeReplyInterface"]);

const changeShowReplyInterfaceValue = inject("changeShowReplyInterfaceValue");

const props = defineProps({
    commentIsCreated: false,
    comment_id: null,
});

const sendReply = (v) => {
    emit("sendReply", v);
};

const vFocus = {
    mounted: (el) => el.click(),
};
</script>
