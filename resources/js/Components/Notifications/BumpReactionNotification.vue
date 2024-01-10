<template>
    <Link :href="route('home')">
        <div class="p-2 px-3">
            <main class="text-start">
                <!-- <UserTablet :user="notification.replyTo"></UserTablet>  -->
                <div v-if="solo">
                    <UserTabletWithElementInside
                        :user="notifications[0].data.byUser"
                        :isDropdown="true"
                        icon="IconHeart"
                        iconColor="red-500"
                    >
                        <template #content>
                            <p class="text-xs">Оценил {{ reaction_to_type }}</p>
                            <p class="text-xs">
                                {{ notifications[0].created_at }}
                            </p>
                        </template>
                    </UserTabletWithElementInside>
                </div>
                <div v-else>
                    <UserTabletWithElementInside
                        :user="notifications[0].data.byUser"
                        :isDropdown="true"
                        icon="IconHeart"
                        iconColor="red-500"
                    >
                        <template #content>
                            <p class="text-xs">
                                И ещё {{ count }} оценили {{ reaction_to_type }}
                                <span class="text-xs"></span>
                            </p>
                        </template>
                    </UserTabletWithElementInside>
                </div>
            </main>
        </div>
    </Link>
</template>
<script>
import IconArrowForwardUp from "../Icons/IconArrowForwardUp.vue";
import UserTablet from "../UserTablet.vue";
import UserTabletWithElementInside from "../UserTabletWithElementInside.vue";

export default {
    props: {
        notifications: null,
        count: null,
    },
    computed: {
        reaction_to_type() {
            switch (this.notifications[0].data.type) {
                case "Post":
                    return "вашу подборку";
                case "Comment":
                    return "ваш комментарий";
                default:
                    "ваш комментарий";
            }
        },
        solo() {
            return this.count == 1;
        },
    },
    components: { UserTablet, UserTabletWithElementInside, IconArrowForwardUp },
};
</script>
