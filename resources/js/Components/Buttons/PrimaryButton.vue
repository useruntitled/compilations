<template>
    <button
        class="p-2 bg-orange-500 font-semibold text-white rounded hover:bg-amber-700 duration-200 text-sm"
        :class="class"
    >
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
        class: null,
    },
};
</script>
