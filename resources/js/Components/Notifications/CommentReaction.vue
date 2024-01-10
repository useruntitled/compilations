<template>
    <div class="p-2 px-3">
        <main class="text-start">
            <!-- <UserTablet :user="notification.replyTo"></UserTablet>  -->
            <UserTabletWithElementInside
                :user="notification.byUser"
                :isDropdown="true"
            >
                <template #content>
                    <p class="text-xs">
                        Оценил ваш комментарий
                        <span class="text-xs"></span>
                    </p>
                </template>
            </UserTabletWithElementInside>
        </main>
    </div>
</template>
<script>
import UserTablet from "../UserTablet.vue";
import UserTabletWithElementInside from "../UserTabletWithElementInside.vue";

export default {
    props: {
        notification: null,
    },
    components: { UserTablet, UserTabletWithElementInside },
};
</script>
