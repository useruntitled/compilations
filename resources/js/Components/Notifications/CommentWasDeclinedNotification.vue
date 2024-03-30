<template>
    <div class="p-2 px-3">
        <main class="text-start">

            <p>Ваш комментарий был удалён модератором</p>
            <p>Причина: {{ notification.data.reason }}</p>
        </main>
    </div>
</template>
<script setup>
import IconCommentsFilled from "@/Components/Icons/IconCommentsFilled.vue";
import NotificationTemplate from "@/Components/Notifications/NotificationTemplate.vue";

const props = defineProps({
    notification: null,
})
</script>
