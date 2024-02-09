<template></template>
<script>
// let user_token = document.querySelector('meta[name="csrf-token"]').content;
// window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

export default {
    beforeCreate() {
        window.axios.defaults.headers.common["X-CSRF-TOKEN"] =
            this.$page.props.csrf_token;
    },
};
</script>
