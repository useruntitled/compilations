<template>
    <main>
        <p class="font-semibold mb-5 text-lgg">Жалобы</p>

        <admin-table>
            <admin-row v-for="report in reports.data">
                <template #id>
                    {{ report.id }}
                </template>
                <template #date>
                    {{ report.created_at }}
                </template>
                <template #title>
                    {{ models[report.report_to_type] }}
                </template>
                <template #content>
                    {{ types[report.message] }}
                </template>
                <template #action>
                    <Link :href="route('panel.report.view', [report.id])"
                        >Посмотреть</Link
                    >
                </template>
            </admin-row>
        </admin-table>
        <AdminPagination
            :links="reports.links"
            :last_page="reports.last_page"
        />
    </main>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminRow from "@/Components/Admin/AdminRow.vue";
import AdminPagination from "@/Components/Admin/AdminPagination.vue";
import AdminTable from "@/Components/Admin/AdminTable.vue";

defineOptions({
    layout: PanelLayout,
});

const models = {
    "App\\Models\\Post": "Подборка",
    "App\\Models\\Comment": "Комментарий",
    "App\\Models\\Film": "Фильм",
};

const types = {
    rude: "Оскорбление",
    lie: "Несоответствие",
    other: "Прочее",
    spam: "Спам",
    violence: "Насилие",
    illegal: "Нарушение закона",
};

const props = defineProps({
    reports: null,
});
</script>
