<template>
    <admin-table>
        <admin-row v-for="post in list.data" :key="post.id" :enabled-filter="props.filter" filter="published">
            <template #id>
                {{ post.id }}
            </template>
            <template #title>
                {{ post.title }}
            </template>
            <template #status>
                {{ post.is_active ? 'Опубликована' : 'Не опубликована' }}
            </template>
            <template #date>
                {{ post.timestamp }}
            </template>
            <template #action>
                <Link :href="route('panel.view.post', [post.id])">
                    Рассмотреть
                </Link>
            </template>
        </admin-row>
    </admin-table>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminRow from "@/Components/Admin/AdminRow.vue";
import AdminPagination from "@/Components/Admin/AdminPagination.vue";
import PanelListLayout from "@/Layouts/PanelListLayout.vue";
import AdminTable from "@/Components/Admin/AdminTable.vue";

defineOptions({
    layout: [PanelLayout, PanelListLayout]
})

const props = defineProps({
    list: null,
    filter: null,
})
</script>
