<template>
    <Head>
        <meta
            type="description"
            content="Information about my app"
            head-key="description"
        />
        <title>{{ title ?? "Подборки" }}</title>
    </Head>

    <div class="bg-gray-100 min-h-screen">
        <HeaderLayout></HeaderLayout>
        <div class="mx-auto max-w-6xl mt-5 bg-white p-5 rounded-xl">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import HeaderLayout from "./partials/headerLayout.vue";
export default {
    props: {
        title: String,
    },
    components: { HeaderLayout },
};
</script>
