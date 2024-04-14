<template>
    <infinite-scroll-container @load="handleLoadEvent()">
        <div class="rounded-xl">
            <div>
                <div v-for="post in posts" :key="post.id">
                    <Post :post="post"></Post>
                    <!-- {{ post }} -->
                </div>
            </div>
        </div>
    </infinite-scroll-container>

    <div class="mt-20" v-if="!posts.length">
        <EmptyFeed />
    </div>
</template>
<script setup>
import { ref } from "vue";
import PageProfileLayout from "@/Layouts/PageProfileLayout.vue";
import EmptyFeed from "@/Components/Feed/EmptyFeed.vue";
import Post from "@/Components/Post/Post.vue";
import InfiniteScrollContainer from "@/Components/Feed/InfiniteScrollContainer.vue";
import axios from "axios";
import MainLayout from "@/Layouts/MainLayout.vue";

defineOptions({ layout: [MainLayout, PageProfileLayout] });

const props = defineProps({
    user: null,
    posts: null,
});

const isLoading = ref(false);

const currentPage = ref(2);

const isEnd = ref(false);

const loadPosts = async () => {
    await axios
        .get(route("profile.posts.get", [props.user.id, currentPage.value]))
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            console.log(res);
            if (res.status == 200) {
                if (res.data.length == 0) isEnd.value = true;
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
        currentPage.value += 1;
        isLoading.value = false;
    }
};
</script>
