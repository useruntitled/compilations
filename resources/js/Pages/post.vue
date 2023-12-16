<template>
    <Head>
        <title>{{ post.title }}</title>
    </Head>
    <div class="rounded-xl rounded-b-sm mb-0 px-3 block w-full bg-white">
        <header class="p-3 flex justify-between">
            <UserTabletWithElementInside :user="post.user">
                <p class="text-13px text-secondary">
                    {{ post.timestamp }}
                </p>
            </UserTabletWithElementInside>
            <div>
                <Dropdown>
                    <template #trigger>
                        <button
                            class="p-1 hover:bg-gray-100 text-gray-600 rounded-full"
                        >
                            <IconDots></IconDots>
                        </button>
                    </template>
                    <template
                        #content
                        v-if="
                            $page.props.auth.user == null ||
                            $page.props.auth.user.id != post.user.id
                        "
                    >
                        <div class="py-1">
                            <button
                                class="text-base text-black hover:bg-neutral-100 rounded-lg px-5"
                            >
                                <IconFlag
                                    class="stroke-2 inline-block me-2 w-5 h-5"
                                ></IconFlag>
                                <span>Пожаловаться</span>
                            </button>
                        </div>
                    </template>
                    <template #content v-else>
                        <div class="py-1 text-start">
                            <button
                                class="text-base text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"
                            >
                                <IconPencil
                                    class="stroke-2 inline-block me-2 w-5 h-5"
                                ></IconPencil>
                                <span>Редактировать</span>
                            </button>
                            <button
                                class="text-base text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"
                            >
                                <IconTrash
                                    class="stroke-2 inline-block me-2 w-5 h-5"
                                ></IconTrash>
                                <span>Удалить</span>
                            </button>
                        </div>
                    </template>
                </Dropdown>
            </div>
        </header>
        <Link :href="route('post', [post.id, post.slug])">
            <section class="px-3 text-xl font-semibold">
                <p>{{ post.title }}</p>
            </section>
            <section class="px-3 mt-2 text-base mb-2">
                <p v-html="post.description"></p>
            </section>
            <div class="p-2">
                <img
                    v-lazy="route('image.crop', [post.id, '800x600'])"
                    alt="Image"
                    class="rounded-lg mx-auto w-full object-cover"
                />
            </div>
        </Link>
    </div>
    <div class="bg-white p-5 pt-4 rounded-b-xl pb-0">
        <div v-for="film in post.films">
            <Film :film="film" mode="read"></Film>
        </div>
        <footer class="m-0 px-5 py-2 flex items-center">
            <span class="me-0"
                ><Reputation :reputation="post.reputation"></Reputation
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
<script>
import Film from "@/Components/Film.vue";
import axios from "axios";
import Reputation from "@/Components/Reputation.vue";
import Csrf from "./shared/csrf.vue";
import Comments from "@/Components/Comments/Comments.vue";
import UserTablet from "@/Components/UserTablet.vue";
import IconArrowForwardUp from "@/Components/Icons/IconArrowForwardUp.vue";
import IconBookmark from "@/Components/Icons/IconBookmark.vue";
import IconComments from "@/Components/Icons/IconComments.vue";
import IconFlag from "@/Components/Icons/IconFlag.vue";
import IconDots from "@/Components/Icons/IconDots.vue";
import IconTrash from "@/Components/Icons/IconTrash.vue";
import IconPencil from "@/Components/Icons/IconPencil.vue";
import LinkIcon from "@/Components/LinkIcon.vue";
import Dropdown from "@/Components/Dropdown.vue";
import Base from "./shared/base.vue";
import UserTabletWithElementInside from "@/Components/UserTabletWithElementInside.vue";
export default {
    layout: Base,
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
    mounted() {
        if (window.location.hash.includes("#comment-")) {
            const comment_id = window.location.hash.replace("#comment-", "");
            console.log(comment_id);
        }
    },
    components: {
        Film,
        Csrf,
        Reputation,
        Comments,
        UserTablet,
        IconArrowForwardUp,
        IconBookmark,
        IconComments,
        IconFlag,
        IconDots,
        UserTablet,
        IconTrash,
        IconPencil,
        LinkIcon,
        Comments,
        IconDots,
        Dropdown,
        UserTabletWithElementInside,
    },
};
</script>
