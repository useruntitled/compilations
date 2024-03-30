<template>
    <admin-table>
        <admin-row v-for="admin in list.data" :key="admin.id">
            <template #id>
                {{ admin.id }}
            </template>
            <template #title>
                {{ admin.name }}
            </template>
            <template #date>
                {{ admin.created_at }}
            </template>
            <template #action>
                <Link :href="route('panel.view.user', [admin.id])">Рассмотреть</Link>
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

const props = defineProps({
    list: null,
})
</script>
