<template>

    <admin-row v-for="admin in admins" :key="admin.id">
        <template #id>
            {{ admin.id }}
        </template>
        <template #title>
            {{ admin.name }}
        </template>
        <template #timestamp>
            {{ admin.created_at }}
        </template>
        <template #buttons>
            <Link :href="route('panel.view.user', [admin.id])">Рассмотреть</Link>
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
    admins: null,
})
</script>
