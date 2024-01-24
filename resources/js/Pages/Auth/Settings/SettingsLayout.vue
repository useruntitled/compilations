<template>
    <Head>
        <title>Настройки</title>
    </Head>
    <div class="bg-white rounded-xl">
        <header class="font-medium text-lgg px-5 py-4 flex items-center">
            <Link
                preserve-state
                preserve-scroll
                :href="route('settings')"
                v-if="pages[page.component] != 'Настройки'"
                class="hover:bg-zinc-100 rounded-full me-2"
            >
                <IconArrowLeft
                    class="w-8 h-8 inline-block stroke-[1.4px]"
                ></IconArrowLeft>
            </Link>
            <span>{{ pages[page.component] }}</span>
        </header>
        <hr />
        <main class="py-5">
            <slot></slot>
        </main>
    </div>
</template>
<script setup>
import { reactive } from "vue";
import { usePage } from "@inertiajs/vue3";
import IconArrowLeft from "@/Components/Icons/IconArrowLeft.vue";

const page = usePage();

const pages = reactive({
    "Auth/Settings/Index": "Настройки",
    "Auth/Settings/Profile": "Профиль",
});
</script>
