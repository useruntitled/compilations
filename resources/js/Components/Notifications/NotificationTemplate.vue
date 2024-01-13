<template>
    <div>
        <UserTablet :user="notification.data.byUser">
            <template #header>
                <span class="font-semibold">
                    {{ notification.data.byUser.name }}
                </span>
                <span class="text-black font-semibold text-sm">
                    <slot name="header"></slot>
                </span>
            </template>
            <template #content>
                <p class="text-sm font-semibold">
                    <slot name="content"></slot>
                </p>
                <p class="text-xs opacity-80">
                    {{ notification.created_at }}
                </p>
            </template>
            <template #icon>
                <CircledIcon
                    :firstColor="iconFirstColor"
                    :secondColor="iconSecondColor"
                    size="5"
                >
                    <slot name="icon"></slot>
                </CircledIcon>
            </template>
        </UserTablet>
    </div>
</template>
<script>
import CircledIcon from "../Icons/CircledIcon.vue";
import UserTablet from "../UserTablet.vue";

export default {
    props: {
        notification: null,
        iconFirstColor: null,
        iconSecondColor: null,
    },
    components: { UserTablet, CircledIcon },
};
</script>
