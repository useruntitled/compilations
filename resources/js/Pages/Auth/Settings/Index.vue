<template>
    <div class="mx-1">
        <Link
            preserve-state
            preserve-scroll
            :href="route('settings.profile')"
            class="block hover:bg-zinc-100 p-6 rounded-xl"
        >
            <div class="flex items-center">
                <div class="me-4 opacity-80">
                    <IconLogin class="w-6 h-6 stroke-[0.1]" />
                </div>
                <div class="flex flex-col">
                    <p class="font-[400]">Профиль</p>
                    <p class="text-15 opacity-80">Название, Описание</p>
                </div>
            </div>
        </Link>
        <div class="block hover:bg-zinc-100 p-6 rounded-xl">
            <div class="flex items-center">
                <div class="me-4 opacity-80">
                    <IconTooth class="w-6 h-6" />
                </div>
                <div class="flex flex-col">
                    <p class="font-[400]">Основные</p>
                    <p class="text-15 opacity-80">
                        Способ входа, Удаление аккаунта
                    </p>
                </div>
            </div>
        </div>
        <div class="block hover:bg-zinc-100 p-6 rounded-xl">
            <div class="flex items-center">
                <div class="me-4 opacity-80">
                    <IconBell class="text-black w-6 h-6 stroke-[0.1]" />
                </div>
                <div class="flex flex-col">
                    <p class="font-[400]">Уведомления</p>
                    <p class="text-15 opacity-80">Уведомления, Письма</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import SettingsLayout from "./SettingsLayout.vue";
import IconLogin from "@/Components/Icons/IconLogin.vue";
import IconTooth from "@/Components/Icons/IconTooth.vue";
import IconBell from "@/Components/Icons/IconBell.vue";
import MainLayout from "@/Layouts/MainLayout.vue";

defineOptions({ layout: [MainLayout, SettingsLayout] });
</script>
