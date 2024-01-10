<template>
    <div class="ms-2 mt-2">
        <CommentInput
            @sendComment="saveComment"
            :commentIsCreated="commentIsUpdated"
            :text="text"
        >
            <template #button>
                <FlatPrimaryButton
                    primaryColor="neutral-200"
                    textColor="black"
                    class="font-semibold"
                    @click="$emit('closeEditingInterface')"
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
import axios from "axios";

export default {
    inject: ["setInputValuesToNull"],
    props: {
        commentIsCreated: false,
        type: null,
        id: null,
        text: null,
    },
    data() {
        return {
            commentIsUpdated: false,
        };
    },
    methods: {
        saveComment(v) {
            axios
                .post(route("comment.update"), {
                    _method: "PUT",
                    id: this.id,
                    text: v,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        this.commentIsUpdated = true;
                        this.setInputValuesToNull();
                        this.$emit("updateCommentValue", res.data.text);
                    }
                });
        },
    },
    emits: [
        "updateCommentOrReply",
        "closeEditingInterface",
        "updateCommentValue",
    ],
    components: { CommentInput, PrimaryButton, FlatPrimaryButton },
};
</script>
