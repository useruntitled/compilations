<template>
    <div
        class="h-full mx-auto w-full text-center sticky"
        style="height: calc(100vh - 50.6px); top: 50.6px"
    >
        <div class="px-2.5 mt-0 py-5 text-start">
            <div
                class="w-full p-2 rounded-xl text-lg mb-2 hover:cursor-pointer hover:bg-white"
                :class="{ 'bg-white': isPopular }"
            >
                <Link :href="route('home')" class="flex items-center py-[5px]">
                    <span class="me-2 inline-block">
                        <IconFlame
                            class="w-[24px] text-secondary"
                            :class="{
                                'stroke-amber-500 fill-amber-500 ': isPopular,
                            }"
                        ></IconFlame>
                    </span>
                    <span class="text-lgg font-regular">Популярное</span>
                </Link>
            </div>
            <div
                class="w-full hover:bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer"
                :class="{ 'bg-white': isNew }"
            >
                <Link :href="route('new')" class="flex items-center py-[5px]">
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
                </Link>
            </div>
            <div
                class="w-full hover:bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer"
                :class="{
                    'bg-white ': isBookmarks,
                }"
            >
                <Link
                    :href="route('me.bookmarks')"
                    class="flex items-center py-[5px]"
                >
                    <span class="me-2 inline-block"
                        ><IconBookmark
                            :class="{
                                'text-amber-500 ': isBookmarks,
                                'text-secondary': !isBookmarks,
                            }"
                            class="w-[24px] stroke-[2.2]"
                        ></IconBookmark
                    ></span>
                    <span class="text-lgg font-regular">Закладки</span>
                </Link>
            </div>
            <div class="w-full mt-10">
                <PrimaryButton
                    @click="callModal('Editor')"
                    class="bg-orange-500 px-0 rounded-lg py-3 w-full font-regular text-17px"
                    >Новая подборка</PrimaryButton
                >
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

const callModal = inject("callModal");

const page = usePage();

const isPopular = computed(() => {
    return page.component == "home/index";
});

const isNew = computed(() => {
    return page.component == "home/New";
});

const isBookmarks = computed(() => {
    return page.component == "Auth/Bookmarks";
});
</script>

<!-- <script>


export default {
    inject: ["callModal"],
    components: { PrimaryButton, IconBookmark, IconClock, IconFlame },
};
</script> -->
