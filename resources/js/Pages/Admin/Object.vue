<template>
    <div>
        <header>
            <p>
                id: {{ report_to.id }}
            </p>
            <p>
                {{ report_to}}
            </p>
            <p>
                <img v-if="report_to.image" class="max-h-40" :src="route('im', [report_to.image, 200])" alt="">
            </p>
        </header>
        <main class="mt-10">
            <button @click="remove()">Удалить/Скрыть</button>
        </main>
    </div>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";

defineOptions({
    layout: PanelLayout
})
const props = defineProps({
    report_to: null,
    report: null,
});

const remove = () => {
    axios.post(route(`panel.${props.report.report_to_type.replace('App\\Models\\', '').toLowerCase()}.delete`), {
        _method: 'DELETE',
        id: props.report_to.id,
    })
}


</script>
