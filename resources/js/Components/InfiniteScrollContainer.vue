<template>
    <div ref="container" @scroll="handleScroll($event)">
        <slot></slot>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";

const container = ref(null);
const layout = ref(null);

const handleScroll = () => {
    if (
        document.documentElement.scrollTop >=
        container.value?.scrollHeight - 1500
    ) {
        console.log("load");
        emit("load");
    }
};

const containerTop = computed(() => {
    return (
        container.value.getBoundingClientRect().top +
        Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
    );
});

onMounted(() => {
    setInterval(() => {
        if (document.documentElement.scrollTop >= containerTop.value) {
            handleScroll();
        }
    }, 200);
});

const emit = defineEmits(["load"]);
</script>
