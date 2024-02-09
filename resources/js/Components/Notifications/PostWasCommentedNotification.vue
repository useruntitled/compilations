<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <NotificationTemplate :notification="notification">
                <template #content>
                    Прокомментировал вашу подборку
                    {{ notification.data.post.title }}
                </template>
                <template #icon>
                    <IconCommentsFilled></IconCommentsFilled>
                </template>
            </NotificationTemplate>
        </main>
    </div>
</template>
<script setup>
import IconCommentsFilled from "../Icons/IconCommentsFilled.vue";
import NotificationTemplate from "./NotificationTemplate.vue";

const props = defineProps({
    notification: null,
});
</script>
