<template>
    <main>
        <p class="font-semibold mb-5 text-lgg">
            Жалобы
        </p>

        <admin-row v-for="report in reports.data">
            <template #id>
                {{ report.id }}
            </template>
            <template #timestamp>
                {{ report.created_at }}
            </template>
            <template #title>
                {{ models[report.report_to_type] }}
            </template>
            <template #content>
                {{ types[report.message] }}
            </template>
            <template #buttons>
                <Link :href="route('panel.report.view', [report.id])">Посмотреть</Link>
                <button>Удалить</button>
            </template>
        </admin-row>
        <admin-pagination :links="reports.links" :last_page="reports.last_page"></admin-pagination>
    </main>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminRow from "@/Components/Admin/AdminRow.vue";
import AdminPagination from "@/Components/Admin/AdminPagination.vue";

defineOptions({
    layout: PanelLayout,
})

const models = {
    'App\\Models\\Post': 'Подборка',
    'App\\Models\\Comment': 'Комментарий',
    'App\\Models\\Film': 'Фильм',
}

const types = {
    'rude': 'Оскорбление',
    'lie': 'Несоответствие',
    'other': 'Прочее',
    'spam': 'Спам',
    'violence': 'Насилие',
    'illegal': 'Нарушение закона',
}

const props = defineProps({
    reports: null,
})
</script>
