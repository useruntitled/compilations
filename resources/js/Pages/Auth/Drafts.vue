<template>
    <div v-if="!drafts.length" class="mt-20">
        <EmptyFeed></EmptyFeed>
    </div>
    <div class="space-y-5">
        <Post v-for="post in drafts" :post="post"></Post>
    </div>
</template>
<script setup>
import base from '@/Pages/shared/base.vue';
import Post from '@/Components/Post.vue';
import EmptyFeed from "@/Components/EmptyFeed.vue";
defineOptions({
    layout: base,
})

const props = defineProps({
    drafts: null,
});

</script>
