<template>
    <!--    <div class="bg-panelbck bg-panelsemiprimary bg-white ring-gray-100"></div>-->
    <input
        :type="type"
        class="rounded-xl w-full font-medium p-3 px-4
          border-[1px]
            focus:ring-2
           ring-2"
        :class="[hoverColorClass, borderColorClass, ringColorClass, focusColorClass, bgColorClass]"

        v-model="model"
        :placeholder="placeholder"
    />
</template>
<script setup>
import {computed} from "vue";

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
    bgColor: {
        type: String,
        default: "gray-100",
    },
    bgActiveColor: {
        type: String,
        default: "white",
    },
    primaryColor: {
        type: String,
        default: 'orange-500',
    },
    secondaryColor: {
        type: String,
        default: 'orange-200',
    }
});

const bgColorClass = computed(() => {
    return `bg-${props.bgColor}`
})

const focusColorClass = computed(() => {
    return `focus:bg-${props.bgActiveColor}`;
});

const hoverColorClass = computed(() => {
    return `hover:bg-${props.bgActiveColor}`;
});

const borderColorClass = computed(() => {
    return `border-${props.bgColor} hover:border-${props.primaryColor} focus:border-${props.primaryColor}`
});

const ringColorClass = computed(() => {
    return `hover:ring-${props.secondaryColor} focus:ring-${props.secondaryColor} ring-${props.bgColor}`;
})

</script>
