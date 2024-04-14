<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <notification-template
                :notification="notification"
                iconFirstColor="red-500"
            >
                <template #content>
                    Оценил вашу подборку
                    <Link
                        :href="
                            route('post.redirect', [notification.data.post.id])
                        "
                    >
                        {{ notification.data.post.title }}
                    </Link>
                </template>
                <template #icon>
                    <IconHeartFilled />
                </template>
            </notification-template>
        </main>
    </div>
</template>
<script setup>
import IconHeartFilled from "../Icons/IconHeartFilled.vue";
import NotificationTemplate from "./NotificationTemplate.vue";

const props = defineProps({
    notification: null,
});
</script>
