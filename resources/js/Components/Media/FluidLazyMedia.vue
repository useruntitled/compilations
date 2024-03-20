<template>
    <!--    <div class="w-[45px] h-[45px] border-gray-100"></div>-->
    <div class="overflow-hidden" :style="[heightStyle]" ref="block">
        <div class="relative flex justify-center overflow-hidden" style="height: 100%">
            <img class="absolute w-full h-full z-10 top-0" :src="media.base64_preview"
                 :class="[roundedClass, props.class, borderClass]"
                 alt=""
            >

            <img v-if="! isVideo" class="absolute backdrop-blur-3xl object-contain top-0 bottom-0 mx-auto z-20"
                 @load="isLoaded = true" :src="src"
                 :class="[roundedClass, props.class, borderClass, showClass]"
                 :style="[heightStyle, widthStyle]"
                 :type="`image/${media.format}`"
                 alt=""
                 loading="lazy"
            >

            <video v-else class="absolute backdrop-blur-3xl object-contain top-0 bottom-0 mx-auto z-20"
                   loop autoplay muted @loadeddata="isLoaded = true"
                   :class="[roundedClass, props.class, borderClass, showClass]"
                   :style="[heightStyle, widthStyle]"
            >
                <source :src="media.href" type="video/mp4">
            </video>
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

const block = ref(null);

const ratio = computed(() => {
    return props.media.width / props.media.height;
})

const showClass = computed(() => {
    if (!isLoaded.value) return 'hidden';
});
const roundedClass = computed(() => {
    return `rounded-${props.rounded}`;
});

const borderClass = computed(() => {
    return `border-[${props.border ?? 0}px] border-gray-100`;
});


const getRatio = (w, h) => {
    return Math.abs(w / h);
}

const gwd = (w1, w2) => {
    if (w1 > w2) return w1 / w2;
    return w2 / w1;
}

const widthStyle = computed(() => {

    return "width: auto";
});

const heightStyle = computed(() => {
    if (props.maxHeight != null && block.value) {
        if (props.media.height <= props.maxHeight) {
            if (props.media.width < block.value.clientWidth) {
                if ((props.media.height * (Math.abs(block.value.clientWidth / props.media.width))) <= props.maxHeight) {
                    return `height: ${props.media.height * (Math.abs(block.value.clientWidth / props.media.width))}px`;
                }
                return `height: ${props.media.height / (Math.abs(block.value.clientWidth / props.media.width))}px`;
            }
            return `height: ${props.media.height}px`;
        }
        if (props.media.width <= block.value.clientWidth) {
            return `height: ${props.media.height / (Math.abs(props.media.height / props.maxHeight))}px`;

        }
        if ((props.media.height / (Math.abs(props.media.width / block.value.clientWidth))) <= props.maxHeight) {
            return `height: ${props.media.height / (Math.abs(props.media.width / block.value.clientWidth))}px`;
        }
        return `height: ${props.media.height / (Math.abs(props.media.height / props.maxHeight))}px`;
    }
    return "height: auto";
});


const src = computed(() => {
    return isLoaded.value ? props.media.href : props.media.base64_preview;
});

const isLoaded = ref(false);

const isVideo = computed(() => {
    return props.media.format === 'mp4';
});
</script>
