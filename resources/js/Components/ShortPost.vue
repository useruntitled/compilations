<template>
    <div class="flex items-center overflow-hidden">
        <Link :href="route('post', [post.id, post.slug])">
            <div class="text-17px hover:opacity-70 break-words">
                <span>{{ post.title }}</span>
                <span class="opacity-60 text-[13px] inline-block items-end">
                    <span class="items-end space-x-0">
                        <icon-comments class="w-4 h-4 inline-block ms-1"/> <span class="ms-0">{{
                            post.comments_count
                        }}</span>
                    </span>
                </span>
            </div>
        </Link>
    </div>
</template>
<script setup>
import IconComments from "@/Components/Icons/IconComments.vue";

const props = defineProps({
    post: null,
})
</script>
