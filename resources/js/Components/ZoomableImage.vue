<template>
    <main @click="showZoomedImage = true" class="cursor-zoom-in">
        <LazyImage :preview="preview" :than="than" :class="class"> </LazyImage>
    </main>
    <section
        v-show="showZoomedImage"
        class="fixed inset-0 z-50 w-full bg-black bg-opacity-60 flex items-center"
        @click="showZoomedImage = false"
    >
        <div class="mx-auto w-1/4 hover:w-1/2 duration-200 select-none">
            <LazyImage :preview="preview" :than="than"> </LazyImage>
        </div>
    </section>
</template>
<script setup>
import { computed, ref } from "vue";
import LazyImage from "./LazyImage.vue";
const props = defineProps({
    class: null,
    preview: null,
    than: null,
});

const showZoomedImage = ref(false);
</script>
