<template>
    <div class="bg-white rounded-xl">
        <div v-if="selectedSection == 1">
            <div v-for="post in posts" :key="post.id">
                <Post :post="post"></Post>
                <!-- {{ post }} -->
            </div>
        </div>
        <div v-else>
            <div v-for="comment in comments" class="p-2 mx-auto">
                <!-- <Comment :comment="comment"></Comment> -->
                {{ comment }}
            </div>
        </div>
    </div>

    <div
        class="mt-20"
        v-if="(!comments || !comments.length) && (!posts || !posts.length)"
    >
        <EmptyFeed></EmptyFeed>
    </div>
</template>
<script>
import Pagination from "@/Components/Pagination.vue";
import { Link } from "@inertiajs/vue3";
import Post from "@/Components/Post.vue";
import Base from "../shared/base.vue";
import PageProfileLayout from "@/Layouts/PageProfileLayout.vue";
import Comment from "@/Components/Comments/Comment.vue";
import EmptyFeed from "@/Components/EmptyFeed.vue";

export default {
    layout: [Base, PageProfileLayout],
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
            selectedSection: parseInt(this.section) ?? 1,
        };
    },
    methods: {},
    components: {
        Link,
        Pagination,
        Post,
        PageProfileLayout,
        Comment,
        EmptyFeed,
    },
};
</script>
