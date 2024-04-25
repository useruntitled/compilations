<template>
    <!--    <div class="w-[40px] h-[40px] border-gray-100"></div>-->
    <!--    <div class="w-[90px] h-[90px] border-gray-100 border-[3.5px]"></div>-->
    <div class="relative" :style="[heightStyle]">
        <div class="relative flex justify-center w-full">
            <img
                class="absolute w-full h-full z-[2] top-0"
                :src="media.base64_preview"
                :class="[roundedClass, props.class, borderClass]"
                :style="[heightStyle, widthStyle]"
                alt=""
            />

            <img
                v-if="!isVideo && media.href"
                class="object-cover mx-auto hover:brightness-[1.2] z-[4]"
                @load="isLoaded = true"
                :src="media.href"
                :class="[roundedClass, props.class, borderClass]"
                :style="[heightStyle, widthStyle]"
                alt=""
                loading="lazy"
            />

            <video
                v-else
                class="backdrop-blur-3xl object-cover mx-auto z-[4]"
                loop
                autoplay
                muted
                @loadeddata="isLoaded = true"
                :class="[roundedClass, props.class, borderClass]"
                :style="[heightStyle, widthStyle]"
            >
                <source :src="media.href" type="video/mp4" />
            </video>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from "vue";

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
    return props.media?.format === "mp4";
});
</script>
