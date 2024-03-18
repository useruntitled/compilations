<template>
    <!-- <div class="before:content-['Комментарий...']"></div> -->
    <div
        class="bg-field px-3 py-4 pb-0 rounded-xl border hover:bg-white hover:ring-orange-200 hover:ring-2 hover:border-orange-300 duration-200"
        :class="
            isFocused
                ? 'ring-orange-200 ring-2 border-orange-500 border-[1.2px] bg-white '
                : '  '
        "
        @focusin="isFocused = true"
        @click="content?.focus(); checkAuth()"
        @focusout="isFocused = false"
    >
        <div
            contenteditable=""
            ref="content"
            class="focus:outline-none text-17px hover:cursor-text"
            :class="placeholderClass"
            @paste.prevent="handlePaste($event)"
            @drop.prevent="handlePaste($event)"
            @input="handleInput()"
            v-html="comment?.text"
        ></div>
        <div class="flex justify-between mt-2 ms-[-6px] items-end">
            <div class="p-2 ps-0">
                <div v-if="!hasImage">
                    <BtnIcon @click="filepond.click()" primaryColor="orange-100"
                        ><IconPhoto class="stroke-2 w-5 h-5"></IconPhoto
                    ></BtnIcon>
                    <input
                        ref="filepond"
                        type="file"
                        class="hidden"
                        accept="image/png, image/jpg, image/jpeg, image/webp, image/gif"
                        @input="handleFilepond"
                    />
                </div>
                <div v-else class="flex justify-center items-center">
                    <div>
                        <lazy-media
                            v-if="hasImage"
                            :media="form.image"
                            rounded="lg"
                            width="75"
                            height="75"
                            class="object-cover cursor-pointer"
                            @click="form.image = null"
                        />
                    </div>
                    <animation-loader v-show="imageIsLoading"
                                      class="w-8 h-8 absolute"
                    />
                </div>
            </div>
            <div class="flex mb-2">
                <slot name="button"></slot>
                <FlatPrimaryButton
                    v-if="content?.innerHTML.length > 0 || form?.image"
                    class="ms-2"
                    primaryColor="orange-500"
                    @click="handleSend()"
                >
                    <div v-if="!isLoading">Отправить</div>
                    <div v-else class="flex items-center justify-center">
                        <div class="opacity-0">Отправить</div>
                        <div class="absolute">
                            <AnimationLoader
                                color="text-white"
                            ></AnimationLoader>
                        </div>
                    </div>
                </FlatPrimaryButton>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, inject, watch, reactive, onMounted } from "vue";
import BtnIcon from "../BtnIcon.vue";
import FlatPrimaryButton from "../Buttons/FlatPrimaryButton.vue";
import IconPhoto from "../Icons/IconPhoto.vue";
import AnimationLoader from "../Animations/AnimationLoader.vue";
import {handleFile} from "@/Components/File/FileHandler.js";
import LazyMedia from "@/Components/Media/LazyMedia.vue";
import {usePage} from "@inertiajs/vue3";



const isLoading = ref(false);
const imageIsLoading = ref(false);

const callModal = inject('callModal');


const page = usePage();

const emit = defineEmits(["sendComment"]);

const checkAuth = () => {
    if (!page.props.auth.check) {
        callModal('auth');
        return false;
    }
    return true;
}

const handleSend = () => {
    if (!isLoading.value && checkAuth) {
        emit("sendComment", form);
        isLoading.value = true;
    }
};

const hasImage = computed(() => {
    return form.image != null;
});

const post = inject('post');

const props = defineProps({
    commentIsCreated: false,
    post_id: null,
    comment: null,
    comment_id: null,
});

const form = reactive({
    id: props.comment?.id ?? null,
    text: props.comment?.text ?? "",
    post_id: props.post_id ?? post.id,
    image: props.comment?.image ?? null,
    comment_id: props.comment_id,
})

const filepond = ref(null);

const content = ref(null);

const isFocused = ref(false);

const placeholder = ref("Комментарий...");

const placeholderClass = computed(() => {
    if (!form.text) {
        return `before:content-['${placeholder.value}']`;
    }
});

const setInputValuesToNull = inject("setInputValuesToNull");

const handleInput = () => {
    if (content.value.innerHTML.length > 0) {
        placeholder.value = "";
    } else {
        placeholder.value = "Комментарий...";
    }
    form.text = content.value.innerHTML;
};

watch(
    () => props.commentIsCreated,
    (newValue, oldValue) => {
        if (newValue) {
            setInputValuesToNull();
            form.id = null;
            form.text = "";
            content.value.innerHTML = "";
            placeholder.value = "Комментарий...";
            form.image = null;
            isLoading.value = false;
        }
    }
);

const handlePaste = (e) => {
    const text = e.clipboardData.getData("text/plain");
    const image = e.clipboardData.files[0];
    if (image) {
        handleFile(image);
    }
    document.execCommand("insertText", false, text);
};

const handleFilepond = (e) => {
    if (!checkAuth()) return false;
    const file = e.target.files[0];
    handleFile(file, onFileRead)
    const formData = new FormData();
    formData.append("image", file)
    imageIsLoading.value = true;
    axios.post(route('media.upload.without-save'), formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then((res) => {
            console.log(res.data);
            form.image = res.data;
            imageIsLoading.value = false;
        })
};

const onFileRead = (result) => {
    if (form.image === null) form.image = {};
    form.image.base64_preview = result;
    imageIsLoading.value = true;
}
</script>
