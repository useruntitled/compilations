<template>
    <div class="bg-white rounded-xl">
        <header class="font-semibold text-lgg px-5 py-4">
            <p>Уведомления</p>
        </header>
        <hr />
        <main class="px-5 py-5">
            Здесь тоже динамически компонент уведомлений подгружаться должен.
            <div v-for="n in notifications" class="mb-5">
                <NotificationTemplate :notification="n"> </NotificationTemplate>
            </div>
        </main>
    </div>
</template>
<script setup>
import NotificationTemplate from "@/Components/Notifications/NotificationTemplate.vue";
import Base from "../shared/base.vue";

const props = defineProps({
    notifications: [],
});
</script>
<script>
export default {
    layout: Base,
};
</script>
