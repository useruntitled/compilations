<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <div v-if="solo">
                <NotificationTemplate
                    :notification="notifications[0]"
                    iconFirstColor="red-500"
                >
                    <template #content>
                        Оценил вашу подборку
                        {{ notifications[0].data.post.title }}
                    </template>
                    <template #icon>
                        <IconHeart></IconHeart>
                    </template>
                </NotificationTemplate>
            </div>
            <div v-else>
                <NotificationTemplate
                    :notification="notifications[0]"
                    iconFirstColor="red-500"
                >
                    <template #header> И еще {{ count }} чел. </template>
                    <template #content>
                        Оценили вашу подборку
                        {{ notifications[0].data.post.title }}
                    </template>
                    <template #icon>
                        <IconHeart></IconHeart>
                    </template>
                </NotificationTemplate>
            </div>
        </main>
    </div>
</template>
<script>
import IconArrowForwardUp from "../Icons/IconArrowForwardUp.vue";
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
    },

    components: {
        UserTablet,
        UserTabletWithElementInside,
        IconArrowForwardUp,
        NotificationTemplate,
        IconHeart,
    },
};
</script>
