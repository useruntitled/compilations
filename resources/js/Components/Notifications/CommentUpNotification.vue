<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <NotificationTemplate
                :notification="notification"
                iconFirstColor="red-500"
            >
                <template #content>
                    <Link
                        :href="
                            route('comment.redirect', [
                                notification.data.comment.id,
                            ])
                        "
                    >
                        Оценил ваш комментарий
                        <span v-html="notification.data.comment.text"></span>
                    </Link>
                </template>
                <template #icon>
                    <!-- <IconHeart></IconHeart> -->
                    <IconHeartFilled></IconHeartFilled>
                </template>
            </NotificationTemplate>
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
