<template>
    <Head>
        <title>Последние подборки</title>
    </Head>
    <div v-if="posts.length == 0" class="shadow p-5 rounded-lg mt-5">
        <p class="text-sm">Пока нет подборок..</p>
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
export default {
    layout: Base,
    props: {
        posts: null,
    },
    components: { Compilation, Post },
};
</script>
