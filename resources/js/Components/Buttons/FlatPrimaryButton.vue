w
<template>
    <!--    <div class="bg-neutral-200">asd</div>-->
    <button
        class="px-2 py-[5.5px] font-semibold rounded-lg duration-200 hover:bg-opacity-90"
        :class="colorClass"
    >
        <slot />
    </button>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
    primaryColor: null,
    secondaryColor: null,
    textColor: {
        default: "white",
    },
});

const colorClass = computed(() => {
    return `bg-${props.primaryColor} text-${props.textColor}`;
});
</script>
