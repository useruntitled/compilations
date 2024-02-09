<template>
    <div ref="container" @scroll="handleScroll($event)">
        <slot></slot>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";

const container = ref(null);
const layout = ref(null);

const diff = ref(2000);

const handleScroll = () => {
    if (
        document.documentElement.scrollTop >=
        container.value?.scrollHeight - diff.value
    ) {
        console.log("load");
        emit("load");
    }
};

const containerTop = computed(() => {
    if (container.value.scrollTop == document.documentElement.scrollTop) {
        return Math.max(
            window.pageYOffset || 0,
            document.documentElement.scrollTop
        );
    }
    return (
        container.value.getBoundingClientRect().top +
        Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
    );
});

onMounted(() => {
    handleScroll();
    setInterval(() => {
        if (document.documentElement.scrollTop >= containerTop.value) {
            handleScroll();
        }
    }, 200);
});

const emit = defineEmits(["load"]);
</script>
