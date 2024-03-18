<template>
    <div class="ms-2 mt-2">
        <CommentInput
            v-focus
            @sendComment="saveComment"
            :commentIsCreated="commentIsUpdated"
            :comment="comment"
        >
            <template #button>
                <FlatPrimaryButton
                    primaryColor="neutral-200"
                    textColor="black"
                    class="font-semibold"
                    @click="emit('closeEditingInterface')"
                    >Отмена</FlatPrimaryButton
                >
            </template>
        </CommentInput>
    </div>
</template>
<script setup>
import { ref, inject } from "vue";
import FlatPrimaryButton from "../Buttons/FlatPrimaryButton.vue";
import CommentInput from "./CommentInput.vue";
import axios from "@/AxiosWrapper.js";
import axiosInstance from "@/AxiosWrapper.js";
import {update} from "@/Components/Comments/api.js";

const vFocus = {
    mounted: (el) => el.click(),
};

const injectedCallMessage = inject("callMessage");

axiosInstance.setCallbackFunction(injectedCallMessage);

const props = defineProps({
    comment: null,
});

const setInputValuesToNull = inject("setInputValuesToNull");

const commentIsUpdated = ref(false);

const onSuccess = (res) => {
    console.log(res);
    if (res?.status === 200) {
        props.commentIsUpdated = true;
        setInputValuesToNull();
        emit("updateCommentValue", res.data);
    }
}

const saveComment = (form) => {
    update(form, onSuccess);
};

const emit = defineEmits(["updateCommentValue", "closeEditingInterface"]);
</script>
