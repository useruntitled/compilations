<template>
    <Head>
        <title>Популярное</title>
    </Head>

    <InfiniteScrollContainer @load="handleLoadEvent()">
        <div v-for="post in posts">
            <Post :post="post"></Post>
        </div>
    </InfiniteScrollContainer>
    <div v-if="posts?.length == 0 && !isLoading" class="mt-20 mb-20">
        <EmptyFeed></EmptyFeed>
    </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import Post from "@/Components/Post.vue";
import EmptyFeed from "@/Components/EmptyFeed.vue";
import InfiniteScrollContainer from "@/Components/InfiniteScrollContainer.vue";
import {router, usePage} from "@inertiajs/vue3";
import MainLayout from "@/Layouts/MainLayout.vue";

defineOptions({ layout: MainLayout });

const props = defineProps({
    posts: null,
    close_window_token: null,
    close_auth_modal: false,
});

const page = usePage();

onMounted(() => {
    console.log(page);
    if(page.props?.close_window_token == props.close_window_token && props.close_window_token != null) {
        window.opener.postMessage('auth.window.closed', "*");
        window.close();
    }
    if(props.close_auth_modal) {
        const channel = new BroadcastChannel('auth.modal');
        channel.postMessage('close');
        window.close();
    }
})

const posts = ref(props.posts);

const current_page = ref(2);

const isEndOfFeed = ref(false);

const isLoading = ref(false);

const handleLoadEvent = async () => {
    if (!isLoading.value && !isEndOfFeed.value) {
        isLoading.value = true;
        await loadPosts();
        isLoading.value = false;
        current_page.value++;
    }
};

const loadPosts = async () => {
    await axios
        .get(route("posts.popular", [current_page.value]))
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            console.log(res);
            if (res.status == 200) {
                if (res.data.length == 0) {
                    isEndOfFeed.value = true;
                }

                res.data.forEach((post) => {
                    posts.value.push(post);
                });
                console.log(posts.value);
            }
        });
};
</script>