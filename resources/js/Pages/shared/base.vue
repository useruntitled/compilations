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
                <div class="mx-auto mt-2 p-5 rounded-xl w-11/12 min-h-screen">
                    <slot></slot>
                </div>
                <AsideRight></AsideRight>
            </div>
        </div>
    </div>

    <!-- <AuthModal :show="showModal" @close="closeModal()"></AuthModal> -->

    <Message :message="calledMessage"></Message>
    <UrlModal
        :modalIsClosed="modalIsClosed"
        :callModal="calledModal"
    ></UrlModal>
</template>
<script setup>
import Message from "@/Components/Messages/Message.vue";
import AsideLeft from "./partials/AsideLeft.vue";
import AsideRight from "./partials/AsideRight.vue";
import HeaderLayout from "./partials/HeaderLayout.vue";
import UrlModal from "@/Components/Modals/UrlModal.vue";
import { reactive, ref, provide, computed } from "vue";

const props = defineProps({
    title: "",
});

const modalIsClosed = ref(false);
const calledModal = ref(null);

const calledMessage = reactive({
    type: null,
    message: null,
});

const closeModal = () => {
    console.log();
    calledModal.value = null;
    modalIsClosed.value = true;
    setTimeout(() => {
        modalIsClosed.value = false;
    }, 200);
};

const callModal = (name) => {
    calledModal.value = name;
};

const callMessage = (type, message) => {
    calledMessage.type = type;
    calledMessage.message = message;
    setTimeout(() => {
        calledMessage.type = null;
        calledMessage.message = null;
    }, 2000);
};

provide("closeModal", closeModal);
provide("callModal", callModal);
provide("callMessage", callMessage);

// export default {
//     props: {
//         title: String,
//     },
//     data() {
//         return {
//             // showModal: false,
//             modalIsClosed: false,
//             calledModal: null,
//             calledMessage: reactive({
//                 type: null,
//                 message: null,
//             }),
//         };
//     },
//     provide() {
//         return {
//             closeModal: this.closeModal,
//             callModal: this.callModal,
//             callMessage: this.callMessage,
//         };
//     },
//     methods: {
//         closeModal() {
//             console.log();
//             this.calledModal = null;
//             this.modalIsClosed = true;
//             setTimeout(() => {
//                 this.modalIsClosed = false;
//             }, 200);
//         },
//         callModal(name) {
//             this.calledModal = name;
//         },
//         callMessage(type, message) {
//             this.callMessage.type = type;
//             this.callMessage.message = message;
//             setTimeout(() => {
//                 this.callMessage.type = null;
//                 this.callMessage.message = null;
//             }, 20);
//         },
//     },

//     components: {
//         HeaderLayout,
//         AsideLeft,
//         AsideRight,
//         UrlModal,
//         Message,
//     },
// };
</script>
<style>
.grid-template {
    grid-template-columns: 220px auto 320px;
}

* {
    font-family: Roboto;
}
</style>
