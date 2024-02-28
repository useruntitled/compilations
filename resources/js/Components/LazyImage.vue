<template>
    <!-- <div class="blur-sm"></div> -->
    <img
        :src="src"
        @load="isLoaded = true"
        :class="classes"
        :style="style"
        class="duration-[200ms] ease-out"
    />
</template>
<script setup>
import { ref, computed } from "vue";

const props = defineProps({
    preview: null,
    then: null,
    class: null,
    style: null,
    showWhenLoaded: false,
});

const classes = computed(() => {
    if (isLoaded.value == false) {
        if (props.showWhenLoaded == true) {
            return props.class + "hidden";
        }
        return props.class + " " + "brightness-[.5]";
    }
    return props.class;
});

const isLoaded = ref(false);

const src = computed(() => {
    if (!isLoaded.value) {
        return props.preview;
    }
    return props.then;
});
</script>
