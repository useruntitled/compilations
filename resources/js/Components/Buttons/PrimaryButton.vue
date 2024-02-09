<template>
    <button
        class="p-2 font-semibold rounded-lg duration-200 hover:bg-opacity-90"
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
