<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <div v-if="countUniqueUsers">
                <NotificationTemplate :notification="notifications[0]">
                    <template #content>
                        <Link
                            :href="
                                route('comment.redirect', [
                                    notifications[0].data.id,
                                ])
                            "
                        >
                            Ответил на ваш комментарий
                            {{ notifications[0].data.parrentComment.text }}
                        </Link>
                    </template>
                    <template #icon>
                        <IconCommentsFilled></IconCommentsFilled>
                    </template>
                </NotificationTemplate>
            </div>
            <div v-else>
                <NotificationTemplate :notification="notifications[0]">
                    <template #header>
                        и ещё {{ countUniqueUsers }} чел.
                    </template>
                    <template #content>
                        Ответили на ваш комментарий
                        {{ notifications[0].data.parrentComment.text }}
                    </template>
                    <template #icon>
                        <IconCommentsFilled></IconCommentsFilled>
                    </template>
                </NotificationTemplate>
            </div>
        </main>
    </div>
</template>
<script>
import IconArrowForwardUp from "../Icons/IconArrowForwardUp.vue";
import IconComments from "../Icons/IconComments.vue";
import IconCommentsFilled from "../Icons/IconCommentsFilled.vue";
import UserTablet from "../UserTablet.vue";
import UserTabletWithElementInside from "../UserTabletWithElementInside.vue";
import NotificationTemplate from "./NotificationTemplate.vue";

export default {
    props: {
        notifications: null,
        count: null,
    },
    computed: {
        solo() {},
        countUniqueUsers() {
            let array = [];
            this.notifications.forEach((n) => {
                array.unshift(n.data.byUser.id);
            });
            return new Set(array).size;
        },
    },

    components: {
        UserTablet,
        UserTabletWithElementInside,
        IconArrowForwardUp,
        NotificationTemplate,
        IconComments,
        IconCommentsFilled,
    },
};
</script>
