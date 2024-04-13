<template>
    <Modal
        :show="show"
        @close="
            showModal = false;
            emit('close');
        "
        v-if="showModal"
    >
        <div class="md:px-20 sm:px-5 sp:py-5 xs:px-2 py-20">
            <section class="w-full space-y-10">
                <button
                    class="w-full justify-center bg-[rgb(24,_24,_27)] rounded-2xl px-10 py-2 space-x-2 flex items-center"
                    @click="openAuthWindow('yandex')"
                >
                    <span>
                        <icon-yandex class="w-7 h-7"></icon-yandex>
                    </span>
                    <span class="text-white font-semibold"
                        >Войти с Яндекс ID</span
                    >
                </button>
                <button
                    @click="openAuthWindow('vkontakte')"
                    class="w-full space-x-2 justify-center bg-[#0077ff] rounded-2xl px-10 py-2 flex items-center"
                >
                    <span>
                        <icon-vkontakte class="w-7 h-7"></icon-vkontakte>
                    </span>
                    <span class="text-white font-semibold">
                        Войти с VK ID
                    </span>
                </button>
                <button
                    @click="openAuthWindow('google')"
                    class="w-full space-x-2 justify-center border-2 bg-white rounded-2xl px-10 py-2 flex items-center"
                >
                    <span>
                        <icon-google class="w-7 h-7"></icon-google>
                    </span>
                    <span class="text-black font-semibold">
                        Войти с Google
                    </span>
                </button>
            </section>
        </div>
    </Modal>
</template>
<script setup>
import Modal from "./Modal.vue";
import { ref, onUnmounted } from "vue";
import { router } from "@inertiajs/vue3";
import IconGoogle from "@/Components/Icons/IconGoogle.vue";
import IconVkontakte from "@/Components/Icons/IconVkontakte.vue";
import IconYandex from "@/Components/Icons/IconYandex.vue";

const emit = defineEmits("close");

const props = defineProps({
    show: Boolean,
});

const listenClosedWindowStatus = (event) => {
    if (event?.data == "auth.window.closed") {
        router.reload({ preserveState: false });
        emit("close");
    }
};

const openAuthWindow = (provider) => {
    const auth = window.open(
        route("oauth.redirect", [provider]),
        "_blank",
        "popup",
    );
    window.addEventListener("message", listenClosedWindowStatus);
};

onUnmounted(() => {
    window.removeEventListener("message", listenClosedWindowStatus);
});

const showModal = ref(props.show);

const errors = ref({});
</script>
