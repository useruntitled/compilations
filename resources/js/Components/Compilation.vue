<template>
    <!-- <img :src="'/storage/' + post.id" alt="" /> -->
    <Link
        :href="
            mode == null
                ? route('post', [post.id, post.slug])
                : route('post.edit', [post.id, post.slug])
        "
    >
        <div class="rounded-xl mt-5 inline-block border">
            <div class="absolute">
                <div class="opacity-70 hover:opacity-100 duration-200 m-2">
                    <IconFilms :films="post.films"></IconFilms>
                </div>
            </div>
            <!-- <div class="absolute bg-white opacity-70 rounded-sm rounded-s-none">
                <p
                    v-for="tag in post.tags"
                    :key="tag.id"
                    class="text-sm text-sky-700 inline-block me-2"
                >
                    #{{ tag.name }}
                </p>
            </div> -->
            <img
                v-lazy="route('image.crop', [post.id, '400x225'])"
                alt="Image"
                class="rounded-t-xl mx-auto w-full object-cover"
                style="width: 400px; height: 225px"
            />

            <div
                class="p-5 max-h-24 max-w-xs whitespace-nowrap overflow-hidden text-ellipsis"
            >
                <p class="text-sky-700 text-xl">{{ post.title }}</p>
                <p
                    class="text-sm text-slate-900 overflow-hidden text-ellipsis"
                    v-html="post.description"
                ></p>
            </div>
            <footer class="m-0 px-5 py-2 flex justify-between">
                <Reputation :reputation="post.reputation"></Reputation>

                <div class="flex items-center text-slate-800">
                    <span class="text-sm">{{ post.comments_count }}</span>
                    <span class="inline-block">
                        <IconComments></IconComments>
                    </span>
                </div>
            </footer>
        </div>
    </Link>
</template>
<script>
import IconComments from "./Icons/IconComments.vue";
import IconFilms from "./Icons/IconFilms.vue";
import Reputation from "./Reputation.vue";

export default {
    props: {
        post: null,
        mode: null,
    },
    components: { Reputation, IconComments, IconFilms },
};
</script>
