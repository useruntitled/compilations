<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <NotificationTemplate
                :notification="notification"
                iconFirstColor="red-500"
            >
                <template #content>
                    Оценил вашу подборку
                    {{ notification.data.post.title }}
                </template>
                <template #icon>
                    <IconHeart></IconHeart>
                </template>
            </NotificationTemplate>
        </main>
    </div>
</template>
<script setup>
import IconHeart from "../Icons/IconHeart.vue";
import NotificationTemplate from "./NotificationTemplate.vue";

const props = defineProps({
    notification: null,
});
</script>
