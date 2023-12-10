<template>
    <div class="m-1 ms-0" v-if="!avatarOnly">
        <Link v-if="mode != 'no action'" :href="route('profile', [user.id])">
            <img
                class="rounded-full inline-block"
                v-lazy="route('image.crop', [user.avatar, '40x40'])"
                style="width: 40px; height: 40px"
                alt=""
            />
            <span class="text-sm text-slate-900 ms-2 hover:text-slate-600">{{
                user.name
            }}</span>
        </Link>
        <div v-else>
            <img
                class="rounded-full inline-block"
                v-lazy="route('image.crop', [user.avatar, '40x40'])"
                style="width: 40px; height: 40px"
                alt=""
            />
            <span class="text-sm text-slate-900 ms-2 hover:text-slate-600">{{
                user.name
            }}</span>
        </div>
    </div>
    <div v-else>
        <img
            class="rounded-full inline-block hover:opacity-80"
            v-lazy="route('image.crop', [user.avatar, '40x40'])"
            style="width: 40px; height: 40px"
            alt=""
        />
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
