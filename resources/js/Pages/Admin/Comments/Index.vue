<template>
    <admin-row v-for="comment in comments.data" :key="comment.id">
        <template #id>
            {{ comment.id }}
        </template>
        <template #title>
            {{ comment.text }}
            <fluid-lazy-media
                v-if="comment.image"
                :media="comment.image"
                :max-height="50"
            />
        </template>
        <template #content>
            {{ comment.is_active ? 'Опубликован' : 'Не опубликован' }}
        </template>
        <template #timestamp>
            {{ comment.created_at }}
        </template>
        <template #buttons>
            <Link :href="route('panel.view.comment', [comment.id])">Рассмотреть</Link>
        </template>
    </admin-row>
    <admin-pagination :links="comments.links" :last_page="comments.last_page"></admin-pagination>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminRow from "@/Components/Admin/AdminRow.vue";
import AdminPagination from "@/Components/Admin/AdminPagination.vue";
import FluidLazyMedia from "@/Components/Media/FluidLazyMedia.vue";

defineOptions({
    layout: PanelLayout
})

defineProps({
    comments: null,
})
</script>
