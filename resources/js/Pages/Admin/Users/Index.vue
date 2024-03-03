<template>

    <admin-row v-for="user in users.data" :key="user.id">
        <template #id>
            {{ user.id }}
        </template>
        <template #title>
            {{ user.name }}
        </template>
        <template #timestamp>
            {{ user.created_at }}
        </template>
        <template #buttons>
            <Link :href="route('panel.view.user', [user.id])">Рассмотреть</Link>
        </template>
    </admin-row>
    <admin-pagination :links="users.links" :last_page="users.last_page"></admin-pagination>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminRow from "@/Components/Admin/AdminRow.vue";
import AdminPagination from "@/Components/Admin/AdminPagination.vue";

defineOptions({
    layout: PanelLayout
})

const props = defineProps({
    users: null,
})
</script>
