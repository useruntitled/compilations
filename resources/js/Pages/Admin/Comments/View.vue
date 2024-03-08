<template>

    <admin-view-card title="Комментарий" :object="props.comment">
        <template #description>
            <div>
                <p>Кол-во жалоб: {{ reports_count }}</p>
            </div>
            <hr>
            <p v-html="comment.text">
            </p>
        </template>
        <template #footer>
            <button @click="showModal = true">Удалить комментарий</button>
            <Link :href="route('panel.view.user', [comment.user.id])">Рассмотреть автора</Link>
        </template>
    </admin-view-card>

    <decline-modal :show="showModal" @close="showModal = false" route="panel.decline.comment" :id="comment.id"/>
</template>
<script setup>
import AdminViewCard from "@/Components/Admin/AdminViewCard.vue";
import PanelLayout from "@/Layouts/PanelLayout.vue";
import DeclineModal from "@/Components/Admin/DeclineModal.vue";
import {ref} from "vue";

defineOptions({
    layout: PanelLayout,
})

const showModal = ref(false);

const props = defineProps({
    comment: null,
    reports_count: null,
})
</script>
