<template>
    <div class="bg-white rounded-xl">
        <header class="text-lgg px-5 py-4">
            <p class="font-medium">Уведомления</p>
        </header>
        <hr />
        <main class="px-5 py-5">
            <InfiniteScrollContainer @load="handleLoadEvent()">
                <div v-for="n in notifications">
                    <component
                        :notification="n"
                        :is="components[n.type]"
                    ></component>
                </div>
            </InfiniteScrollContainer>
        </main>
    </div>
    <div v-if="!notifications.length">
        <EmptyFeed></EmptyFeed>
    </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import Base from "../shared/base.vue";
import CommentUpNotification from "@/Components/Notifications/CommentUpNotification.vue";
import PostWasCommentedNotification from "@/Components/Notifications/PostWasCommentedNotification.vue";
import ReplyNotification from "@/Components/Notifications/ReplyNotification.vue";
import PostUpNotification from "@/Components/Notifications/PostUpNotification.vue";
import InfiniteScrollContainer from "@/Components/InfiniteScrollContainer.vue";
import axios from "axios";
import EmptyFeed from "@/Components/EmptyFeed.vue";

defineOptions({ layout: Base });

const props = defineProps({
    notifications: null,
});

const components = reactive({
    "App\\Notifications\\CommentUpNotification": CommentUpNotification,
    "App\\Notifications\\PostWasCommentedNotification":
        PostWasCommentedNotification,
    "App\\Notifications\\ReplyNotification": ReplyNotification,
    "App\\Notifications\\PostUpNotification": PostUpNotification,
});

const currentPage = ref(2);

const isLoading = ref(false);

const isEnd = ref(false);

const loadNotifications = async () => {
    await axios
        .get(route("me.notifications.get", [currentPage.value]))
        .then((res) => {
            if (res.data.length == 0) {
                isEnd.value = true;
            } else {
                res.data.forEach((n) => {
                    props.notifications.push(n);
                });
            }
        });
};

const handleLoadEvent = async () => {
    if (!isEnd.value && !isLoading.value) {
        isLoading.value = true;
        await loadNotifications();
        currentPage.value += 1;
        isLoading.value = false;
    }
};
</script>
