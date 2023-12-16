<template>
    <CommentInput
        @sendComment="reEmit"
        :commentIsCreated="commentIsCreated"
        @closeReplyInterface="$emit('closeReplyInterface')"
    >
        <template #button>
            <FlatPrimaryButton
                primaryColor="neutral-200"
                textColor="black"
                class="font-semibold"
                @click="$emit('closeReplyInterface')"
                >Отмена</FlatPrimaryButton
            >
        </template>
    </CommentInput>
</template>
<script>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import FlatPrimaryButton from "../Buttons/FlatPrimaryButton.vue";
import CommentInput from "./CommentInput.vue";

export default {
    props: {
        commentIsCreated: false,
    },
    methods: {
        reEmit(v) {
            this.$emit("sendReply", v);
        },
    },
    emits: ["sendReply", "closeReplyInterface"],
    components: { CommentInput, PrimaryButton, FlatPrimaryButton },
};
</script>
