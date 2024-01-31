<template>
    <div
        class="h-full mx-auto w-full text-center sticky"
        style="height: 100vh; top: 65.6px"
    >
        <div class="px-2.5 mt-0 py-5 text-start">
            <div
                class="w-full p-2 rounded-xl text-lg mb-2 hover:cursor-pointer hover:bg-white"
                :class="{ 'bg-white': isPopular }"
            >
                <Link :href="route('home')" class="flex items-center py-[5px]">
                    <span class="me-2 inline-block">
                        <IconFlame
                            class="w-[24px] stroke-[0.3px] text-secondary"
                            :class="{
                                'stroke-amber-500 fill-amber-500 stroke-[0.5px]':
                                    isPopular,
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
                            class="stroke-[2.2px] w-[24px] text-secondary"
                            :class="{
                                'stroke-amber-500 opacity-80  stroke-[0.5px]':
                                    isNew,
                            }"
                        ></IconClock
                    ></span>
                    <span class="text-lgg font-regular">Свежее</span>
                </Link>
            </div>
            <div
                class="w-full hover:bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer"
            >
                <button class="flex items-center py-[5px]">
                    <span class="me-2 inline-block"
                        ><IconBookmark
                            class="w-[24px] text-secondary stroke-[2.2px]"
                        ></IconBookmark
                    ></span>
                    <span class="text-lgg font-regular">Закладки</span>
                </button>
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
</script>

<!-- <script>


export default {
    inject: ["callModal"],
    components: { PrimaryButton, IconBookmark, IconClock, IconFlame },
};
</script> -->
