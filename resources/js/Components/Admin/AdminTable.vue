<template>

    <section class="relative text-white my-2">
        <div class="space-x-5">
            <button
                @click="toggleFilter('all')"
                class="p-4 hover:bg-panelsemiprimary"
                :class="{'bg-panelsemiprimary': isActive('all')}"
            >
                Все
            </button>
            <button
                @click="toggleFilter('published')"
                class="p-4 hover:bg-panelsemiprimary"
                :class="{'bg-panelsemiprimary': isActive('published')}"
            >
                Опубликованные
            </button>
            <button
                @click="toggleFilter('declined')"
                class="p-4 hover:bg-panelsemiprimary"
                :class="{'bg-panelsemiprimary': isActive('declined')}"
            >
                Отклонённые
            </button>
        </div>
    </section>

    <table class="w-full">
        <tr>
            <th>
                id
            </th>
            <th>
                Заголовок
            </th>
            <th>
                Содержание
            </th>
            <th>
                Статус
            </th>
            <th>
                Дата
            </th>
            <th>
                Действие
            </th>
        </tr>
        <slot></slot>
    </table>
</template>
<script setup>
import {router} from "@inertiajs/vue3";
import {onMounted, ref} from "vue";


const activeFilter = ref(null);

const getUrl = () => {
    return new URL(window.location.href);
}

const isActive = (value) => {
    return activeFilter.value === value;
}

onMounted(() => {
    const uri = getUrl();
    if (uri.searchParams.has('filter')) {
        activeFilter.value = uri.searchParams.get('filter');
    }
})

const addFilter = (uri, filter) => {
    if (uri.searchParams.has('filter')) {
        if (uri.searchParams.get('filter') != filter) {
            uri.searchParams.set('filter', filter);
        }
    } else {
        uri.searchParams.append('filter', filter)
    }
}

const toggleFilter = (option) => {
    const uri = getUrl();

    if (option == 'all') {
        uri.searchParams.delete('filter');
    }

    if (option == 'published') {
        addFilter(uri, 'published');
    }

    if (option == 'declined') {
        addFilter(uri, 'declined');
    }

    router.visit(uri);
};
</script>
