<template>
    <div
        class="h-full w-full text-center sticky"
        style="height: calc(100vh - 58px); top: 58px"
    >
        <div class="px-2.5 mt-0 py-5 text-start">
            <Link
                preserve-state
                :href="route('home')"
                class="appearance-none block w-full p-2 rounded-xl text-lg mb-2 hover:cursor-pointer hover:bg-white hover:shadow-sm"
                :class="{ 'bg-white shadow-sm': isPopular }"
            >
                <div class="flex items-center py-[5px]">
                    <span class="me-2 inline-block">
                        <IconFlame
                            class="w-[24px] text-secondary"
                            :class="{
                                'stroke-amber-500 fill-amber-500 ': isPopular,
                            }"
                        ></IconFlame>
                    </span>
                    <span class="text-lgg font-regular">Популярное</span>
                </div>
            </Link>
            <Link
                preserve-state
                :href="route('new')"
                class="block w-full hover:bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer hover:shadow-sm"
                :class="{ 'bg-white shadow-sm': isNew }"
            >
                <div class="flex items-center py-[5px]">
                    <span class="me-2 inline-block"
                        ><IconClock
                            class="w-[24px] stroke-[2.2]"
                            :class="{
                                'text-amber-500 ': isNew,
                                'text-secondary': !isNew,
                            }"
                        ></IconClock
                    ></span>
                    <span class="text-lgg font-regular">Свежее</span>
                </div>
            </Link>
            <AuthLink
                :href="route('me.bookmarks')"
                class="block w-full hover:bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer hover:shadow-sm"
                :class="{
                    'bg-white shadow-sm ': isBookmarks,
                }"
            >
                <div class="flex items-center py-[5px]">
                    <span class="me-2 inline-block"
                        ><IconBookmark
                            :class="{
                                'text-amber-500 ': isBookmarks,
                                'text-secondary': !isBookmarks,
                            }"
                            class="w-[24px]"
                        ></IconBookmark
                    ></span>
                    <span class="text-lgg font-regular">Закладки</span>
                </div>
            </AuthLink>
            <div class="w-full mt-10">
                <PrimaryButton
                    @click="callModal('Editor')"
                    class="bg-orange-500 px-0 rounded-lg py-3 w-full font-regular text-17px"
                    >Новая подборка
                </PrimaryButton>
            </div>
            <div class="bottom-0 absolute py-5 ms-2 text-[15px] space-y-2">
                <p class="opacity-70 hover:opacity-100">
                    <a
                        href="https://github.com/useruntitled/compilations/tree/master"
                        class="space-x-1"
                    >
                        <span>GitHub</span>
                        <span>
                            <IconGithub class="opacity-90 stroke-[1.5px]" />
                        </span>
                    </a>
                </p>
                <p class="opacity-70 hover:opacity-100">
                    <a href="https://t.me/accintouch">Связаться с автором</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { inject, computed } from "vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import IconBookmark from "@/Components/Icons/IconBookmark.vue";
import IconClock from "@/Components/Icons/IconClock.vue";
import IconFlame from "@/Components/Icons/IconFlame.vue";
import { usePage } from "@inertiajs/vue3";
import AuthLink from "@/Components/AuthLink.vue";
import IconGithub from "@/Components/Icons/IconGithub.vue";

const callModal = inject("callModal");

const page = usePage();

const isPopular = computed(() => {
    return page.component === "Home/Index";
});

const isNew = computed(() => {
    return page.component === "Home/New";
});

const isBookmarks = computed(() => {
    return page.component === "Auth/Bookmarks";
});
</script>
