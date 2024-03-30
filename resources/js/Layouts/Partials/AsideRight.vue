<template>
    <div
        class="h-full mx-auto w-full text-center sticky overflow-y-auto overscroll-none noscrollbar"
        style="height: calc(100vh - 52px); top: 52px"
    >
        <div class="pt-2 mt-0 ms-10">
            <p
                class="font-medium py-5 text-lg text-start flex sticky top-0 bg-bck z-50"
            >
                Сейчас обсуждают
            </p>
            <div class="overflow-y-auto overflow-x-hidden text-start">
                <div v-for="comment in comments" :key="comment.id" class="mb-4">
                    <div
                        class="flex items-center overflow-hidden whitespace-no-wrap px"
                    >
                        <Link :href="route('profile', [comment.user.id])">
                            <lazy-media
                                :media="comment.user.avatar"
                                class="rounded-full me-2 object-cover border-2 hover:opacity-80"
                                width="36"
                                height="36"
                            />
                        </Link>

                        <div class="flex flex-col">
                            <div>
                                <span class="text-xs font-medium me-2">
                                    <Link
                                        :href="
                                            route('profile', [comment.user.id])
                                        "
                                        >{{ comment.user.name }}</Link
                                    >
                                </span>
                                <span class="text-xs text-gray-600"
                                    >в подборке</span
                                >
                            </div>
                            <Link
                                :href="
                                    route('post.redirect', [
                                        comment.post.id,
                                    ])
                                "
                                class="max-w-[200px]"
                            >
                                <p
                                    class="text-sm font-medium overflow-hidden text-ellipsis hover:opacity-70"
                                    style="max-height: 19px"
                                >
                                    {{ comment.post.title }}
                                </p></Link
                            >
                        </div>
                    </div>
                    <Link :href="prepareHref(comment)">
                        <p
                            class="text-base overflow-hidden text-ellipsis  cursor-pointer hover:opacity-70"
                            style="max-height: 100px"
                            v-html="comment.text"
                        ></p>
                        <div v-if="comment.image" class="text-center mt-2 hover:opacity-70">
                            <!--                            <lazy-media-->
                            <!--                                :media="comment.image"-->
                            <!--                                class="rounded-lg mx-auto object-scale-down w-full h-full hover:opacity-80"-->
                            <!--                                rounded="lg"-->
                            <!--                                style="max-height: 200px"-->
                            <!--                            />-->
                            <fluid-lazy-media
                                :media="comment.image"
                                max-height="200"
                                rounded="lg"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import LazyImage from "@/Components/LazyImage.vue";
import { getFeed, listenFeedUpdates } from "./AsideRightApi.js";
import LazyMedia from "@/Components/Media/LazyMedia.vue";
import FluidLazyMedia from "@/Components/Media/FluidLazyMedia.vue";

const comments = ref([]);

const prepareHref = (comment) => {
    return route("post", [
        comment.post.id,
        comment.post.slug,
        { comment: comment.id },
    ]);
};

const setComments = (data) => {
    comments.value = data;
};

const addComment = (data) => {
    console.log("data", data);
    comments.value.unshift(data.data);
    if (comments.value?.length > 20) {
        comments.value.splice(20,1);
    }
};

onMounted(() => {
    getFeed(setComments);

    listenFeedUpdates(addComment);
});


</script>

<style>
/* хром, сафари */
.noscrollbar::-webkit-scrollbar {
    width: 0;
}

/* ie 10+ */
.noscrollbar {
    -ms-overflow-style: none;
}

/* фф (свойство больше не работает, других способов тоже нет)*/
.noscrollbar {
    overflow: -moz-scrollbars-none;
}
</style>
