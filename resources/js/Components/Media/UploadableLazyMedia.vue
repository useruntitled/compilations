<template>
    <div class="flex justify-center items-center" @mouseleave="isHovered = false">
        <div class="z-0">
            <lazy-media
                @hover="isHovered = true"
                :media="mediaProperty"
                :rounded="rounded"
                :width="width"
                :height="height"
                :class="props.class"
                :border="border"
                @mouseover="isHovered = true"
            />
        </div>
        <div class="absolute z-40" v-show="isLoading">
            <animation-loader class="w-8 h-8"/>
        </div>
        <div
            v-if="isHovered && ! isLoading && canUpload"
            @mouseleave="isHovered = false"
            class="absolute bg-black bg-opacity-20 flex justify-center items-center cursor-pointer z-10"
            :class="`rounded-${props.rounded}`"
            :style="`width: ${props.width}px; height: ${props.height}px`"

        >
            <icon-photo class="w-10 h-10 stroke-4 z-0"/>
        </div>
    </div>

</template>
<script setup>
import LazyMedia from "@/Components/Media/LazyMedia.vue";
import {computed, ref} from "vue";
import AnimationLoader from "@/Components/Animations/AnimationLoader.vue";
import IconPhoto from "@/Components/Icons/IconPhoto.vue";

const props = defineProps({
    media: null,
    rounded: "none",
    width: 100,
    height: 150,
    class: null,
    border: 0,
    canUpload: false,
});


const isHovered = ref(false);

const mediaProperty = computed(() => {
    if (props.media.href) {
        return props.media;
    } else {
        return {
            href: props.media,
            base64_preview: props.media,
        }
    }
});

const isLoading = computed(() => {
    return !props.media?.href;
})
</script>
