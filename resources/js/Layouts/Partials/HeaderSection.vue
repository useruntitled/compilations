<template>
    <div class="text-15">
        <p class="px-4 font-medium py-2 text-start">Мой профиль</p>
        <DropdownLink
            :href="route('profile', [page.props.auth.user.id])"
            class="my-2"
        >
            <div class="flex items-center">
                <lazy-media
                    :media="page.props.auth.user.avatar"
                    width="45"
                    height="45"
                    rounded="full"
                    class="inline-block"
                />
                <span
                    class="whitespace-no-wrap overflow-hidden flex flex-col ms-2"
                >
                    <p class="whitespace-no-wrap overflow-hidden font-medium">
                        {{ page.props.auth.user.name }}
                    </p>
                    <p class="opacity-80">Профиль</p>
                </span>
            </div>
        </DropdownLink>

        <DropdownLink
            v-if="page.props.auth.access_level > 0"
            :href="route('panel.index')"
            class="my-4 text-17px"
        >
            <IconPanel class="me-2 inline-block stroke-[2]"></IconPanel>
            Администрировать
        </DropdownLink>

        <DropdownLink :href="route('drafts')" class="my-4 text-17px">
            <IconPencil class="me-2 inline-block w-6 h-6"></IconPencil>
            Черновики
        </DropdownLink>
        <DropdownLink :href="route('settings')" class="my-4 text-17px">
            <IconTooth class="me-2 w-6 h-6 inline-block"></IconTooth>
            Настройки
        </DropdownLink>
        <DropdownLink
            :href="route('logout')"
            method="post"
            as="button"
            class="my-4 text-17px"
        >
            <IconExit class="me-2 inline-block stroke-[2]"></IconExit>
            Выйти
        </DropdownLink>
    </div>
</template>
<script setup>
import DropdownLink from "@/Components/DropdownLink.vue";
import IconExit from "@/Components/Icons/IconExit.vue";
import IconPanel from "@/Components/Icons/IconPanel.vue";
import IconPencil from "@/Components/Icons/IconPencil.vue";
import IconTooth from "@/Components/Icons/IconTooth.vue";
import { usePage } from "@inertiajs/vue3";
import LazyImage from "@/Components/LazyImage.vue";
import LazyMedia from "@/Components/Media/LazyMedia.vue";

const page = usePage();
</script>
