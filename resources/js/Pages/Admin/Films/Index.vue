<template>
    <admin-row v-for="film in films.data" :key="film.id">
        <template #id>
            {{ film.id }}
        </template>
        <template #title>
            {{ film.name_ru }} {{ film.name_en }}
        </template>
        <template #timestamp>
            {{ film.created_at }}
        </template>
        <template #buttons>
            <Link :href="route('panel.view.film', [film.id])">Редактировать</Link>
        </template>
    </admin-row>
    <admin-pagination :links="films.links" :last_page="films.last_page"></admin-pagination>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminRow from "@/Components/Admin/AdminRow.vue";
import AdminPagination from "@/Components/Admin/AdminPagination.vue";

defineOptions({
    layout: PanelLayout
})

defineProps({
    films: null,
})
</script>
