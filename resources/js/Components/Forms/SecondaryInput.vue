<template>
    <input
        :type="type"
        class="rounded-xl w-full font-medium border-0 bg-gray-100 p-3 px-4 hover:bg-white focus:bg-white border-[1px] border-white hover:border-orange-500 focus:ring-orange-200 focus:border-orange-500 focus:ring-2 ring-2 ring-white hover:ring-orange-200"
        v-model="model"
        :placeholder="placeholder"
    />
</template>
<script setup>
const model = defineModel();

const props = defineProps({
    placeholder: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: "text",
    },
});
</script>
