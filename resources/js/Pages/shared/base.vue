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

    <!-- <AuthModal :show="showModal" @close="closeModal()"></AuthModal> -->

    <UrlModal
        :modalIsClosed="modalIsClosed"
        :callModal="calledModal"
    ></UrlModal>
</template>
<script>
import AsideLeft from "./partials/AsideLeft.vue";
import AsideRight from "./partials/AsideRight.vue";
import HeaderLayout from "./partials/HeaderLayout.vue";
import UrlModal from "@/Components/Modals/UrlModal.vue";

export default {
    props: {
        title: String,
    },
    data() {
        return {
            // showModal: false,
            modalIsClosed: false,
            calledModal: null,
        };
    },
    provide() {
        return {
            closeModal: this.closeModal,
            callModal: this.callModal,
        };
    },
    methods: {
        closeModal() {
            console.log();
            this.calledModal = null;
            this.modalIsClosed = true;
            setTimeout(() => {
                this.modalIsClosed = false;
            }, 200);
        },
        callModal(name) {
            this.calledModal = name;
        },
    },

    components: {
        HeaderLayout,
        AsideLeft,
        AsideRight,
        UrlModal,
    },
};
</script>
<style>
.grid-template {
    grid-template-columns: 220px auto 320px;
}
</style>
