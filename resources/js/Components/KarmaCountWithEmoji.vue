<template>
    <p
        class="font-semibold"
        :class="karma > 0 ? 'text-green-500' : karma == 0 ? '' : 'text-red-500'"
    >
        {{ karma > 0 ? "+" : karma == 0 ? "" : "-" }}
        {{ karma }}
        <span class="ms-2"> </span>
    </p>
</template>
<script>
export default {
    props: {
        karma: null,
    },
};
</script>
