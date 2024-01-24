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
            v-html="text"
        ></div>
        <div class="flex justify-between mt-5 items-center">
            <div class="p-2 ps-0">
                <BtnIcon
                    primaryColor="gray-100"
                    secondaryColor="neutral-800"
                    class="text-gray-600"
                    ><IconPhoto class="stroke-2 w-5 h-5"></IconPhoto
                ></BtnIcon>
            </div>
            <div class="flex">
                <slot name="button"></slot>
                <FlatPrimaryButton
                    v-if="textareaValueLength"
                    class="ms-2"
                    primaryColor="orange-500"
                    @click="$emit('sendComment', textareaValue)"
                    >Отправить</FlatPrimaryButton
                >
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import BtnIcon from "../BtnIcon.vue";
import FlatPrimaryButton from "../Buttons/FlatPrimaryButton.vue";
import IconPhoto from "../Icons/IconPhoto.vue";

const props = defineProps({
    commentIsCreated: false,
    text: {
        required: false,
        default: "",
    },
});

const content = ref(null);

const textareaValueLength = ref(null);
const isFocused = ref(false);

const placeholderClass = computed(() => {
    if (
        props.text == "" &&
        (content.value == null || content.value.innerHTML.length == 0)
    ) {
        return "before:content-['Комментарий...']";
    }
    return "";
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
