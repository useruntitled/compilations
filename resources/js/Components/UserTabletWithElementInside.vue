<template>
    <div class="m-1 ms-0 text-start">
        <Link :href="route('profile', [user.id])">
            <div class="flex items-start">
                <div class="flex items-end justify-end">
                    <img
                        class="rounded-full inline-block"
                        :src="route('image.crop', [user.avatar, '40x40'])"
                        style="width: 40px; height: 40px"
                        alt=""
                    />
                    <div
                        class="absolute rounded-full duration-200 transition-all p-[1px] text-white stroke-2"
                        :class="`bg-${iconColor}`"
                        v-if="icon != null"
                    >
                        <component
                            :is="icon"
                            class="mx-auto duration-200 relative"
                            :class="
                                isDropdown
                                    ? !isVisible
                                        ? 'w-2 h-2'
                                        : 'w-4 h-4'
                                    : 'w-4 h-4'
                            "
                            :style="translateStyle"
                        ></component>
                    </div>
                </div>
                <div class="flex flex-col align-center ms-2 text-15 font-500">
                    <p class="font-medium">{{ user.name }}</p>
                    <p><slot name="content" /></p>
                </div>
            </div>
        </Link>
    </div>
</template>
<script>
import IconArrowForwardUp from "./Icons/IconArrowForwardUp.vue";
import IconHeart from "./Icons/IconHeart.vue";

export default {
    props: {
        user: null,
        icon: null,
        iconColor: {
            default: "orange-500",
        },
        isDropdown: {
            default: false,
        },
    },
    data() {
        return {
            isVisible: false,
            translateStyle: "",
        };
    },

    mounted() {
        setTimeout(() => {
            this.isVisible = true;
        }, 20);
    },
    components: { IconArrowForwardUp, IconHeart },
};
</script>
