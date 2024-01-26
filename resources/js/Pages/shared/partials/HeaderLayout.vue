<template>
    <div v-for="i in 2">
        <div class="bg-kppale" :class="i == 1 ? 'fixed w-full z-50' : 'block'">
            <div class="max-w-7xl mx-auto px-5 py-1">
                <div class="grid grid-template">
                    <section>
                        <div>
                            <Link
                                :href="route('home')"
                                preserve-state
                                :only="[]"
                            >
                                <ApplicationLogo
                                    class="inline-block rounded hover:opacity-80"
                                    :size="'200x200'"
                                    style="max-width: 50px"
                                ></ApplicationLogo>
                            </Link>
                        </div>
                    </section>
                    <section class="flex items-center">
                        <div class="flex items-center w-11/12 mx-auto">
                            <span class="text-sm absolute pl-2"
                                ><IconSearch
                                    class="text-slate-600 stroke-[2px] w-5 h-5"
                                ></IconSearch
                            ></span>
                            <input
                                list="films"
                                type="text"
                                placeholder="Поиск"
                                class="w-full font-regular ps-10 bg-kpnpale border-kpnpale rounded-xl border-1 text-md duration-300 text-slate-900 hover:bg-white hover:ring-kp hover:ring-1 focus:bg-white focus:ring-kp focus:border-kp"
                            />
                        </div>
                    </section>
                    <section class="flex items-center">
                        <div
                            class="w-full flex justify-end"
                            v-if="!page.props.auth.check"
                        >
                            <PrimaryButtonWhite @click="callModal('Auth')">
                                Войти
                            </PrimaryButtonWhite>
                        </div>
                        <div
                            v-else
                            class="w-full flex justify-end items-center"
                        >
                            <div class="inline-block me-2">
                                <DropdownNotifications></DropdownNotifications>
                            </div>
                            <Dropdown width="300">
                                <template #trigger>
                                    <div
                                        class="flex items-center cursor-pointer"
                                    >
                                        <LazyImage
                                            :preview="
                                                '/media/' +
                                                page.props.auth.user
                                                    .avatar_preview
                                            "
                                            :than="
                                                route('im', [
                                                    page.props.auth.user.avatar,
                                                    40,
                                                ])
                                            "
                                            class="w-[40px] h-[40px] rounded-full hover:brightness-[1.2]"
                                        ></LazyImage>
                                        <div class="ms-2">
                                            <svg
                                                v-if="$page.props.auth.user"
                                                class="ms-0 -mr-0.5 h-4 w-4 inline-block text-slate-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </template>
                                <template #content>
                                    <HeaderSection></HeaderSection>
                                </template>
                            </Dropdown>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from "vue";
import Dropdown from "@/Components/Dropdown.vue";
import IconSearch from "@/Components/Icons/IconSearch.vue";
import HeaderSection from "./HeaderSection.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import PrimaryButtonWhite from "@/Components/Buttons/PrimaryButtonWhite.vue";
import DropdownNotifications from "@/Components/Dropdowns/DropdownNotifications.vue";
import LazyImage from "@/Components/LazyImage.vue";
import { usePage } from "@inertiajs/vue3";

const callModal = inject("callModal");

const showRegister = ref(false);

const page = usePage();
</script>

<!-- <script>
import DropdownLink from "@/Components/DropdownLink.vue";
import Dropdown from "@/Components/Dropdown.vue";
import UserTablet from "@/Components/UserTablet.vue";
import IconSearch from "@/Components/Icons/IconSearch.vue";
import HeaderSection from "./HeaderSection.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import PrimaryButtonWhite from "@/Components/Buttons/PrimaryButtonWhite.vue";
import DropdownNotifications from "@/Components/Dropdowns/DropdownNotifications.vue";
import LazyImage from "@/Components/LazyImage.vue";

export default {
    inject: ["callModal"],
    data() {
        return {
            showRegister: false,
            input_site: null,
        };
    },

    components: {
        DropdownLink,
        Dropdown,
        UserTablet,
        IconSearch,
        HeaderSection,
        ApplicationLogo,
        PrimaryButton,
        PrimaryButtonWhite,
        DropdownNotifications,
        LazyImage,
    },
};
</script> -->
<style>
.grid-template {
    grid-template-columns: 220px 640px 320px;
}
</style>
