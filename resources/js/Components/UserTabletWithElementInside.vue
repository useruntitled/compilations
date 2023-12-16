<template>
    <div class="m-1 ms-0">
        <Link :href="route('profile', [user.id])">
            <div class="flex">
                <img
                    class="rounded-full inline-block"
                    v-lazy="route('image.crop', [user.avatar, '40x40'])"
                    style="width: 40px; height: 40px"
                    alt=""
                />
                <div class="flex flex-col align-center ms-2 text-15 font-500">
                    <p class="font-medium">{{ user.name }}</p>
                    <p><slot></slot></p>
                </div>
            </div>
        </Link>
    </div>
</template>
<script>
export default {
    props: {
        user: null,
    },
};
</script>
