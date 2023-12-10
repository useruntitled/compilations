<template>
    <Head>
        <title>Страница {{ user.name }}</title>
    </Head>
    <div class="mx-auto text-center bg-white rounded-xl p-5">
        <img
            class="mx-auto rounded-full"
            :src="route('image.crop', [user.avatar, '200x200'])"
            alt=""
            style="width: 100px; height: 100px"
        />
        <h1>{{ user.name }}</h1>
        <p class="text-sm text-slate-700">Карма: {{ karma }}</p>
        <p
            v-if="user.isAdmin"
            class="text-sm bg-red-700 inline-block px-2 py-1 rounded-xl text-white font-semibold my-2"
        >
            Администратор
        </p>
        <div
            class="mx-auto text-center my-5 bg-white p-10 pb-0 mb-0 rounded-xl"
        >
            <Link
                :href="route('profile', [user.id, 1])"
                @click="selectedSection = 1"
                class="mx-2 p-5 border-2 rounded decoration-orange-500 underline-offset-16 border-white duration-100"
                :class="
                    selectedSection == 1
                        ? 'underline decoration-2 decoration-orange-500 underline-offset-16 underline-2 duration-200'
                        : ''
                "
            >
                Подборки
            </Link>
            <Link
                @click="selectedSection = 2"
                class="mx-2 p-5 border-2 rounded decoration-orange-500 underline-offset-16 border-white duration-100"
                :class="
                    selectedSection == 2
                        ? 'underline decoration-2 decoration-orange-500 underline-offset-16 underline-2 duration-200'
                        : ''
                "
                :href="route('profile', [user.id, 2])"
                >Комментарии</Link
            >
            <Link
                @click="selectedSection = 3"
                class="mx-2 p-5 border-2 rounded decoration-orange-500 underline-offset-16 border-white duration-100"
                :class="
                    selectedSection == 3
                        ? 'underline decoration-2 decoration-orange-500 underline-offset-16 underline-2 duration-200'
                        : ''
                "
                :href="route('profile', [user.id, 3])"
                >Ответы</Link
            >
        </div>
    </div>

    <div class="mt-5">
        <section v-if="section == 1" class="mx-auto">
            <div v-for="post in posts.data">
                <!-- <Link :href="route('post', [post.id, post.slug])">{{
                        post.title
                    }}</Link> -->
                <Post :post="post"></Post>
            </div>
            <Pagination :items="posts" class="my-5"></Pagination>
        </section>
        <section v-if="section == 2" class="max-w-sm mx-auto">
            <div v-for="comment in comments.data">
                <Comment :comment="comment"></Comment>
            </div>
            <Pagination :items="comments" class="my-5"></Pagination>
        </section>
        <section v-if="section == 3" class="max-w-sm mx-auto">
            <div v-for="reply in replies.data">
                <Reply :reply="reply"></Reply>
            </div>
            <Pagination :items="replies" class="my-5"></Pagination>
        </section>
    </div>
</template>
<script>
import Comment from "@/Components/Comment.vue";
import Compilation from "@/Components/Compilation.vue";
import Pagination from "@/Components/Pagination.vue";
import Reply from "@/Components/Reply.vue";
import { Link } from "@inertiajs/vue3";
import Base from "../shared/base.vue";
import Post from "@/Components/Post.vue";

export default {
    layout: Base,
    props: {
        user: null,
        karma: null,
        posts: null,
        comments: null,
        replies: null,
        section: null,
    },
    data() {
        return {
            selectedSection: this.section ?? 1,
        };
    },
    methods: {},
    components: { Reply, Comment, Link, Pagination, Compilation, Post },
};
</script>
