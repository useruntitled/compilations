<template>
    <Head>
        <title>{{ post.title }}</title>
    </Head>
    <div class="rounded-xl rounded-b-sm mb-0 px-3 block w-full bg-white">
        <header class="p-3 flex justify-between">
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
            <section class="px-3 text-xl font-medium">
                <p>{{ post.title }}</p>
            </section>
            <section class="px-3 mt-2 text-base mb-2">
                <p v-html="post.description"></p>
            </section>
            <div class="p-2">
                <!-- <img
                    v-lazy="route('im', [post.image, '800'])"
                    alt="Image"
                    class="rounded-lg mx-auto w-full object-cover"
                /> -->
                <LazyImage
                    :preview="`/media/${post.image_preview}`"
                    :than="route('im', [post.image, 800])"
                    class="rounded-lg mx-auto w-full object-cover"
                ></LazyImage>
            </div>
        </Link>
    </div>
    <div class="bg-white p-5 pt-4 rounded-b-xl pb-0">
        <div ref="films_block">
            <div v-for="film in post.films">
                <Film :film="film"></Film>
            </div>
        </div>
        <footer class="m-0 px-5 py-2 flex items-center">
            <span class="me-0"
                ><Reputation type="Post" :reputation="post.rep"></Reputation
            ></span>
            <span class="me-2 text-slate-700"
                ><LinkIcon :text="post.comments_count"
                    ><IconComments class="w-5 h-5"></IconComments></LinkIcon
            ></span>
            <span class="me-2 text-slate-700">
                <LinkIcon :text="0">
                    <IconBookmark class="w-5 h-5 stroke-3/2"></IconBookmark>
                </LinkIcon>
            </span>
            <span class="me-2 text-slate-700">
                <LinkIcon>
                    <IconArrowForwardUp
                        class="w-6 h-6 stroke-3/2"
                    ></IconArrowForwardUp>
                </LinkIcon>
            </span>
        </footer>
    </div>
    <Comments :post="post"></Comments>
</template>
<script setup>
import { onMounted, ref } from "vue";
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

defineOptions({ layout: Base });

const films_block = ref(null);

const props = defineProps({
    post: null,
});

onMounted(() => {
    if (window.location.hash == "#films") {
        setTimeout(() => {
            films_block.value.scrollIntoView();
        }, 200);
    }
});
</script>
