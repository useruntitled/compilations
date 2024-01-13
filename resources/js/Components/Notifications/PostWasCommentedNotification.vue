<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <div v-if="solo">
                <NotificationTemplate :notification="notifications[0]">
                    <template #content>
                        Прокомментировал вашу подборку
                        {{ notifications[0].data.post.title }}
                    </template>
                    <template #icon>
                        <IconComments></IconComments>
                    </template>
                </NotificationTemplate>
            </div>
            <div v-else>
                <NotificationTemplate :notification="notifications[0]">
                    <template #header>
                        и ещё {{ countUniqueUsers }} чел.
                    </template>
                    <template #content>
                        Прокомментировали вашу подборку
                        {{ notifications[0].data.post.title }}
                    </template>
                    <template #icon>
                        <IconComments></IconComments>
                    </template>
                </NotificationTemplate>
            </div>
        </main>
    </div>
</template>
<script>
import CircledIcon from "../Icons/CircledIcon.vue";
import IconArrowForwardUp from "../Icons/IconArrowForwardUp.vue";
import IconComments from "../Icons/IconComments.vue";
import IconHeart from "../Icons/IconHeart.vue";
import UserTablet from "../UserTablet.vue";
import UserTabletWithElementInside from "../UserTabletWithElementInside.vue";
import NotificationTemplate from "./NotificationTemplate.vue";

export default {
    props: {
        notifications: null,
        count: null,
    },
    computed: {
        solo() {
            return this.count == 1;
        },
        grouped() {},
        countUniqueUsers() {
            let array = [];
            this.notifications.forEach((n) => {
                array.unshift(n.data.byUser.id);
            });
            return new Set(array).size;
        },
    },

    components: {
        UserTabletWithElementInside,
        IconArrowForwardUp,
        UserTablet,
        IconHeart,
        CircledIcon,
        IconComments,
        NotificationTemplate,
    },
};
</script>
