<template>
    <Base :title="post.title">
        <div
            v-if="
                $page.props.auth.user != null &&
                post.user.id == $page.props.auth.user.id
            "
        >
            <Csrf></Csrf>
            <Link
                :href="route('post.edit', [post.id, post.slug])"
                class="mx-2 text-sm text-sky-700 ms-0"
                >Редактировать</Link
            >
            <button
                @click.prevent="destroy()"
                type="button"
                href=""
                class="mx-2 text-sm text-sky-700"
            >
                Удалить
            </button>
        </div>
        <!-- <div
            class="p-5 shadow rounded-xl text-sm my-1 inline-block text-slate-800"
        >
            <Link :href="route('user', [post.user.id])">{{
                post.user.name
            }}</Link>
        </div> -->
        <UserTablet :user="post.user"></UserTablet>
        <img
            v-lazy="route('image.crop', [post.id, '1920x1080'])"
            alt=""
            style="width: 1112px; height: 626px"
            class="rounded-xl mx-auto w-full"
        />
        <div class="text-center text-md">
            <p class="text-xl">{{ post.title }}</p>
            <p class="text-sm text-slate-900" v-html="post.description"></p>
            <div class="text-start">
                <Link
                    :href="route('tag', [tag.slug])"
                    v-for="tag in post.tags"
                    class="inline-block text-sm me-5 text-sky-700"
                >
                    #{{ tag.name }}
                </Link>
            </div>
        </div>
        <div>
            <Reputation :reputation="post.reputation"></Reputation>
        </div>
        <div class="bg-white p-5 shadow rounded-lg">
            <div v-for="film in post.films">
                <Film :film="film" mode="read"></Film>
            </div>
        </div>
        <Comments :post="post"></Comments>
    </Base>
</template>
<script>
import Film from "@/Components/Film.vue";
import axios from "axios";
import Reputation from "@/Components/Reputation.vue";
import Csrf from "./shared/csrf.vue";
import Comments from "@/Components/Comments.vue";
import UserTablet from "@/Components/UserTablet.vue";
export default {
    props: {
        post: null,
    },
    methods: {
        destroy() {
            axios
                .post(route("post.delete"), {
                    _method: "DELETE",
                    id: this.post.id,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 202) {
                        window.location = route("home");
                    }
                });
        },
    },
    components: { Film, Csrf, Reputation, Comments, UserTablet },
};
</script>
