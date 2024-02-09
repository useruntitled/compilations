<template>
    <IconSquarePlusFilled
        ref="icon"
        class="animate-wobble animate"
    ></IconSquarePlusFilled>
</template>
<script>
import IconSquarePlusFilled from "../Icons/IconSquarePlusFilled.vue";

export default {
    mounted() {
        setInterval(() => {
            // console.log(this.$refs["icon"].class);
        }, 2000);
    },
    components: { IconSquarePlusFilled },
};
</script>
<style>
@keyframes shake {
    0% {
        transform: rotate(0deg);
    }
    5% {
        transform: rotate(-15deg);
    }
    10% {
        transform: rotate(0deg);
    }
    15% {
        transform: rotate(15deg);
    }
    20% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(-15deg);
    }
    30% {
        transform: rotate(0deg);
    }
    40%,
    50%,
    60%,
    70%,
    80%,
    90%,
    100% {
        transform: rotate(0deg);
    }
}
@keyframes wobble {
    0% {
        transform: none;
    }
    10% {
        transform: translate3d(-10%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }
    20% {
        transform: translate3d(8%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }
    30% {
        transform: translate3d(-6%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }
    40% {
        transform: translate3d(4%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }
    50% {
        transform: translate3d(-2%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }
    60% {
        transform: none;
    }
}

.animate-shake {
    animation: shake 2s ease-out infinite alternate;
}
.animate-wobble {
    animation: wobble 3s ease infinite;
}
</style>
