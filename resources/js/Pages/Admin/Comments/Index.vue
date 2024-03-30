<template>
    <admin-table>
        <admin-row v-for="comment in list.data" :key="comment.id">
            <template #id>
                {{ comment.id }}
            </template>
            <template #title>
                {{ comment.text }}

            </template>
            <template #content>
                <fluid-lazy-media
                    v-if="comment.image"
                    :media="comment.image"
                    :max-height="20"
                />
            </template>
            <template #status>
                <p v-if="comment.is_active">Активен</p>
                <p v-else class="text-red-500">Удалён</p>
            </template>
            <template #date>
                {{ comment.timestamp }}
            </template>
            <template #action>
                <Link :href="route('panel.view.comment', [comment.id])">Рассмотреть</Link>
            </template>
        </admin-row>
    </admin-table>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminRow from "@/Components/Admin/AdminRow.vue";
import AdminPagination from "@/Components/Admin/AdminPagination.vue";
import FluidLazyMedia from "@/Components/Media/FluidLazyMedia.vue";
import AdminSearchInertiaInput from "@/Components/Admin/AdminSearchInertiaInput.vue";
import PanelListLayout from "@/Layouts/PanelListLayout.vue";
import AdminTable from "@/Components/Admin/AdminTable.vue";

defineOptions({
    layout: [PanelLayout, PanelListLayout]
})

defineProps({
    list: null,
})
</script>
