<template>
    <!-- <div class="blur-sm"></div> -->
    <img
        :src="src"
        @load="isLoaded = true"
        :class="classes"
        :style="style"
        class="transition duration-[300ms]"
    />
</template>
<script setup>
import { ref, computed } from "vue";

const props = defineProps({
    preview: null,
    than: null,
    class: null,
    style: null,
});

const classes = computed(() => {
    if (isLoaded.value == false) {
        return props.class + " " + "blur-sm brightness-[.8]";
    }
    return props.class;
});

const isLoaded = ref(false);

const src = computed(() => {
    if (!isLoaded.value) {
        return props.preview;
    }
    return props.than;
});
</script>
