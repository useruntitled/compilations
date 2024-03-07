<template>
    <admin-view-card :object="report" title="Жалоба">
        <template #description>
            <div>
                На что жалоба: {{ models[report.report_to_type] }}
            </div>
            <div>
                Выбрана причина: {{ types[report.message] }}
            </div>
        </template>
        <template #footer>
            <Link
                :href="route('panel.view.' + report.report_to_type.replace('App\\Models\\','').toLowerCase() , [report.report_to_id])">
                Рассмотреть {{
                    models[report.report_to_type]
                }}
            </Link>
            <button>Удалить жалобу</button>
        </template>
    </admin-view-card>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminViewCard from "@/Components/Admin/AdminViewCard.vue";

defineOptions({
    layout: PanelLayout,
});

defineProps({
    report: null,
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
</script>
