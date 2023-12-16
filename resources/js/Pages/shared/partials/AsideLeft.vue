<template>
    <div
        class="h-full mx-auto w-full text-center sticky"
        style="height: 100vh; top: 65.6px"
    >
        <div class="px-2.5 mt-2 py-5 text-start">
            <div
                class="w-full bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer"
            >
                <button class="flex items-center py-[5px]">
                    <span class="me-2 inline-block">
                        <IconFlame
                            class="stroke-3/2 w-[24px] text-amber-500 stroke-[2px]"
                        ></IconFlame>
                    </span>
                    <span class="text-lgg">Популярное</span>
                </button>
            </div>
            <div
                class="w-full hover:bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer"
            >
                <button class="flex items-center py-[5px]">
                    <span class="me-2 inline-block"
                        ><IconClock
                            class="stroke-[2px] w-[24px] text-gray-600"
                        ></IconClock
                    ></span>
                    <span class="text-lgg">Свежее</span>
                </button>
            </div>
            <div
                class="w-full hover:bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer"
            >
                <button class="flex items-center py-[5px]">
                    <span class="me-2 inline-block"
                        ><IconBookmark
                            class="w-[24px] text-gray-600 stroke-[2px]"
                        ></IconBookmark
                    ></span>
                    <span class="text-lgg">Закладки</span>
                </button>
            </div>
            <div class="w-full mt-10">
                <PrimaryButton
                    @click="callAuthModal()"
                    class="bg-orange-500 px-0 rounded-lg py-3 w-full font-semibold text-17px"
                    >Новая подборка</PrimaryButton
                >
            </div>
        </div>
    </div>
</template>
<script>
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import IconBookmark from "@/Components/Icons/IconBookmark.vue";
import IconClock from "@/Components/Icons/IconClock.vue";
import IconFlame from "@/Components/Icons/IconFlame.vue";

export default {
    components: { PrimaryButton, IconBookmark, IconClock, IconFlame },
};
</script>
