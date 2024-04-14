<template>
    <dropdown width="350" v-if="$page.props.auth.user">
        <template #trigger v-if="!unreadNotificationsCount">
            <div class="px-3" @click="open()">
                <btn-icon class="flex items-center text-black">
                    <IconBell class="w-[28px] h-[28px] stroke-[2px]" />
                </btn-icon>
            </div>
        </template>
        <template #trigger v-else>
            <div @click="open()" class="px-3">
                <BtnIcon>
                    <div class="flex items-center text-black">
                        <IconBell
                            class="w-[28px] h-[28px] stroke-[2px]"
                        ></IconBell>
                        <span
                            class="absolute ms-3 mt-3 px-[5px] text-xs rounded-full bg-red-500 text-white"
                            >{{ unreadNotificationsCount }}</span
                        >
                    </div>
                </BtnIcon>
            </div>
        </template>
        <template #content>
            <p class="text-start font-medium p-5 py-2">Уведомления</p>
            <div v-if="notifications?.length">
                <div v-for="(notification, key) in notifications">
                    <component
                        :is="notificationsList[notification.type]"
                        :notification="notification"
                    ></component>
                </div>
                <div v-if="notifications.length >= 5">
                    <hr />
                    <Link :href="route('notifications')">
                        <button class="p-[5px] text-dtfpr">
                            Все уведомления
                        </button>
                    </Link>
                </div>
            </div>
            <div
                v-if="notifications?.length == 0 && notificationsIsLoaded"
                class="p-5"
            >
                <p class="text-xl font-medium">Уведомлений пока нет</p>
                <p class="text-secondary mt-5">
                    Делайте хорошие подборки и пишите комментарии, и здесь
                    станет не так пусто!
                </p>
            </div>
            <div v-if="!notificationsIsLoaded" class="p-5">
                <div class="flex justify-center">
                    <AnimationLoader />
                </div>
            </div>
        </template>
    </dropdown>
</template>
<script setup>
import { ref, onMounted } from "vue";
import BtnIcon from "../Buttons/BtnIcon.vue";
import Dropdown from "./Dropdown.vue";
import IconBell from "../Icons/IconBell.vue";
import AnimationLoader from "../Animations/AnimationLoader.vue";
import PostWasCommentedNotification from "@/Components/Notifications/PostWasCommentedNotification.vue";
import ReplyNotification from "../Notifications/ReplyNotification.vue";
import PostUpNotification from "../Notifications/PostUpNotification.vue";
import CommentUpNotification from "../Notifications/CommentUpNotification.vue";
import { usePage } from "@inertiajs/vue3";
import PostWasDeclinedNotification from "@/Components/Notifications/PostWasDeclinedNotification.vue";
import CommentWasDeclinedNotification from "@/Components/Notifications/CommentWasDeclinedNotification.vue";
import { notificationApi } from "@/api/notificationApi.js";

const page = usePage();

const notificationsList = {
    "App\\Notifications\\PostWasCommentedNotification":
        PostWasCommentedNotification,
    "App\\Notifications\\ReplyNotification": ReplyNotification,
    "App\\Notifications\\PostUpNotification": PostUpNotification,
    "App\\Notifications\\CommentUpNotification": CommentUpNotification,
    "App\\Notifications\\PostWasDeclinedNotification":
        PostWasDeclinedNotification,
    "App\\Notifications\\CommentWasDeclinedNotification":
        CommentWasDeclinedNotification,
};

const unreadNotificationsCount = ref(
    page.props.auth.user.unreadNotifications_count ?? 0,
);

const notifications = ref([]);

const notificationsIsLoaded = ref(false);

const notificationsHaveBeenRead = ref(false);

const open = async () => {
    if (!notificationsHaveBeenRead.value) {
        await notificationApi.get((res) => (notifications.value = res.data));
        notificationsIsLoaded.value = true;
        await notificationApi.markAsRead(
            (res) => (notificationsHaveBeenRead.value = true),
        );
        unreadNotificationsCount.value = 0;
    }
};

const updateNotifications = (data) => {
    console.log(data);
    unreadNotificationsCount.value = data.unreadNotifications_count;
    notificationsHaveBeenRead.value = false;
};

onMounted(() => {
    notificationApi.listen(page.props.auth.user.id, updateNotifications);
});
</script>
