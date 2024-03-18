<template>
    <Head>
        <title>{{ post.title }}</title>
        <meta name="description" :content="post.description + (post.meta_description ?? '')">
        <link rel="canonical" :href="route('post', [post.id, post.slug])"/>
    </Head>
    <post-template :post="post">
        <div ref="films_block">
            <div v-for="(film, index) in post.films" class="sm:px-3 xs:px-1" >
                <Film :film="film"></Film>
            </div>
        </div>
    </post-template>
    <section>
        <Comments :post="post" @load="footerFeedIsLoaded = true"></Comments>
    </section>
    <section
        class="mt-5 bg-white rounded-xl"
        v-if="footerFeedIsLoaded && footerFeedPosts.length > 0"
    >
        <div class="border-b-2 px-5 py-4 font-medium">
            Возможно вам будет интересно
        </div>
        <div class="space-y-5 bg-bck">
            <InfiniteScrollContainer @load="handleLoadFooterEvent()">
                <Post
                    v-for="(post, index) in footerFeedPosts"
                    :post="post"
                    :class="index == 0 ? 'rounded-t-none' : ''"
                ></Post>
            </InfiniteScrollContainer>
        </div>
    </section>
</template>
<script setup>
import { onMounted, ref, watch, nextTick } from "vue";
import Film from "@/Components/Film.vue";
import Comments from "@/Components/Comments/Comments.vue";
import axios from "axios";
import Post from "@/Components/Post/Post.vue";
import InfiniteScrollContainer from "@/Components/InfiniteScrollContainer.vue";
import MainLayout from "@/Layouts/MainLayout.vue";
import PostTemplate from "@/Components/Post/PostTemplate.vue";

defineOptions({ layout: MainLayout });

const films_block = ref(null);

const footerFeedIsLoaded = ref(false);

watch(footerFeedIsLoaded, (newValue) => {
    if (newValue == true) {
        handleLoadFooterEvent();
    }
});

const footerFeedPage = ref(1);

const footerFeedPosts = ref([]);

const footerFeedIsLoading = ref(false);
const footerFeedIsEnd = ref(false);

const handleLoadFooterEvent = async () => {
    if (!footerFeedIsLoading.value && !footerFeedIsEnd.value) {
        footerFeedIsLoading.value = true;
        await loadFooterFeed();
        footerFeedIsLoading.value = false;
        footerFeedPage.value++;
    }
};

const loadFooterFeed = async () => {
    axios
        .get(route("posts.random", [footerFeedPage.value, props.post.id]))
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            console.log(res);
            if (res.status == 200) {
                if (res.data.length == 0) {
                    footerFeedIsEnd.value = true;
                }
                res.data.forEach((post) => {
                    footerFeedPosts.value.push(post);
                });
            }
        });
};

const props = defineProps({
    post: null,
});

onMounted(() => {
    if (new URL(window.location.href).searchParams.has("films")) {
        nextTick(() => {
            films_block.value.scrollIntoView();
        });
    }
});
</script>
