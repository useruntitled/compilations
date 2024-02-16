<template>
    <Head>
        <title>{{ post.title }}</title>
    </Head>
    <div class="rounded-xl mb-5 sm:px-3 xs:px-1 block w-full bg-white">
        <header class="sm:px-2 pt-3 pb-1  flex justify-between">
            <!-- <UserTablet :user="post.user" class="font-medium"></UserTablet> -->
            <UserTabletWithElementInside :user="post.user">
                <template #content>
                    <p class="text-13px text-secondary">
                        {{ post.timestamp }}
                    </p>
                </template>
            </UserTabletWithElementInside>
            <div>
                <DropdownReportOrManage
                    :user="$page.props.auth.user"
                    :post="post"
                ></DropdownReportOrManage>
            </div>
        </header>
        <Link :href="route('post', [post.id, post.slug])">
            <section class="sm:px-3 xs:px-1 text-xl font-medium">
                <p>{{ post.title }}</p>
            </section>
            <section class="sm:px-3 xs:px-1 mt-2 text-base mb-2">
                <p v-html="post.description"></p>
            </section>
            <div :class="{'p-2 sm:px-3 xs:px-1': post.image}">
                <!-- <img
                    v-lazy="route('im', [post.image, '800'])"
                    alt="Image"
                    class="rounded-lg mx-auto w-full object-cover"
                /> -->
                <LazyImage
                    v-if="post.image"
                    :preview="`/media/${post.image_preview}`"
                    :then="route('im', [post.image, 800])"
                    class="rounded-lg mx-auto w-full object-cover w-full"
                    style="min-width: auto; min-height: 400px;"
                ></LazyImage>
            </div>
        </Link>
        <div ref="films_block">
            <div v-for="(film, index) in post.films" class="sm:px-3 xs:px-1" >
                <Film :film="film"></Film>
            </div>
        </div>

        <footer class="sm:px-3 xs:px-1 py-2">
            <div class="flex flex-col ">
                <div class="flex items-center space-x-5 text-secondary ">
                    <div>
                        {{ $tc('view', post.views) }}
                    </div>
                    <div>
                        {{ $tc('visit', post.visits) }}
                    </div>
                </div>
                <div class="m-0  flex items-center">
            <span class="me-0"
            ><Reputation type="Post" :reputation="post.rep"></Reputation
            ></span>
                    <span class="me-2 text-slate-700"
                    ><LinkIcon
                        :text="post.comments_count"
                        :href="route('post', [post.id, post.slug, 'comments'])"
                    ><IconComments class="w-5 h-5"></IconComments></LinkIcon
                    ></span>
                    <span class="me-2 text-slate-700">
                <Bookmark
                    :has="post.has_bookmark"
                    :count="post.bookmarks_count"
                    :post_id="post.id"
                ></Bookmark>
            </span>
                    <span class="me-2 text-slate-700">
                <LinkIcon>
                    <IconArrowForwardUp
                        class="w-6 h-6 stroke-3/2"
                    ></IconArrowForwardUp>
                </LinkIcon>
            </span>
                </div>
            </div>
        </footer>
    </div>
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
import Reputation from "@/Components/Reputation.vue";
import Comments from "@/Components/Comments/Comments.vue";
import IconArrowForwardUp from "@/Components/Icons/IconArrowForwardUp.vue";
import IconBookmark from "@/Components/Icons/IconBookmark.vue";
import IconComments from "@/Components/Icons/IconComments.vue";
import LinkIcon from "@/Components/LinkIcon.vue";
import Base from "./shared/base.vue";
import UserTabletWithElementInside from "@/Components/UserTabletWithElementInside.vue";
import DropdownReportOrManage from "@/Components/Dropdowns/DropdownReportOrManage.vue";
import LazyImage from "@/Components/LazyImage.vue";
import axios from "axios";
import Post from "@/Components/Post.vue";
import InfiniteScrollContainer from "@/Components/InfiniteScrollContainer.vue";
import Bookmark from "@/Components/Bookmark.vue";

defineOptions({ layout: Base });

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
