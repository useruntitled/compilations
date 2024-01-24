<template>
    <main>
        <img
            @click="showZoomedImage = true"
            class="cursor-zoom-in"
            :class="classes"
            v-lazy="route('im', [filename, [size]])"
            alt=""
        />
    </main>
    <section
        v-show="showZoomedImage"
        class="fixed inset-0 z-50 w-full bg-black bg-opacity-60 flex items-center"
        @click="showZoomedImage = false"
    >
        <img
            loading="eager"
            class="h-1/2 aspect-square mx-auto hover:scale-150 duration-200 transform ease-in hover:scale-150 select-none"
            v-lazy="route('im', [filename, ['1000x1000']])"
            alt=""
        />
    </section>
</template>
<script setup>
import { computed, ref } from "vue";
const props = defineProps({
    w: null,
    h: null,
    size: null,
    filename: null,
    class: null,
});

const classes = computed(() => {
    return `w-[${props.w}] h-[${props.h}]` + " " + props.class;
});

const showZoomedImage = ref(false);
</script>
