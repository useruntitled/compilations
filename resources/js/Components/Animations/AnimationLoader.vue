<template>
    <IconLoader class="animate-spin" :class="color"></IconLoader>
</template>
<script setup>
import IconLoader from "../Icons/IconLoader.vue";

const props = defineProps({
    color: {
        type: String,
        default: "text-kp",
    },
});
</script>
