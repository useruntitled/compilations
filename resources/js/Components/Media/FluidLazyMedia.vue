<template>
    <!--    <div class="w-[45px] h-[45px] border-gray-100"></div>-->
    <div class="relative" :style="[widthStyle, heightStyle]">
        <div class="flex justify-center w-full">
            <div class="absolute w-full">
                <div v-if="! isVideo">
                    <img class="object-scale-down w-full" @load="isLoaded = true" :src="src"
                         :class="[roundedClass, props.class, borderClass, showClass]"
                         :style="[widthStyle, heightStyle]"
                         alt="">
                </div>
                <div v-else>
                    <video class="object-scale-down w-full" loop autoplay muted @loadeddata="isLoaded = true"
                           :class="[roundedClass, props.class, borderClass, showClass]"
                           :style="[widthStyle, heightStyle]"
                    >
                        <source :src="media.href" type="video/mp4">
                    </video>

                </div>
            </div>
            <img class="w-full" :src="media.base64_preview"
                 :class="[roundedClass, props.class, borderClass]"
                 :style="[heightStyle]"
                 alt="">
        </div>
    </div>
</template>
<script setup>
import {computed, ref} from "vue";

const props = defineProps({
    media: null,
    rounded: "none",
    class: null,
    border: 0,
    maxHeight: null,
    maxWidth: null,
});

const showClass = computed(() => {
    if (!isLoaded.value) return 'hidden';
});
const roundedClass = computed(() => {
    return `rounded-${props.rounded}`;
});

const borderClass = computed(() => {
    return `border-[${props.border}px] border-gray-100`;
});

const widthStyle = computed(() => {
    if (props.maxWidth != null) {
        if (props.media.width <= props.maxWidth) {
            return `width: ${props.media.width}px`;
        }
        return `width: ${props.maxWidth}`;
    }
    return `width: none`;
});

const heightStyle = computed(() => {
    if (props.maxHeight != null) {
        if (props.media.height <= props.maxHeight) {
            return `height: ${props.media.height}px`;
        }
        return `height: ${props.maxHeight}px`;
    }
    return `height: none`;
});

const src = computed(() => {
    return isLoaded.value ? props.media.href : props.media.base64_preview;
});

const isLoaded = ref(false);

const isVideo = computed(() => {
    return props.media.format === 'mp4';
});
</script>
