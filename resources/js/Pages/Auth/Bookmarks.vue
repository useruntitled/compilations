<template>
    <Head>
        <title>Закладки</title>
    </Head>
    <MobileHeaderNav />

    <infinite-scroll-container @load="handleLoadEvent">
        <Post v-for="post in posts" :post="post" />
    </infinite-scroll-container>

    <div v-if="!posts.length" class="mt-20">
        <EmptyFeed />
    </div>
</template>
<script setup>
import { ref } from "vue";
import EmptyFeed from "@/Components/Feed/EmptyFeed.vue";
import InfiniteScrollContainer from "@/Components/Feed/InfiniteScrollContainer.vue";
import Post from "@/Components/Post/Post.vue";
import MainLayout from "@/Layouts/MainLayout.vue";
import MobileHeaderNav from "@/Components/Mobile/MobileHeaderNav.vue";

defineOptions({ layout: MainLayout });

const props = defineProps({
    posts: null,
});

const currentPage = ref(2);

const isEnd = ref(false);

const isLoading = ref(false);

const loadPosts = async () => {
    await axios
        .get(route("me.bookmarks.get", [currentPage.value]))
        .then((res) => {
            console.log(res);
            if (res.data.length === 0) {
                isEnd.value = true;
            } else {
                res.data.forEach((post) => {
                    props.posts.push(post);
                });
            }
        });
};

const handleLoadEvent = async () => {
    if (!isLoading.value && !isEnd.value) {
        isLoading.value = true;
        await loadPosts();
        isLoading.value = false;
    }
};
</script>
