<template>
    <post-template :post="post">
        <div v-for="(film, index) in post.films" class="sm:px-3 xs:px-1">
            <Film v-if="index < 2" :film="film"></Film>
        </div>
        <Link
            preserve-scroll
            :href="route('post', [post.id, post.slug, 'films'])">
            <p
                v-if="post.films_count >= 3"
                class="mt-4 sm:px-3 xs:px-1 py-1 inline-block rounded-full text-dtfpr hover:bg-dtfpr hover:bg-opacity-10 duration-200"
            >
                И еще {{ $tc("film", post.films_count - 2) }} в подборке
            </p></Link
        >
    </post-template>
</template>
<script setup>

import Film from "../Film.vue";

import PostTemplate from "@/Components/Post/PostTemplate.vue";

const props = defineProps({
    post: null,
})

</script>
