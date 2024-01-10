<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <!-- <UserTablet :user="notification.replyTo"></UserTablet>  -->
            <div v-if="solo">
                <UserTabletWithElementInside
                    :user="notifications[0].data.byUser"
                    :isDropdown="true"
                    icon="IconArrowForwardUp"
                >
                    <template #content>
                        <p class="text-xs">
                            Ответил на ваш комментарий
                            <span class="text-xs"></span>
                        </p>
                    </template>
                </UserTabletWithElementInside>
            </div>
            <div v-else>
                <UserTabletWithElementInside
                    :user="notifications[0].data.byUser"
                    :isDropdown="true"
                    icon="IconArrowForwardUp"
                >
                    <template #content>
                        <p class="text-xs">
                            И ещё {{ count }} ответили на ваш комментарий
                        </p>
                        <p class="text-xs">
                            {{ notifications[0].created_at }}
                        </p>
                    </template>
                </UserTabletWithElementInside>
            </div>
        </main>
    </div>
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
        solo() {
            return this.count == 1;
        },
    },

    components: { UserTablet, UserTabletWithElementInside, IconArrowForwardUp },
};
</script>
