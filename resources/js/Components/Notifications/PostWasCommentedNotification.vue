<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <NotificationTemplate :notification="notification">
                <template #content>
                    Прокомментировал вашу подборку
                    {{ notification.data.post.title }}
                </template>
                <template #icon>
                    <IconComments></IconComments>
                </template>
            </NotificationTemplate>
        </main>
    </div>
</template>
<script setup>
import IconComments from "../Icons/IconComments.vue";
import NotificationTemplate from "./NotificationTemplate.vue";

const props = defineProps({
    notification: null,
});
</script>
