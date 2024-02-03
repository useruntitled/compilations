<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <div v-if="solo">
                <NotificationTemplate
                    :notification="notifications[0]"
                    iconFirstColor="red-500"
                >
                    <template #content>
                        <Link
                            :href="
                                route('comment.redirect', [
                                    notifications[0].data.comment.id,
                                ])
                            "
                        >
                            Оценил ваш комментарий
                            {{ notifications[0].data.comment.text }}
                        </Link>
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
                        <Link
                            :href="
                                route(
                                    'comment.redirect',
                                    notifications[0].data.comment.id
                                )
                            "
                        >
                            Оценили ваш комментарий
                            {{ notifications[0].data.comment.text }}
                        </Link>
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
import IconHeart from "../Icons/IconHeart.vue";
import NotificationTemplate from "./NotificationTemplate.vue";

export default {
    props: {
        notifications: null,
        count: null,
    },
    computed: {
        solo() {
            return this.notifications.length == 1;
        },
    },
    components: { NotificationTemplate, IconHeart },
};
</script>
