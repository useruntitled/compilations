<template>
    <Head>
        <meta
            type="description"
            content="Information about my app"
            head-key="description"
        />
        <title>{{ title ?? "Подборки" }}</title>
    </Head>

    <div class="bg-bck min-h-screen">
        <HeaderLayout></HeaderLayout>
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-template">
                <AsideLeft></AsideLeft>
                <div class="mx-auto max-w-6xl mt-2 p-5 rounded-xl w-full">
                    <slot></slot>
                </div>
                <AsideRight></AsideRight>
            </div>
        </div>
    </div>
</template>
<script>
import AsideLeft from "./partials/AsideLeft.vue";
import AsideRight from "./partials/AsideRight.vue";
import HeaderLayout from "./partials/HeaderLayout.vue";

export default {
    props: {
        title: String,
    },
    components: { HeaderLayout, AsideLeft, AsideRight },
};
</script>
<style>
.grid-template {
    grid-template-columns: 220px auto 320px;
}
</style>
