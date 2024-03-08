<template>

    <admin-row v-for="moder in moders" :key="moder.id">
        <template #id>
            {{ moder.id }}
        </template>
        <template #title>
            {{ moder.name }}
        </template>
        <template #timestamp>
            {{ moder.created_at }}
        </template>
        <template #buttons>
            <Link :href="route('panel.view.user', [moder.id])">Рассмотреть</Link>
        </template>
    </admin-row>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminRow from "@/Components/Admin/AdminRow.vue";
import AdminPagination from "@/Components/Admin/AdminPagination.vue";

defineOptions({
    layout: PanelLayout
})

const props = defineProps({
    moders: null,
})
</script>
