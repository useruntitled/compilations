<template>
    <InfiniteScrollContainer @load="handleLoadEvent">
        <Post v-for="post in posts" :post="post"></Post>
    </InfiniteScrollContainer>

    <div v-if="!posts.length" class="mt-20">
        <EmptyFeed></EmptyFeed>
    </div>
</template>
<script setup>
import { ref } from "vue";
import EmptyFeed from "@/Components/EmptyFeed.vue";
import InfiniteScrollContainer from "@/Components/InfiniteScrollContainer.vue";
import Post from "@/Components/Post.vue";
import Base from "@/Pages/shared/base.vue";
defineOptions({ layout: Base });

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
            if (res.data.length == 0) {
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
