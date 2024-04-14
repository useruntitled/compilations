<template>
    <div>
        <header
            class="grid grid-rows-1 grid-flow-col items-start place-content-start"
        >
            <div class="flex items-end justify-end">
                <lazy-media
                    width="40"
                    height="40"
                    rounded="full"
                    border="gray"
                    :media="user.avatar"
                />
                <div class="absolute">
                    <slot name="icon" />
                </div>
            </div>
            <div class="flex flex-col ms-2">
                <div>
                    <slot name="header" />
                </div>
                <main>
                    <slot name="content" />
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
    components: { LazyMedia, Link },
};
</script>
