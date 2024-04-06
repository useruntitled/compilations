<template>
    <Head>
        <title>{{ title ?? "Подборки" }}</title>
    </Head>

    <div class="bg-bck min-h-screen">
        <HeaderLayout />
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-template">
                <AsideLeft class="hidden lg:block relative max-w-[220px]" />
                <div
                    class="mt-2 md:p-5 rounded-xl 2xl:w-11/12 xl:w-11/12 overflow-hidden md:w-full min-h-screen mb-10 md:mb-2 sm:mx-auto"
                >
                    <slot />
                </div>
                <AsideRight class="hidden 2xl:block" />
            </div>
        </div>
    </div>

    <div
        class="lg:hidden bottom-0 text-end px-6 md:px-20 py-2 fixed z-40 right-0 bottom-[60px]"
    >
        <button @click="callModal('Editor')">
            <div class="p-2 sticky bg-white shadow-md rounded-full">
                <icon-pencil class="w-6 h-6 text-orange-600" />
            </div>
        </button>
    </div>

    <div
        class="lg:hidden bg-white bottom-0 w-full mx-auto text-center px-8 md:px-20 py-2 fixed"
    >
        <div class="flex justify-between items-center py-1 sticky bottom-0">
            <Link :href="route('home')">
                <IconHome
                    class="w-7 h-7"
                    :class="{
                        'text-orange-600': page.component === 'Home/Index',
                    }"
                />
            </Link>
            <Link
                :href="route('search')"
                :class="{ 'text-orange-600': page.component === 'Search' }"
            >
                <IconHome class="w-7 h-7" />
            </Link>
            <auth-link
                :href="route('notifications')"
                :class="{
                    'text-orange-600': page.component === 'Auth/Notifications',
                }"
            >
                <IconBell class="w-7 h-7" />
            </auth-link>
            <auth-link
                :href="route('profile')"
                :class="{ 'text-orange-600': isAccoutPageActive }"
            >
                <IconLogin class="w-7 h-7" />
            </auth-link>
        </div>
    </div>

    <Message :message="calledMessage" />
    <UrlModal
        :modalIsClosed="modalIsClosed"
        :callModal="calledModal"
    ></UrlModal>
</template>
<script setup>
import AuthLink from "@/Components/AuthLink.vue";
import Message from "@/Components/Messages/Message.vue";
import IconHome from "@/Components/Icons/IconHome.vue";
import AsideLeft from "@/Layouts/Partials/AsideLeft.vue";
import AsideRight from "@/Layouts/Partials/AsideRight.vue";
import HeaderLayout from "@/Layouts/Partials/HeaderLayout.vue";
import UrlModal from "@/Components/Modals/UrlModal.vue";
import { reactive, ref, provide, computed } from "vue";
import IconSearch from "@/Components/Icons/IconSearch.vue";
import IconBell from "@/Components/Icons/IconBell.vue";
import IconLogin from "@/Components/Icons/IconLogin.vue";
import { usePage } from "@inertiajs/vue3";
import IconPencil from "@/Components/Icons/IconPencil.vue";

const page = usePage();

const props = defineProps({
    title: "",
});

const isAccoutPageActive = computed(() => {
    if (
        page.component === "Profile/Index" ||
        page.component === "Profile/Comments"
    ) {
        let pathname = new URL(window.location.href).pathname;
        pathname = pathname.replace("/profile/", "").replace("/comments", "");
        if (pathname == page.props.auth.user?.id || pathname === "/profile") {
            return true;
        }
    }
    return false;
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
    }, 5000);
};

provide("closeModal", closeModal);
provide("callModal", callModal);
provide("callMessage", callMessage);
</script>
<style scoped>
@media (min-width: 922px) {
    .grid-template {
        grid-template-columns: 220px auto 0;
    }
}

@media (min-width: 1280px) {
    .grid-template {
        grid-template-columns: 220px auto 320px;
    }
}

@media (max-width: 640px) {
    .grid-template {
        grid-template-columns: auto;
    }
}

* {
    font-family: "Roboto";
}
</style>
