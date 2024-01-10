<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <div v-if="solo">
                <UserTabletWithElementInside
                    :user="notifications[0].data.byUser"
                    icon="IconArrowForwardUp"
                    :isDropdown="true"
                >
                    <template #content>
                        <p class="text-xs">Прокомментировал вашу подборку</p>
                        <p class="text-xs">
                            {{ notifications[0].created_at }}
                        </p>
                    </template>
                </UserTabletWithElementInside>
            </div>
            <div v-else></div>
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
