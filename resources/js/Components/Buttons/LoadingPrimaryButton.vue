<template>
    <primary-button v-if="!isLoaded" @click="startLoading()">
        <slot />
    </primary-button>
    <div v-else class="flex justify-end px-8 my-4 mb-5">
        <AnimationLoader />
    </div>
</template>
<script setup>
import AnimationLoader from "../Animations/AnimationLoader.vue";
import PrimaryButton from "./PrimaryButton.vue";
import { ref } from "vue";

const props = defineProps({
    isLoaded: false,
});

const loading = ref(false);

const startLoading = () => {
    loading.value = true;
};
</script>
