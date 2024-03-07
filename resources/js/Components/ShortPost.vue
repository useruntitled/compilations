<template>
    <div class="flex items-center ">
        <Link :href="route('post', [post.id, post.slug])">
            <p class="text-17px hover:opacity-70 break-all">{{ post.title }}</p>
        </Link>
    </div>
</template>
<script setup>
const props = defineProps({
    post: null,
})
</script>
