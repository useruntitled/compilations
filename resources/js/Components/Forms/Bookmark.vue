<template>
    <btn-icon :text="countOfBookmarks" @click="onClick">
        <IconBookmark
            class="w-5 h-5"
            :class="{ 'text-orange-500': hasBookmark }"
        />
    </btn-icon>
</template>
<script setup>
import { usePage } from "@inertiajs/vue3";
import { inject, ref } from "vue";
import IconBookmark from "@/Components/Icons/IconBookmark.vue";
import BtnIcon from "@/Components/Buttons/BtnIcon.vue";
import { bookmarkApi } from "@/api/bookmarkApi.js";

const callModal = inject("callModal");

const page = usePage();

const props = defineProps({
    post: null,
});

const hasBookmark = ref(props.post.has_bookmark);
const countOfBookmarks = ref(props.post.bookmarks_count);

const authorize = () => {
    if (!page.props.auth.check) {
        callModal("auth");
        return false;
    }
    return true;
};

const onClick = () => {
    if (authorize()) {
        if (!hasBookmark.value) {
            bookmarkApi.store(props.post.id);
            hasBookmark.value = true;
            countOfBookmarks.value++;
        } else {
            bookmarkApi.destroy(props.post.id);
            hasBookmark.value = false;
            countOfBookmarks.value--;
        }
    }
};
</script>
