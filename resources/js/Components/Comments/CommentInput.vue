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
        <div class="flex justify-between mt-5 items-center">
            <div class="p-2 ps-0">
                <div v-if="!fileWasInserted">
                    <BtnIcon
                        @click="filepond.click()"
                        primaryColor="gray-100"
                        secondaryColor="neutral-800"
                        class="text-gray-600"
                        ><IconPhoto class="stroke-2 w-5 h-5"></IconPhoto
                    ></BtnIcon>
                    <input
                        ref="filepond"
                        type="file"
                        class="hidden"
                        accept="image/*"
                        @input="handleFilepond"
                    />
                </div>
                <div v-else>
                    <img
                        @click="
                            fileWasInserted = false;
                            insertedImage.image = null;
                        "
                        :src="
                            insertedImage.base64 ??
                            route('im', [insertedImage.image, 200])
                        "
                        class="rounded-lg w-[200px] object-cover cursor-pointer"
                    />
                </div>
            </div>
            <div class="flex">
                <slot name="button"></slot>
                <FlatPrimaryButton
                    v-if="content?.innerHTML.length > 0 || fileWasInserted"
                    class="ms-2"
                    primaryColor="orange-500"
                    @click="$emit('sendComment', form)"
                    >Отправить</FlatPrimaryButton
                >
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, inject, watch, reactive, onMounted } from "vue";
import BtnIcon from "../BtnIcon.vue";
import FlatPrimaryButton from "../Buttons/FlatPrimaryButton.vue";
import IconPhoto from "../Icons/IconPhoto.vue";

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
        form.image = insertedImage;
    };
};

onMounted(() => {
    content.value.innerHTML = props.text;
    if (props.image != null) {
        fileWasInserted.value = true;
        insertedImage.image = props.image;
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
