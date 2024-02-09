<template>
    <BtnIcon :text="countOfBookmarks" @click="setBookmark">
        <IconBookmark
            class="w-5 h-5"
            :class="{ 'text-orange-500': hasBookmark }"
        ></IconBookmark>
    </BtnIcon>
</template>
<script setup>
import { usePage } from "@inertiajs/vue3";
import { inject, ref } from "vue";
import IconBookmark from "./Icons/IconBookmark.vue";
import BtnIcon from "./BtnIcon.vue";
import axios from "axios";

const callModal = inject("callModal");

const page = usePage();

const props = defineProps({
    has: {
        type: Boolean,
        default: false,
    },
    count: {
        type: Number,
        default: 0,
    },
    post_id: {
        type: Number,
        required: true,
    },
});

const hasBookmark = ref(props.has);
const countOfBookmarks = ref(props.count);

const accept = () => {
    if (!page.props.auth.check) {
        callModal("auth");
    }
};

const toggleBookmark = () => {
    hasBookmark.value = !hasBookmark.value;
};

const setBookmark = () => {
    accept();

    toggleBookmark();

    axios
        .post(
            route("bookmark.toggle", {
                post_id: props.post_id,
            })
        )
        .then((res) => {
            console.log(res);
            if (res.status == 200 || res.status == 201) {
                if (res.data != "") {
                    hasBookmark.value = true;
                    countOfBookmarks.value++;
                } else {
                    hasBookmark.value = false;
                    countOfBookmarks.value--;
                }
            }
        });
};
</script>
