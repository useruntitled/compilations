<template>
    <div class="m-0 p-0 inset-0">
        <div class="bg-white rounded-xl mb-2">
            <div class="px-3 py-2 mt-4">
                <Search bg-input-color="bg-white"/>
            </div>
        </div>
        <div class="bg-white rounded-xl px-2 py-40 text-center text-secondary">
            Пока здесь пусто, но скоро появится поиск
        </div>
    </div>
</template>
<script setup>
import Search from "@/Components/Search/Search.vue";
import MainLayout from "@/Layouts/MainLayout.vue";

defineOptions({
    layout: MainLayout
})
</script>
