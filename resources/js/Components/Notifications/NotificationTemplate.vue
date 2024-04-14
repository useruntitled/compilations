<template>
    <div>
        <user-tablet :user="notification.data.byUser">
            <template #header>
                <span class="font-medium">
                    <Link
                        :href="route('profile', [notification.data.byUser.id])"
                    >
                        {{ notification.data.byUser.name }}
                    </Link>
                </span>
                <span class="text-black font-medium text-sm">
                    <slot name="header"></slot>
                </span>
            </template>
            <template #content>
                <p class="text-sm font-regular">
                    <slot name="content"></slot>
                </p>
                <p class="text-xs opacity-80">
                    {{ notification.created_at }}
                </p>
            </template>
            <template #icon v-if="hasIcon">
                <circled-icon
                    :firstColor="iconFirstColor"
                    :secondColor="iconSecondColor"
                    size="5"
                >
                    <slot name="icon" />
                </circled-icon>
            </template>
        </user-tablet>
    </div>
</template>
<script>
import CircledIcon from "@/Components/Icons/CircledIcon.vue";
import UserTablet from "@/Components/User/UserTablet.vue";

export default {
    props: {
        notification: null,
        iconFirstColor: null,
        iconSecondColor: null,
        hasIcon: {
            required: false,
            default: true,
        },
    },
    components: { UserTablet, CircledIcon },
};
</script>
