<template>
    <div v-for="i in 2">
        <div
            class="bg-kppale"
            :class="
                i == 1 ? 'fixed w-full z-50 border-b-4 border-kpnpale' : 'block'
            "
            id="header"
        >
            <div class="max-w-7xl mx-auto px-5 py-1">
                <div class="grid grid-layout gap-4 items-center">
                    <section class="flex items-center">
                        <div >
                            <Link
                                :href="route('home')"
                                preserve-state
                                :only="[]"
                            >
                                <ApplicationLogo
                                    class="inline-block rounded hover:opacity-70 opacity-90"
                                    :size="'200x200'"
                                    style="max-width: 130px"
                                ></ApplicationLogo>
                            </Link>
                        </div>
                    </section>
                    <section class="ms-3 hidden lg:block  ">
                        <div class="w-[640px] mx-auto ">
                                <search class="relative "></search>
                        </div>
                    </section>
                    <section class="flex items-center hidden lg:block">
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
                                <DropdownNotifications
                                    v-if="page.props.auth.check"
                                ></DropdownNotifications>
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
                                            :then="
                                                route('im', [
                                                    page.props.auth.user.avatar,
                                                    100,
                                                ])
                                            "
                                            class="w-[40px] h-[40px] rounded-full hover:brightness-[1.2] border-secondary border-1"
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
import { inject } from "vue";
import Dropdown from "@/Components/Dropdown.vue";
import IconSearch from "@/Components/Icons/IconSearch.vue";
import HeaderSection from "./HeaderSection.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import PrimaryButtonWhite from "@/Components/Buttons/PrimaryButtonWhite.vue";
import DropdownNotifications from "@/Components/Dropdowns/DropdownNotifications.vue";
import LazyImage from "@/Components/LazyImage.vue";
import { usePage } from "@inertiajs/vue3";
import Search from "@/Components/Search/Search.vue";

const callModal = inject("callModal");

const page = usePage();
</script>

<style scoped>
@media(min-width: 922px) {
    .grid-layout {
        grid-template-columns: 220px auto 0;
    }
}

@media(min-width: 1280px) {
    .grid-layout {
        grid-template-columns: 220px 640px auto;
    }
}

@media(max-width: 640px) {
    .grid-layout {
        grid-template-columns: auto;
    }
}
</style>
