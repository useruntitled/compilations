<template>
    <Head>
        <title>Подборки фильмов от сообщества</title>
        <meta
            name="description"
            content="Films Compilations By Community. Здесь делают подборки фильмов."
        />
    </Head>

    <mobile-header-nav />

    <div class="xs:w-screen sm:max-w-screen-sm">
        <div class="bg-white rounded-xl mb-5 space-y-4 px-4 py-4">
            <ShortPost v-for="post in most_commented_posts" :post="post" />
            <button
                class="font-medium text-17px hover:opacity-80"
                @click="loadMostCommented"
            >
                <div v-if="!mostCommentedIsLoading" class="flex items-center">
                    <div class="font-medium">Показать ещё</div>
                    <div class="ms-2">
                        <icon-chewron-down class="w-5 h-5" />
                    </div>
                </div>
                <div v-else>
                    <animation-loader />
                </div>
            </button>
        </div>
    </div>

    <infinite-scroll-container @load="handleLoadEvent()">
        <div v-for="post in posts">
            <Post :post="post"></Post>
        </div>
    </infinite-scroll-container>
    <div v-if="posts?.length == 0 && !isLoading" class="mt-20 mb-20">
        <EmptyFeed />
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Post from "@/Components/Post/Post.vue";
import EmptyFeed from "@/Components/Feed/EmptyFeed.vue";
import InfiniteScrollContainer from "@/Components/Feed/InfiniteScrollContainer.vue";
import { router, usePage } from "@inertiajs/vue3";
import MainLayout from "@/Layouts/MainLayout.vue";
import IconChewronDown from "@/Components/Icons/IconChewronDown.vue";
import ShortPost from "@/Components/Post/ShortPost.vue";
import MobileHeaderNav from "@/Components/Mobile/MobileHeaderNav.vue";
import AnimationLoader from "@/Components/Animations/AnimationLoader.vue";
import { postApi } from "@/api/postApi.js";

defineOptions({ layout: MainLayout });

const props = defineProps({
    posts: null,
    most_commented_posts: null,
    close_window_token: null,
    close_auth_modal: false,
});

const mostCommentedIsLoading = ref(false);

const mostCommentedPage = ref(2);

const loadMostCommented = async () => {
    if (!mostCommentedIsLoading.value) {
        mostCommentedIsLoading.value = true;
        await postApi.getMostCommented(mostCommentedPage.value, (res) => {
            res.data.forEach((post) => {
                props.most_commented_posts.push(post);
            });
        });
        mostCommentedPage.value++;
        mostCommentedIsLoading.value = false;
    }
};

const page = usePage();

onMounted(() => {
    console.log(page);
    if (
        page.props?.close_window_token == props.close_window_token &&
        props.close_window_token != null
    ) {
        window.opener.postMessage("auth.window.closed", "*");
        window.close();
    }
    if (props.close_auth_modal) {
        const channel = new BroadcastChannel("auth.modal");
        channel.postMessage("close");
        window.close();
    }
});

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
    await postApi.getPopular(current_page.value, (res) => {
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
