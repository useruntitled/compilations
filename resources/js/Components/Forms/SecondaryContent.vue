<template>
    <!-- <div class="hidden before:content-['Описание_подборки']"></div> -->
    <div
        contenteditable="true"
        ref="content"
        v-html="defaultValue"
        :class="placeholderClass"
        class="rounded-xl before:opacity-60 w-full text-[16px] font-semibold border-0 bg-gray-100 p-3 px-4 hover:bg-white focus:bg-white border-[1px] border-white hover:border-orange-500 focus:ring-orange-200 focus:border-orange-500 focus:ring-2 ring-2 ring-white hover:ring-orange-200 focus:outline-0"
        @input="changeModelValue()"
        @paste.prevent="handlePaste($event)"
        @drop.prevent="handlePaste($event)"
    ></div>
</template>
<script setup>
/**
 * npm run build for placeholder
 */

import { ref, onMounted, computed } from "vue";
const model = defineModel();

const content = ref(null);

/**
 * Crunch
 */
const defaultValue = ref(null);

const props = defineProps({
    placeholder: {
        type: String,
        default: "Текст",
    },
});

const placeholderClass = computed(() => {
    if (model.value == "" || model.value == null)
        return `before:content-['${props.placeholder.replace(" ", "_")}']`;
});

onMounted(() => {
    defaultValue.value = model.value;
});

const changeModelValue = () => {
    model.value = content.value.innerHTML;
};

/**
 * Timeout is required
 */
const handlePaste = (e) => {
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
};
</script>
