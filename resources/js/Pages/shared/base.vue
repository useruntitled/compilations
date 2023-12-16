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
                <div class="mx-auto mt-2 p-5 rounded-xl w-11/12">
                    <slot></slot>
                </div>
                <AsideRight></AsideRight>
            </div>
        </div>
    </div>

    <AuthModal :show="showModal" @close="closeModal()"></AuthModal>
</template>
<script>
import AuthModal from "@/Components/AuthModal.vue";
import AsideLeft from "./partials/AsideLeft.vue";
import AsideRight from "./partials/AsideRight.vue";
import HeaderLayout from "./partials/HeaderLayout.vue";

export default {
    props: {
        title: String,
    },
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        closeModal() {
            this.showModal = false;
            history.pushState(
                "",
                document.title,
                window.location.pathname + window.location.search
            );
        },
    },
    mounted() {
        setInterval(() => {
            if (window.location.hash == "#modal-auth") {
                this.showModal = true;
            }
        }, 100);
    },
    components: { HeaderLayout, AsideLeft, AsideRight, AuthModal },
};
</script>
<style>
.grid-template {
    grid-template-columns: 220px auto 320px;
}
</style>
