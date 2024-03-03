<template>
    <admin-view-card title="Подборка" :object="props.post">
        <template #description>
            <div>
                <p>Кол-во жалоб: {{ reports_count }}</p>
            </div>
            <Post :post="post"></Post>
        </template>
        <template #footer>
            <button @click="showModal = true">Удалить подборку</button>
            <Link :href="route('panel.view.user', [post.user.id])">Рассмотреть автора</Link>
        </template>
    </admin-view-card>

    <decline-modal :show="showModal" @close="showModal = false" :route="'panel.decline.post'" :id="post.id"/>
</template>
<script setup>
import AdminViewCard from "@/Components/Admin/AdminViewCard.vue";
import PanelLayout from "@/Layouts/PanelLayout.vue";
import Post from '@/Components/Post.vue';
import DeclineModal from "@/Components/Admin/DeclineModal.vue";
import {ref} from "vue";

defineOptions({
    layout: PanelLayout,
})

const props = defineProps({
    post: null,
    reports_count: null,
})

const showModal = ref(false);
</script>
