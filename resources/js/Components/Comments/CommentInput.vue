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
        @click="content?.focus()"
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
            v-html="text"
        ></div>
        <div class="flex justify-between mt-2 ms-[-6px] items-end">
            <div class="p-2 ps-0">
                <div v-if="!fileWasInserted">
                    <BtnIcon @click="filepond.click()" primaryColor="orange-100"
                        ><IconPhoto class="stroke-2 w-5 h-5"></IconPhoto
                    ></BtnIcon>
                    <input
                        ref="filepond"
                        type="file"
                        class="hidden"
                        accept="image/png, image/jpg, image/jpeg, image/webp"
                        @input="handleFilepond"
                    />
                </div>
                <div v-else>
                    <img
                        @click="
                            fileWasInserted = false;
                            insertedImage.image = null;
                            insertedImage.hasImage = false;
                        "
                        :src="
                            insertedImage.base64 ??
                            route('im', [insertedImage.image, 200])
                        "
                        class="rounded-lg w-20 h-20 object-cover cursor-pointer"
                    />
                </div>
            </div>
            <div class="flex mb-2">
                <slot name="button"></slot>
                <FlatPrimaryButton
                    v-if="content?.innerHTML.length > 0 || fileWasInserted"
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

const isLoading = ref(false);

const emit = defineEmits(["sendComment"]);

const handleSend = () => {
    if (!isLoading.value) {
        emit("sendComment", form);
        isLoading.value = true;
    }
};

const props = defineProps({
    commentIsCreated: false,
    text: {
        required: false,
        default: "",
    },
    image: {
        required: false,
        default: null,
    },
});

const form = reactive({
    content: "",
    image: null,
});

const fileWasInserted = ref(false);
const insertedImage = reactive({
    base64: null,
    image: null,
    hasImage: false,
});

const filepond = ref(null);

const content = ref(null);

const isFocused = ref(false);

const placeholder = ref("Комментарий...");

const placeholderClass = computed(() => {
    return `before:content-['${placeholder.value}']`;
});

const setInputValuesToNull = inject("setInputValuesToNull");

const handleInput = () => {
    if (content.value.innerHTML.length > 0) {
        placeholder.value = "";
    } else {
        placeholder.value = "Комментарий...";
    }
    form.content = content.value.innerHTML;
};

watch(
    () => props.commentIsCreated,
    (newValue, oldValue) => {
        if (newValue) {
            setInputValuesToNull();
            isLoading.value = false;
            fileWasInserted.value = false;
            content.value.innerHTML = "";
            form.content = "";
            form.image = null;
            placeholder.value = "Комментарий...";
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
    const file = e.target.files[0];
    handleFile(file);
};

const handleFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        fileWasInserted.value = true;
        insertedImage.base64 = reader.result;
        insertedImage.image = file;
        insertedImage.hasImage = true;
        form.image = insertedImage;
    };
};

watch(insertedImage, () => {
    form.image = insertedImage;
});

onMounted(() => {
    content.value.innerHTML = props.text;
    form.content = content.value.innerHTML;
    if (props.image != null) {
        fileWasInserted.value = true;
        insertedImage.image = props.image;
        insertedImage.hasImage = true;
    }
    if (props.text != "") {
        placeholder.value = "";
    }
});
</script>

<!-- <script>


export default {
    props: {
        commentIsCreated: false,
        text: {
            required: false,
            default: null,
        },
    },
    data() {
        return {
            textareaValueLength: null,
            isFocused: false,
            textarea: null,
            textareaValue: null,
        };
    },
    watch: {
        commentIsCreated(newValue, oldValue) {
            if (newValue) {
                this.$refs["textarea"].innerHTML = "";
                this.handleInput();
                this.considerTextareaLength();
            }
        },
    },
    methods: {
        considerTextareaLength() {
            return this.textareaValue.length;
        },
        handleInput() {
            this.textarea = this.$refs["textarea"];
            this.textareaValue = this.textarea.innerHTML;
            this.textareaValueLength = this.considerTextareaLength();
        },
        handlePaste(e) {
            const text = e.clipboardData.getData("text/plain");
            document.execCommand("insertText", false, text);
        },
    },
    updated() {
        const textarea = this.$refs["textarea"];
        if (textarea.innerHtml != "") {
        }
    },
    mounted() {
        this.handleInput();
    },
    emits: ["sendComment"],
    components: { IconPhoto, PrimaryButton, BtnIcon, FlatPrimaryButton },
};
</script> -->
