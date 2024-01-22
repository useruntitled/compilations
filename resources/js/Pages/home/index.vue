<template>
    <Head>
        <title>Последние подборки</title>
    </Head>
    <div v-if="posts.length == 0" class="mt-20">
        <EmptyFeed></EmptyFeed>
    </div>
    <div v-for="post in posts">
        <!-- <Compilation :post="post"></Compilation> -->
        <Post :post="post"></Post>
    </div>
    <!-- <div class="mx-auto flex justify-center gap-5 flex-wrap">
            <div v-for="post in posts" :key="post.id" class="inline-block">
                <Compilation :post="post"></Compilation>
            </div>
        </div> -->
</template>
<script>
import Compilation from "@/Components/Compilation.vue";
import Post from "@/Components/Post.vue";
import Base from "../shared/base.vue";
import EmptyFeed from "@/Components/EmptyFeed.vue";
export default {
    layout: Base,
    props: {
        posts: null,
    },
    components: { Compilation, Post, EmptyFeed },
};
</script>
