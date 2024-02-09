<template>
    <Link
        :href="this.href"
        class="mx-5 text-sm text-slate-900"
        :class="{
            ' border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 ':
                $page.url == this.link,
        }"
    >
        <slot></slot>
    </Link>
</template>
<script>
export default {
    props: {
        href: null,
    },
    data() {
        return {
            link: null,
        };
    },
    mounted() {
        this.link = this.href.replace("http://compilations.test", "");
    },
};
</script>
