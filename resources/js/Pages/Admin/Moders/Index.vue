<template>

    <admin-table>
        <admin-row v-for="moder in list.data" :key="moder.id">
            <template #id>
                {{ moder.id }}
            </template>
            <template #title>
                {{ moder.name }}
            </template>
            <template #date>
                {{ moder.created_at }}
            </template>
            <template #action>
                <Link :href="route('panel.view.user', [moder.id])">Рассмотреть</Link>
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
