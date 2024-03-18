<template>
    <InfiniteScrollContainer @load="handleLoadEvent()">
        <div v-for="comment in comments" class="my-5">
            <Link :href="route('comment.redirect', [comment.id])">
                <div class="bg-white rounded-xl py-3 sm:px-5 xs:px-2">
                    <header>
                        <UserTabletWithElementInside :user="comment.user">
                            <template #content>
                                <div class="text-13px text-secondary">
                                    {{ comment.timestamp }}
                                </div>
                            </template>
                        </UserTabletWithElementInside>
                    </header>
                    <main class="my-4">
                        <p v-html="comment.text"></p>
                        <div v-if="comment.image">
                            <fluid-lazy-media
                                :media="comment.image"
                                max-height="200"
                                rounded="xl"
                            />
                        </div>
                    </main>
                </div>
            </Link>
        </div>
    </InfiniteScrollContainer>
    <div class="mt-20" v-if="!comments.length">
        <EmptyFeed></EmptyFeed>
    </div>
</template>
<script setup>
import { ref } from "vue";
import PageProfileLayout from "@/Layouts/PageProfileLayout.vue";
import EmptyFeed from "@/Components/EmptyFeed.vue";
import UserTabletWithElementInside from "@/Components/UserTabletWithElementInside.vue";
import LazyImage from "@/Components/LazyImage.vue";
import InfiniteScrollContainer from "@/Components/InfiniteScrollContainer.vue";
import axios from "axios";
import MainLayout from "@/Layouts/MainLayout.vue";
import LazyMedia from "@/Components/Media/LazyMedia.vue";
import FluidLazyMedia from "@/Components/Media/FluidLazyMedia.vue";

defineOptions({ layout: [MainLayout, PageProfileLayout] });

const props = defineProps({
    user: null,
    comments: null,
});

const isEnd = ref(false);

const currentPage = ref(2);

const isLoading = ref(false);

const loadComments = async () => {
    await axios
        .get(route("profile.comments.get", [props.user.id, currentPage.value]))
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            console.log(res);
            if (res.status == 200) {
                if (res.data.length == 0) {
                    isEnd.value = true;
                }
                res.data.forEach((comment) => {
                    props.comments.push(comment);
                });
            }
        });
};

const handleLoadEvent = async () => {
    if (!isLoading.value && !isEnd.value) {
        isLoading.value = true;
        await loadComments();
        currentPage.value += 1;
        isLoading.value = false;
    }
};
</script>
