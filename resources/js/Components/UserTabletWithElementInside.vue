<template>
    <div class="m-1 ms-0 text-start">
        <Link :href="route('profile', [user.id])">
            <div
                class="grid grid-rows-1 grid-flow-col items-start place-content-start"
            >
                <div class="flex items-end justify-start">
                    <div class="flex items-end justify-end">
                        <img
                            class="rounded-full inline-block"
                            :src="route('image.crop', [user.avatar, '100x100'])"
                            style="width: 40px; height: 40px"
                            alt=""
                        />
                        <div
                            class="absolute rounded-full duration-200 transition-all text-white stroke-2"
                            :class="'bg-' + iconColor"
                            v-if="icon != null"
                        >
                            <div class="text-white">
                                <component
                                    :is="icon"
                                    class="mx-auto duration-200 relative stroke-[2] fill-white p-1"
                                    :class="
                                        isDropdown
                                            ? !isVisible
                                                ? 'w-2 h-2'
                                                : 'w-5 h-5'
                                            : 'w-5 h-5'
                                    "
                                    :style="translateStyle"
                                ></component>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col align-center ms-2 text-15 font-500">
                    <p class="font-medium">{{ user.name }}</p>
                    <p><slot name="content" /></p>
                </div>
            </div>
            <div class="d-none text-primary bg-primary bg-dtfpr"></div>
        </Link>
    </div>
</template>
<script>
import IconArrowForwardUp from "./Icons/IconArrowForwardUp.vue";
import IconComments from "./Icons/IconComments.vue";
import IconHeart from "./Icons/IconHeart.vue";

export default {
    props: {
        user: null,
        icon: null,
        iconColor: {
            default: "primary",
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
    components: { IconArrowForwardUp, IconHeart, IconComments },
};
</script>
