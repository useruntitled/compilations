<template>
    <Head>
        <title>Последние подборки</title>
    </Head>
    <div v-if="posts.length == 0 && !isLoading" class="mt-20">
        <EmptyFeed></EmptyFeed>
    </div>

    <div v-for="post in posts">
        <Post :post="post"></Post>
    </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import Post from "@/Components/Post.vue";
import Base from "../shared/base.vue";
import EmptyFeed from "@/Components/EmptyFeed.vue";

defineOptions({ layout: Base });

const props = defineProps({
    posts: null,
});

const posts = ref(props.posts);

const current_page = ref(2);

const isLoading = ref(true);

const loadPosts = async () => {
    await axios
        .get(route("posts.popular", [current_page.value]))
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            console.log(res);
            if (res.status == 200) {
                posts.value = res.data;
                isLoading.value = false;
            }
        });
};

onMounted(async () => {
    await loadPosts();
});
</script>
