<template>
    <div
        class="h-full mx-auto w-full text-center sticky overflow-y-auto overscroll-none noscrollbar"
        style="height: calc(100vh - 52px); top: 52px"
    >
        <div class="pt-2 mt-0 ms-10">
            <p
                class="font-medium py-5 text-lg text-start flex sticky top-0 bg-bck z-50"
                v-show="comments && comments.length > 0"
            >
                Сейчас обсуждают
            </p>
            <div class="overflow-y-auto overflow-x-hidden text-start">
                <div v-for="comment in comments" :key="comment.id" class="mb-4">
                    <div
                        class="flex items-center overflow-hidden whitespace-no-wrap px"
                    >
                        <Link :href="route('profile', [comment.user.id])">
                            <LazyImage
                                :preview="'/media/' + comment.user.avatar_preview"
                                :then="route('im', [comment.user.avatar, ['50']])"
                                class="rounded-full inline-block me-2 w-[36px] h-[36px] object-cover border-2"
                                style="max-width: 36px; max-height: 36px"
                            >

                            </LazyImage>
<!--                            <img-->

<!--                                -->
<!--                                -->
<!--                                alt=""-->
<!--                        />-->
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
                                    route('post', [
                                        comment.post.id,
                                        comment.post.slug,
                                    ])
                                "
                            >
                                <p
                                    class="text-sm font-medium overflow-hidden text-ellipsis"
                                    style="max-height: 19px"
                                >
                                    {{ comment.post.title }}
                                </p></Link
                            >
                        </div>
                    </div>
                    <Link :href="prepareHref(comment)">
                        <p
                            class="text-base overflow-hidden text-ellipsis hover:opacity-70 cursor-pointer"
                            style="max-height: 100px"
                            v-html="comment.text"
                        ></p>
                        <div v-if="comment.image" class="text-center mt-2">
                            <LazyImage
                                :preview="'/media/' + comment.image_preview"
                                :then="route('im', [comment.image, 200])"
                                class="rounded-xl w-2/3 hover:brightness-[1.2]"
                            ></LazyImage>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import LazyImage from "@/Components/LazyImage.vue";
import { getFeed, listenFeedUpdates } from "./AsideRightApi";

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
};

onMounted(() => {
    getFeed(setComments);

    listenFeedUpdates(addComment);
});

watch(comments, () => {
    if (comments.length == 20) {
        comments.value.splice(-20);
    }
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
