<template>
    <admin-table>
        <admin-row v-for="film in list.data" :key="film.id">
            <template #id>
                {{ film.id }}
            </template>
            <template #title>
                {{ film.name_ru }} {{ film.name_en }}
            </template>
            <template #date>
                {{ film.created_at }}
            </template>
            <template #action>
                <Link :href="route('panel.view.film', [film.id])">Редактировать</Link>
            </template>
        </admin-row>
    </admin-table>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminRow from "@/Components/Admin/AdminRow.vue";
import PanelListLayout from "@/Layouts/PanelListLayout.vue";
import AdminTable from "@/Components/Admin/AdminTable.vue";

defineOptions({
    layout: [PanelLayout, PanelListLayout]
})

defineProps({
    list: null,
})
</script>
