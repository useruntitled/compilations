<template>
    <div class="bg-white rounded-xl">
        <header class="font-semibold text-lgg px-5 py-4">
            <p>Настройки</p>
        </header>
        <hr />
        <main class="px-5 py-5">
            <Link :href="route('settings.blog')" class="block">Блог</Link>
            <button class="block">Основные</button>
            <button class="block">Уведомления</button>
        </main>
    </div>
</template>
<script setup></script>
<script>
import Base from "../../shared/base.vue";

export default {
    layout: Base,
};
</script>
