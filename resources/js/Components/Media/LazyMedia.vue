<template>
    <!--    <div class="w-[40px] h-[40px] border-gray-100"></div>-->
    <!--    <div class="w-[90px] h-[90px] border-gray-100 border-[3.5px]"></div>-->
    <div v-if="! isVideo">
        <img class="object-cover" @load="isLoaded = true" :src="src" :class="[roundedClass, props.class, borderClass]"
             alt=""
             :style="[widthStyle, heightStyle]"
        >
    </div>
    <div v-else class="flex relative">
        <video class="object-cover" loop autoplay muted @loadeddata="isLoaded = true"
               :class="[roundedClass, props.class, borderClass]"
               :style="[widthStyle, heightStyle]"
        >
            <source :src="media.href" type="video/mp4">
        </video>
        <div v-show="! isLoaded">
            <img class="object-cover absolute ms-[-100%] w-full h-full" :src="media.base64_preview"
                 :class="[roundedClass, props.class, borderClass]"
                 :style="[widthStyle, heightStyle]"
                 alt="">
        </div>
    </div>
</template>
<script setup>
import {computed, ref} from "vue";

const props = defineProps({
    media: null,
    rounded: "none",
    width: 100,
    height: 150,
    class: null,
    border: 0,
});

const widthClass = computed(() => {
    return `w-[${props.width}px]`;
});

const heightClass = computed(() => {
    return `h-[${props.height}px]`;
});

const roundedClass = computed(() => {
    return `rounded-${props.rounded}`;
});

const borderClass = computed(() => {
    return `border-[${props.border}px] border-gray-100`;
});

const widthStyle = computed(() => {
    return `width: ${props.width}px`;
});

const heightStyle = computed(() => {
    return `height: ${props.height}px`;
});

const src = computed(() => {
    return isLoaded.value ? props.media.href : props.media.base64_preview;
});

const isLoaded = ref(false);

const isVideo = computed(() => {
    return props.media.format === 'mp4';
});
</script>
