<template>
    <div v-for="i in 2">
        <div
            class="bg-kppale"
            :class="
                i == 1
                    ? 'fixed w-full z-[48] border-b-4 border-kpnpale bg-opacity-90 backdrop-blur-sm'
                    : 'block opacity-0'
            "
            id="header"
        >
            <div class="max-w-7xl mx-auto px-5 py-1">
                <div class="grid grid-layout gap-4 items-center">
                    <section class="flex items-center">
                        <div>
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
                    <section class="ms-3 hidden lg:block">
                        <div class="w-[640px] mx-auto">
                            <Search class="relative" input-opacity="20" />
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
                                        <lazy-media
                                            :media="page.props.auth.user.avatar"
                                            width="40"
                                            height="40"
                                            rounded="full"
                                        />
                                        <div
                                            class="ms-2"
                                            v-if="$page.props.auth.user"
                                        >
                                            <icon-chewron-down
                                                class="w-4 h-4"
                                            />
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
import Dropdown from "@/Components/Dropdowns/Dropdown.vue";
import IconSearch from "@/Components/Icons/IconSearch.vue";
import HeaderSection from "./HeaderSection.vue";
import ApplicationLogo from "@/Components/Logos/ApplicationLogo.vue";
import PrimaryButtonWhite from "@/Components/Buttons/PrimaryButtonWhite.vue";
import DropdownNotifications from "@/Components/Dropdowns/DropdownNotifications.vue";
import LazyImage from "@/Components/Media/LazyImage.vue";
import { usePage } from "@inertiajs/vue3";
import Search from "@/Components/Search/Search.vue";
import LazyMedia from "@/Components/Media/LazyMedia.vue";
import IconChewronDown from "@/Components/Icons/IconChewronDown.vue";

const callModal = inject("callModal");

const page = usePage();
</script>

<style scoped>
@media (min-width: 922px) {
    .grid-layout {
        grid-template-columns: 220px auto 0;
    }
}

@media (min-width: 1280px) {
    .grid-layout {
        grid-template-columns: 220px 640px auto;
    }
}

@media (max-width: 640px) {
    .grid-layout {
        grid-template-columns: auto;
    }
}
</style>
