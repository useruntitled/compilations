<template>
    <div class="rounded-xl mb-5 sm:px-3 xs:px-1 block w-full bg-white">
        <header class="sm:px-2 pt-3 pb-1  flex justify-between">
            <!-- <UserTablet :user="post.user" class="font-medium"></UserTablet> -->
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
            <section class="sm:px-3 xs:px-1 text-xl font-medium">
                <p>{{ post.title }}</p>
            </section>
            <section class="sm:px-3 xs:px-1 mt-2 text-base mb-2">
                <p v-html="post.description"></p>
            </section>
            <div :class="{'p-2 sm:px-3 xs:px-1': post.image}" class="flex justify-center relative" v-if="post.image">
                <!-- <img
                    v-lazy="route('im', [post.image, '800'])"
                    alt="Image"
                    class="rounded-lg mx-auto w-full object-cover"
                /> -->
                <img :src="`/media/${post.image_preview}`" class="rounded-lg mx-auto w-full h-full"
                     style="max-height: 600px"
                     alt="">
                    <LazyImage

                        :preview="`/media/${post.image_preview}`"
                        :then="route('im', [post.image, 800])"
                        class="rounded-lg mx-auto object-scale-down w-full absolute"
                        style="min-width: auto; max-height: 600px"
                    ></LazyImage>
            </div>
        </Link>
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

        <footer class="sm:px-3 xs:px-1 py-2">
            <div class="flex flex-col ">
                <div class="flex items-center space-x-5 text-secondary ">
                    <div>
                        {{ $tc('view', post.views) }}
                    </div>
                    <div>
                        {{ $tc('visit', post.visits) }}
                    </div>
                </div>
                <div class="m-0  flex items-center">
            <span class="me-0"
            ><Reputation type="Post" :reputation="post.rep"></Reputation
            ></span>
                    <span class="me-2 text-slate-700"
                    ><LinkIcon
                        :text="post.comments_count"
                        :href="route('post', [post.id, post.slug, 'comments'])"
                    ><IconComments class="w-5 h-5"></IconComments></LinkIcon
                    ></span>
                    <span class="me-2 text-slate-700">
                <Bookmark
                    :has="post.has_bookmark"
                    :count="post.bookmarks_count"
                    :post_id="post.id"
                ></Bookmark>
            </span>
                    <span class="me-2 text-slate-700">
                        <copy-link-button :href="route('post', [post.id, post.slug])">
                            <IconArrowForwardUp
                                class="w-6 h-6 stroke-3/2"
                            ></IconArrowForwardUp>
                        </copy-link-button>
                    </span>
                </div>
            </div>
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
import Film from "./Film.vue";
import UserTabletWithElementInside from "./UserTabletWithElementInside.vue";
import DropdownReportOrManage from "./Dropdowns/DropdownReportOrManage.vue";
import LazyImage from "./LazyImage.vue";
import Bookmark from "./Bookmark.vue";
import CopyLinkButton from "@/Components/CopyLinkButton.vue";
import BtnIcon from "@/Components/BtnIcon.vue";

export default {
    props: {
        post: null,
    },
    components: {
        BtnIcon,
        CopyLinkButton,
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
        Film,
        UserTabletWithElementInside,
        DropdownReportOrManage,
        LazyImage,
        Bookmark,
    },
};
</script>
