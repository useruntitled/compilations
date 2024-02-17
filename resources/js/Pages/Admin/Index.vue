<template>
        <main>
            <p class="font-semibold mb-5 text-lgg">
                Жалобы
            </p>
            <div class="space-y-2 max-w-screen-sm">
                <div v-for="report in reports" class="border-b-2 pb-2 flex items-end justify-between space-x-5">
                    <div>
                        <header>
                        <span>
                            id: {{ report.id }}
                        </span>
                            <p>
                                <span>Тип: </span>
                                <span>
                                {{ models[report.report_to_type] }}
                            </span>
                            </p>
                        </header>
                        <main>
                            <div>
                            <span>
                            Причина:
                        </span>
                                <span>
                            {{ types[report.message] }}
                        </span>
                            </div>
                        </main>
                    </div>
                    <div class="space-y-2 flex items-end flex-col">
                        <Link :href="route('panel.object.creator.view', [report.report_to.user])" class="block p-2 bg-gray-100 rounded hover:opacity-80">
                            Рассмотреть владельца {{ models[report.report_to_type] }}
                        </Link>
                        <Link :href="route('panel.object.view', [report.report_to_id])" class="block p-2 bg-gray-100 rounded hover:opacity-80">
                            Рассмотреть {{ models[report.report_to_type] }}
                        </Link>
                    </div>
                </div>
            </div>
        </main>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";

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
