<template>
    <div>
        <header
            class="grid grid-rows-1 grid-flow-col items-start place-content-start"
        >
            <div class="flex items-end justify-end">
                <!--                <img-->
                <!--                    class="rounded-full inline-block border-bck border-2"-->
                <!--                    :src="route('im', [user.avatar, '100'])"-->
                <!--                    style="width: 40px; height: 40px"-->
                <!--                    alt=""-->
                <!--                />-->
                <lazy-media
                    width="40"
                    height="40"
                    rounded="full"
                    border="gray"
                    :media="user.avatar"
                />
                <div class="absolute">
                    <slot name="icon"></slot>
                </div>
            </div>
            <div class="flex flex-col ms-2">
                <div>
                    <slot name="header"></slot>
                </div>
                <main>
                    <slot name="content"></slot>
                </main>
            </div>
        </header>
    </div>
</template>
<script>
import { Link } from "@inertiajs/vue3";
import LazyMedia from "@/Components/Media/LazyMedia.vue";

export default {
    props: {
        avatarOnly: false,
        user: null,
        mode: null,
    },
    components: {LazyMedia, Link},
};
</script>
