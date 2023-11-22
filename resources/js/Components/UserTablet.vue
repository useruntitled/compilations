<template>
    <div class="m-1 ms-0">
        <img
            class="rounded-full inline-block"
            v-lazy="route('image.crop', [user.avatar, '40x40'])"
            style="width: 40px; height: 40px"
            alt=""
        />
        <span class="text-sm text-slate-900 ms-2">{{ user.name }}</span>
    </div>
</template>
<script>
export default {
    props: {
        user: null,
    },
};
</script>
