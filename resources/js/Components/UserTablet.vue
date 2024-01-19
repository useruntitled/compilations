<template>
    <div>
        <header
            class="grid grid-rows-1 grid-flow-col items-start place-content-start"
        >
            <div class="flex items-end justify-end">
                <img
                    class="rounded-full inline-block"
                    :src="route('im', [user.avatar, '100x100'])"
                    style="width: 40px; height: 40px"
                    alt=""
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

export default {
    props: {
        avatarOnly: false,
        user: null,
        mode: null,
    },
    components: { Link },
};
</script>
