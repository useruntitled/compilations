<template>
    <!-- <p class="bg-primary2"></p> -->
    <div
        class="p-[0.2] rounded-full"
        :class="[sizeClass, firstColorClass, secondColorClass]"
    >
        <slot :class="secondColorClass"></slot>
    </div>
</template>
<script>
export default {
    props: {
        size: {
            default: 4,
        },
        firstColor: {
            default: "primary2",
        },
        secondColor: {
            default: "white",
        },
    },
    computed: {
        sizeClass() {
            return `w-${this.size} h-${this.size}`;
        },
        firstColorClass() {
            return `bg-${this.firstColor}`;
        },
        secondColorClass() {
            return `fill-${this.secondColor}  text-${this.secondColor}`;
        },
    },
};
</script>
