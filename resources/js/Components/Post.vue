<template>
    <div class="rounded-xl mb-5 px-3 block w-full bg-white">
        <header class="p-3 flex justify-between">
            <UserTablet :user="post.user" class="font-medium"></UserTablet>
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
</template>
<script>
import Dropdown from "./Dropdown.vue";
import IconBookmark from "./Icons/IconBookmark.vue";
import IconComments from "./Icons/IconComments.vue";
import IconDots from "./Icons/IconDots.vue";
import IconFlag from "./Icons/IconFlag.vue";
import LinkIcon from "./LinkIcon.vue";
import Reputation from "./Reputation.vue";
import UserTablet from "./UserTablet.vue";
import IconArrowForwardUp from "./Icons/IconArrowForwardUp.vue";
import IconTrash from "./Icons/IconTrash.vue";
import IconPencil from "./Icons/IconPencil.vue";

export default {
    props: {
        post: null,
    },
    components: {
        Reputation,
        IconComments,
        UserTablet,
        LinkIcon,
        IconDots,
        Dropdown,
        IconFlag,
        IconBookmark,
        IconTrash,
        IconPencil,
        IconArrowForwardUp,
    },
};
</script>
