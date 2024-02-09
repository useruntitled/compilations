<template>
    <PrimaryButton v-if="!isLoaded" @click="startLoading()"
        ><slot></slot
    ></PrimaryButton>
    <div v-else class="flex justify-end px-8 my-4 mb-5">
        <!-- <AnimationLoading></AnimationLoading> -->
        <AnimationLoader></AnimationLoader>
    </div>
</template>
<script>
import AnimationLoader from "../Animations/AnimationLoader.vue";
import AnimationLoading from "../Animations/AnimationLoading.vue";
import PrimaryButton from "./PrimaryButton.vue";

export default {
    emits: [],
    props: {
        isLoaded: false,
    },
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        startLoading() {
            this.loading = true;
        },
    },
    components: { PrimaryButton, AnimationLoading, AnimationLoader },
};
</script>
