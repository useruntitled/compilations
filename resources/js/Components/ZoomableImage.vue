<template>
    <main @click="showZoomedImage = true" class="cursor-zoom-in">
        <LazyImage
            :preview="preview"
            :then="then"
            :class="props.class"
            :style="props.style"
        >
        </LazyImage>
    </main>
    <section
        v-show="showZoomedImage"
        class="fixed inset-0 z-50 w-full bg-black bg-opacity-60 flex items-center"
        @click="showZoomedImage = false"
    >
        <div class="mx-auto text-center duration-200 select-none h-full flex items-center">
            <LazyImage
                class="h-1/2 hover:h-full mx-auto"
                style="max-height: 90%; max-width: 90%"
                :preview="preview"
                :then="then"
            >
            </LazyImage>
        </div>
    </section>
</template>
<script setup>
import { computed, ref } from "vue";
import LazyImage from "./LazyImage.vue";
const props = defineProps({
    class: null,
    preview: null,
    then: null,
    style: null,
});

const showZoomedImage = ref(false);
</script>
