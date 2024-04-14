<template>
    <div class="m-1 ms-0 text-start">
        <Link :href="route('profile', [user.id])">
            <div
                class="grid grid-rows-1 grid-flow-col items-start place-content-start"
            >
                <div class="flex items-end justify-start">
                    <div class="flex items-end justify-end">
                        <LazyMedia
                            :media="user.avatar"
                            rounded="full"
                            class="inline-block hover:brightness-110 object-cover border-2"
                            width="40"
                            height="40"
                        />
                        <div
                            class="absolute rounded-full duration-200 transition-all text-white stroke-2"
                            :class="'bg-' + iconColor"
                            v-if="icon != null"
                        >
                            <div class="text-white">
                                <Component
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
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col align-center ms-2 text-15 font-500">
                    <p class="font-medium opacity-80">{{ user.name }}</p>
                    <p>
                        <slot name="content" />
                    </p>
                </div>
            </div>
            <div class="d-none text-primary bg-primary bg-dtfpr"></div>
        </Link>
    </div>
</template>
<script>
import IconArrowForwardUp from "../Icons/IconArrowForwardUp.vue";
import IconComments from "../Icons/IconComments.vue";
import IconHeart from "../Icons/IconHeart.vue";
import LazyImage from "../Media/LazyImage.vue";
import LazyMedia from "@/Components/Media/LazyMedia.vue";

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
    components: {
        LazyMedia,
        IconArrowForwardUp,
        IconHeart,
        IconComments,
        LazyImage,
    },
};
</script>
