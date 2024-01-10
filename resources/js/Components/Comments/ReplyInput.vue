<template>
    <div class="ms-2 mt-2">
        <CommentInput
            @sendComment="sendReply"
            :commentIsCreated="commentIsCreated"
            @closeReplyInterface="$emit('closeReplyInterface')"
        >
            <template #button>
                <FlatPrimaryButton
                    primaryColor="neutral-200"
                    textColor="black"
                    class="font-semibold"
                    @click="changeShowReplyInterfaceValue(null)"
                    >Отмена</FlatPrimaryButton
                >
            </template>
        </CommentInput>
    </div>
</template>
<script>
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import FlatPrimaryButton from "../Buttons/FlatPrimaryButton.vue";
import CommentInput from "./CommentInput.vue";

export default {
    inject: ["changeShowReplyInterfaceValue"],
    props: {
        commentIsCreated: false,
    },
    data() {
        return {};
    },

    methods: {
        sendReply(v) {
            this.$emit("sendReply", v);
        },
    },
    emits: ["sendReply", "closeReplyInterface"],
    components: { CommentInput, PrimaryButton, FlatPrimaryButton },
};
</script>
