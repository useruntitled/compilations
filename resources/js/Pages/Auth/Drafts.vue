<template>
    <Head>
        <title>
            Черновики
        </title>
    </Head>
    <div v-if="!drafts.length" class="mt-20">
        <EmptyFeed></EmptyFeed>
    </div>
    <div class="space-y-5">
        <Post v-for="post in drafts" :post="post"></Post>
    </div>
</template>
<script setup>
import Post from '@/Components/Post/Post.vue';
import EmptyFeed from "@/Components/EmptyFeed.vue";
import MainLayout from "@/Layouts/MainLayout.vue";
defineOptions({
    layout: MainLayout,
})

const props = defineProps({
    drafts: null,
});

</script>
