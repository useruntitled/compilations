<template>
<!--    <div class="bg-neutral-200">asd</div>-->
    <button
        class="px-2 py-[5.5px] font-semibold rounded-lg duration-200 hover:bg-opacity-90"
        :class="'bg-' + primaryColor + ' ' + 'text-' + textColor"
    >
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
        primaryColor: null,
        secondaryColor: null,
        textColor: {
            default: "white",
        },
    },
};
</script>
