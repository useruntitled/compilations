<template>
    <Head>
        <title>
            Панель
        </title>
    </Head>
    <div class="grid grid-template">
        <section class="h-full mx-auto w-full text-center sticky overflow-y-auto overscroll-none min-h-screen border-e-2">
            <Link :href="route('panel.index')" class="my-10 mt-5 pb-4 font-semibold text-xl border-b-2">
                Панель
            </Link>
            <div class="flex flex-col space-y-10  mt-10">
                <Link :href="route('panel.films')" class="hover:opacity-80">
                    Фильмы
                </Link>
                <Link :href="route('panel.posts')" class="hover:opacity-80">
                    Подборки
                </Link>
                <Link :href="route('panel.users')">
                    Пользователи
                </Link>
                <Link :href="route('panel.comments')">
                    Комментарии
                </Link>
                <Link :href="route('panel.moders')">
                    Модераторы
                </Link>
                <Link :href="route('panel.admins')">
                    Администраторы
                </Link>
            </div>
        </section>
        <div class="ms-8 mt-4 px-10 max-w-5xl min-h-screen pb-10">
            <slot></slot>
        </div>
    </div>
</template>
<style>
.grid-template {
    grid-template-columns: 220px auto;
}
</style>
<script setup>
</script>
