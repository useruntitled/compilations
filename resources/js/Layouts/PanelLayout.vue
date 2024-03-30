<template>
    <Head>
        <title>
            Панель
        </title>
    </Head>
    <div class="grid grid-template bg-panelbck">
        <section class="overscroll-none min-h-screen
            border-e-2 border-panelbck bg-panelsemiprimary
            "
        >
            <Link :href="route('panel.index')" class="my-10 pb-4 font-semibold text-xl border-b-2">
                <div class="my-6 px-10">
                    Панель
                </div>
            </Link>
            <div class="flex flex-col space-y-6  mt-10 font-medium">
                <Link :href="route('panel.films')" class="py-2 px-10 hover:bg-panelbck text-zinc-400">
                    Фильмы
                </Link>
                <Link :href="route('panel.posts')" class="py-2 px-10 hover:bg-panelbck text-zinc-400">
                    Подборки
                </Link>
                <Link :href="route('panel.users')" class="py-2 px-10 hover:bg-panelbck text-zinc-400">
                    Пользователи
                </Link>
                <Link :href="route('panel.comments')" class="py-2 px-10 hover:bg-panelbck text-zinc-400">
                    Комментарии
                </Link>
                <Link v-if="page.props.auth.access_level > 1"
                      :href="route('panel.moders')" class="py-2 px-10 hover:bg-panelbck text-zinc-400">
                    Модераторы
                </Link>
                <Link v-if="page.props.auth.access_level > 1"
                      :href="route('panel.admins')" class="py-2 px-10 hover:bg-panelbck text-zinc-400">
                    Администраторы
                </Link>
            </div>
            <div class="mt-[100%] mx-10">
                <p class="text-[rgb(181_181_189)]">Вы:</p>
                <p v-if="page.props.auth.access_level > 1" class="text-zinc-400">Администратор</p>
                <p v-else class="text-zinc-400">Модератор</p>
            </div>
        </section>
        <div class="ms-8 mt-8 px-10 max-w-7xl min-h-screen pb-10">
            <div class="max-w-5xl">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<style>
.grid-template {
    grid-template-columns: 220px auto;
}

* {
    font-family: 'Roboto';
    color: rgb(231 232 242);
}
</style>
<script setup>
import {usePage} from "@inertiajs/vue3";

const page = usePage();
</script>
