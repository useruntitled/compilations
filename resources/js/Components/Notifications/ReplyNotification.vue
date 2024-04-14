<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <notification-template :notification="notification">
                <template #content>
                    <Link
                        :href="
                            route('comment.redirect', [notification.data.id])
                        "
                    >
                        Ответил на ваш комментарий
                        <span
                            v-html="notification.data.parrentComment.text"
                        ></span>
                    </Link>
                </template>
                <template #icon>
                    <IconCommentsFilled />
                </template>
            </notification-template>
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
