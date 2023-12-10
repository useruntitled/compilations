<template>
    <div
        class="h-full mx-auto w-full text-center sticky"
        style="height: 100vh; top: 65.6px"
    >
        <div class="px-2.5 mt-2 py-5 text-start">
            <div
                class="w-full bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer"
            >
                <button class="flex items-center">
                    <span class="me-2 inline-block">
                        <IconFlame
                            class="stroke-3/2 text-amber-500 stroke-4"
                        ></IconFlame>
                    </span>
                    <span>Популярное</span>
                </button>
            </div>
            <div
                class="w-full hover:bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer"
            >
                <button class="flex items-center">
                    <span class="me-2 inline-block"
                        ><IconClock class="stroke-3/2"></IconClock
                    ></span>
                    <span>Свежее</span>
                </button>
            </div>
            <div
                class="w-full hover:bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer"
            >
                <button class="flex items-center">
                    <span class="me-2 inline-block"
                        ><IconBookmark
                            class="w-5 h-5 text-slate-700 stroke-2"
                        ></IconBookmark
                    ></span>
                    <span>Закладки</span>
                </button>
            </div>
            <div class="w-full mt-10">
                <PrimaryButton
                    class="text-lg bg-orange-500 px-0 rounded-lg py-3 w-full font-semibold"
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
