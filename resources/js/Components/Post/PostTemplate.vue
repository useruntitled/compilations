<template>
    <div
        class="rounded-xl mb-5 sm:px-3 xs:px-2 block w-full bg-white xs:w-screen sm:max-w-screen-sm"
    >
        <header class="sm:px-2 pt-3 pb-1 flex justify-between">
            <!-- <UserTablet :user="post.user" class="font-medium"></UserTablet> -->
            <user-tablet-with-element-inside :user="post.user">
                <template #content>
                    <p class="text-13px text-secondary">
                        {{ post.timestamp }}
                    </p>
                </template>
            </user-tablet-with-element-inside>
            <div>
                <DropdownReportOrManage
                    :user="$page.props.auth.user"
                    :post="post"
                />
            </div>
        </header>
        <Link :href="route('post', [post.id, post.slug])">
            <section
                class="sm:px-3 xs:px-1 leading-[30px] font-medium text-[22px] break-words"
            >
                <p>{{ post.title }}</p>
            </section>
            <section class="sm:px-3 xs:px-1 mt-2 text-17px mb-2">
                <p v-html="post.description"></p>
            </section>
            <div :class="{ 'sm:px-3 xs:px-1': post.image }" v-if="post.image">
                <FluidLazyMedia
                    v-if="post.image"
                    rounded="lg"
                    :media="post.image"
                    max-height="400"
                />
            </div>
        </Link>
        <slot />

        <footer class="sm:px-3 xs:px-1 py-2">
            <div class="flex flex-col">
                <div class="flex items-center space-x-5 text-secondary">
                    <div>
                        {{ $tc("view", post.views) }}
                    </div>
                    <div>
                        {{ $tc("visit", post.visits) }}
                    </div>
                </div>
                <div class="m-0 flex items-center">
                    <span class="me-0">
                        <Reputation type="Post" :reputation="post.reputation" />
                    </span>
                    <span class="me-2 text-slate-700 font-[15px]"
                        ><link-icon
                            :text="post.comments_count"
                            :href="
                                route('post', [post.id, post.slug, 'comments'])
                            "
                            ><IconComments class="w-5 h-5" /></link-icon
                    ></span>
                    <span class="me-2 text-slate-700">
                        <Bookmark
                            :has="post.has_bookmark"
                            :count="post.bookmarks_count"
                            :post_id="post.id"
                        />
                    </span>
                    <span class="me-2 text-slate-700">
                        <copy-link-button
                            :href="route('post', [post.id, post.slug])"
                        >
                            <IconArrowForwardUp class="w-6 h-6 stroke-3/2" />
                        </copy-link-button>
                    </span>
                </div>
            </div>
        </footer>
    </div>
</template>
<script setup>
import IconComments from "@/Components/Icons/IconComments.vue";
import LinkIcon from "@/Components/Buttons/LinkIcon.vue";
import Reputation from "@/Components/Forms/Reputation.vue";
import IconArrowForwardUp from "@/Components/Icons/IconArrowForwardUp.vue";
import UserTabletWithElementInside from "@/Components/User/UserTabletWithElementInside.vue";
import DropdownReportOrManage from "@/Components/Dropdowns/DropdownReportOrManage.vue";
import Bookmark from "@/Components/Forms/Bookmark.vue";
import CopyLinkButton from "@/Components/Buttons/CopyLinkButton.vue";
import FluidLazyMedia from "@/Components/Media/FluidLazyMedia.vue";

const props = defineProps({
    post: null,
});
</script>
