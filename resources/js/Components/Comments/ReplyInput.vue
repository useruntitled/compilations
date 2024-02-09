<template>
    <div class="ms-2 mt-2">
        <CommentInput
            @sendComment="sendReply"
            :commentIsCreated="commentIsCreated"
            @closeReplyInterface="$emit('closeReplyInterface')"
            v-focus
        >
            <template #button>
                <FlatPrimaryButton
                    primaryColor="neutral-200"
                    textColor="black"
                    class="font-medium"
                    @click="changeShowReplyInterfaceValue(null)"
                    >Отмена</FlatPrimaryButton
                >
            </template>
        </CommentInput>
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
});

const sendReply = (v) => {
    emit("sendReply", v);
};

const vFocus = {
    mounted: (el) => el.click(),
};
</script>
<!-- <script>
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
    mounted() {
        this.$nextTick(() => {
            this.$refs["replyInput"].focus();
        });
    },
    emits: ["sendReply", "closeReplyInterface"],
    components: { CommentInput, PrimaryButton, FlatPrimaryButton },
};
</script> -->
