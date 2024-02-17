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
                <AsideLeft class="hidden lg:block"></AsideLeft>
                <div class="mt-2 md:p-5 rounded-xl 2xl:w-11/12 xl:w-11/12 md:w-full min-h-screen mb-10 md:mb-2 mx-auto">
                    <slot></slot>
                </div>
                <AsideRight class="hidden 2xl:block"></AsideRight>
            </div>
        </div>
    </div>

    <div class="lg:hidden bg-white bottom-0 w-full mx-auto text-center px-10 md:px-20 py-2 fixed">
        <div class="flex justify-between items-center py-1 sticky bottom-0">
            <Link :href="route('home')">
                <icon-home class="w-7 h-7"
                :class="{'text-orange-600': page.component==='home/index'}"
                ></icon-home>
            </Link>
            <Link :href="route('search')"
                  :class="{'text-orange-600': page.component==='Search'}">
                <icon-search class="w-7 h-7"></icon-search>
            </Link>
            <auth-link :href="route('notifications')" :class="{'text-orange-600': page.component==='Auth/Notifications'}">
                <icon-bell class="w-7 h-7"></icon-bell>
            </auth-link>
            <auth-link :href="route('profile')" :class="{'text-orange-600': (page.component==='Profile/Index' || page.component==='Profile/Comments')}">
                <icon-login class="w-7 h-7"></icon-login>
            </auth-link>
        </div>
    </div>

    <Message :message="calledMessage" ></Message>
    <UrlModal
        :modalIsClosed="modalIsClosed"
        :callModal="calledModal"
    ></UrlModal>
</template>
<script setup>
import AuthLink from '@/Components/AuthLink.vue';
import Message from "@/Components/Messages/Message.vue";
import IconHome from "@/Components/Icons/IconHome.vue";
import AsideLeft from "./partials/AsideLeft.vue";
import AsideRight from "./partials/AsideRight.vue";
import HeaderLayout from "./partials/HeaderLayout.vue";
import UrlModal from "@/Components/Modals/UrlModal.vue";
import { reactive, ref, provide, computed } from "vue";
import IconSearch from "@/Components/Icons/IconSearch.vue";
import IconBell from '@/Components/Icons/IconBell.vue';
import IconLogin from "@/Components/Icons/IconLogin.vue";
import {usePage} from "@inertiajs/vue3";


const page = usePage();

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


</script>
<style scoped>


@media(min-width: 922px) {
    .grid-template {
        grid-template-columns: 220px auto 0;
    }
}

@media(min-width: 1280px) {
    .grid-template {
        grid-template-columns: 220px auto 320px;
    }
}

@media(max-width: 640px) {
    .grid-template {
        grid-template-columns: auto;
    }
}


* {
    font-family: Roboto;
}
</style>
