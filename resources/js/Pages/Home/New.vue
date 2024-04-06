<template>
    <Head>
        <title>Последние подборки</title>
    </Head>

    <mobile-header-nav />
    <infinite-scroll-container @load="handleLoadEvent()">
        <div v-for="post in posts">
            <Post :post="post"></Post>
        </div>
    </infinite-scroll-container>
    <div v-if="posts.length == 0 && !isLoading" class="mt-20 mb-20">
        <EmptyFeed />
    </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import Post from "@/Components/Post/Post.vue";
import EmptyFeed from "@/Components/EmptyFeed.vue";
import InfiniteScrollContainer from "@/Components/InfiniteScrollContainer.vue";
import MainLayout from "@/Layouts/MainLayout.vue";
import MobileHeaderNav from "@/Components/Mobile/MobileHeaderNav.vue";

defineOptions({ layout: MainLayout });

const props = defineProps({
    posts: null,
});

const posts = ref(props.posts);

const current_page = ref(2);

const isEndOfFeed = ref(false);

const isLoading = ref(false);

const handleLoadEvent = async () => {
    if (isLoading.value == false && isEndOfFeed.value == false) {
        isLoading.value = true;
        await loadPosts();
    }
};

const loadPosts = async () => {
    await axios
        .get(route("posts.new", [current_page.value]))
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            console.log(res);
            if (res.status == 200) {
                if (res.data.length == 0) {
                    isEndOfFeed.value = true;
                } else {
                    current_page.value++;
                }

                res.data.forEach((post) => {
                    posts.value.push(post);
                });
                console.log(posts.value);
                isLoading.value = false;
            }
        });
};
</script>
