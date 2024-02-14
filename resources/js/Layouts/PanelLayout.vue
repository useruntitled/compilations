<template>
    <div class="grid grid-template">
        <section class="h-full mx-auto w-full text-center sticky overflow-y-auto overscroll-none min-h-screen border-e-2">
            <div class="my-10 mt-5 pb-4 font-semibold text-xl border-b-2">
                Панель
            </div>
            <div class="flex flex-col space-y-10 ">
                <button class="hover:opacity-80">
                    Фильмы
                </button>
                <button class="hover:opacity-80">
                    Подборки
                </button>
            </div>
        </section>
        <div class="ms-8 mt-4">
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
