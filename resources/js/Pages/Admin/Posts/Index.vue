<template>

    <admin-row v-for="post in posts.data" :key="post.id">
        <template #id>
            {{ post.id }}
        </template>
        <template #title>
            {{ post.title }}
        </template>
        <template #content>
            {{ post.is_active ? 'Опубликована' : 'Не опубликована' }}
        </template>
        <template #timestamp>
            {{ post.created_at }}
        </template>
        <template #buttons>
            <Link :href="route('panel.view.post', [post.id])">Рассмотреть</Link>
        </template>
    </admin-row>
    <admin-pagination :links="posts.links" :last_page="posts.last_page"></admin-pagination>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminRow from "@/Components/Admin/AdminRow.vue";
import AdminPagination from "@/Components/Admin/AdminPagination.vue";

defineOptions({
    layout: PanelLayout
})

const props = defineProps({
    posts: null,
})
</script>
