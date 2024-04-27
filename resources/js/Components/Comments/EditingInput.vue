<template>
    <div class="ms-2 mt-2">
        <comment-input
            v-focus
            @sendComment="saveComment"
            :commentIsCreated="commentIsUpdated"
            :comment="comment"
        >
            <template #button>
                <flat-primary-button
                    primaryColor="neutral-200"
                    textColor="black"
                    class="font-semibold"
                    @click="emit('closeEditingInterface')"
                    >Отмена
                </flat-primary-button>
            </template>
        </comment-input>
    </div>
</template>
<script setup>
import { ref, inject } from "vue";
import FlatPrimaryButton from "../Buttons/FlatPrimaryButton.vue";
import CommentInput from "./CommentInput.vue";
import axiosInstance from "@/axios/AxiosWrapper.js";
import { commentApi } from "@/api/commentApi.js";

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

const saveComment = (form) => {
    commentApi.update(form, (res) => {
        console.log(res);
        if (res?.status === 200) {
            props.commentIsUpdated = true;
            setInputValuesToNull();
            emit("updateCommentValue", res.data);
        }
    });
};

const emit = defineEmits(["updateCommentValue", "closeEditingInterface"]);
</script>
