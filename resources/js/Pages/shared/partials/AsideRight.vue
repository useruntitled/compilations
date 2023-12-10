<template>
    <div
        class="h-full mx-auto w-full text-center sticky overflow-y-auto overscroll-none noscrollbar"
        style="height: calc(100vh - 65.6px); top: 65.6px"
    >
        <div class="pt-2 mt-0 ms-10">
            <p
                class="font-semibold py-5 text-lg text-start flex sticky top-0 bg-bck"
            >
                Сейчас обсуждают
            </p>
            <div class="overflow-y-auto overflow-x-hidden text-start">
                <div v-for="comment in comments" class="mb-4">
                    <div
                        class="flex items-center overflow-hidden whitespace-no-wrap"
                    >
                        <img
                            :src="
                                route('image.crop', [
                                    comment.user.avatar,
                                    ['50x50'],
                                ])
                            "
                            class="rounded-full inline-block me-2"
                            style="max-width: 36px; max-height: 36px"
                            alt=""
                        />
                        <div class="flex flex-col">
                            <div>
                                <span class="text-xs font-medium me-2">
                                    {{ comment.user.name }}
                                </span>
                                <span class="text-xs text-gray-600"
                                    >в посте</span
                                >
                            </div>
                            <p
                                class="text-sm font-semibold overflow-hidden text-ellipsis"
                                style="max-height: 19px"
                            >
                                {{ comment.post.title }}
                            </p>
                        </div>
                    </div>
                    <p
                        class="text-base overflow-hidden text-ellipsis"
                        style="max-height: 100px"
                    >
                        {{ comment.text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Comment from "@/Components/Comment.vue";
import UserTablet from "@/Components/UserTablet.vue";
import axios from "axios";

export default {
    data() {
        return {
            comments: null,
        };
    },
    methods: {
        getLastComments() {
            axios
                .get(route("comments.get.last"))
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) this.comments = res.data;
                });
        },
        setIntervalGetComments() {
            setInterval(() => {
                this.getLastComments();
            }, 30000);
        },
    },
    mounted() {
        this.getLastComments();
        this.setIntervalGetComments();
    },
    components: { Comment, UserTablet },
};
</script>
<style>
/* хром, сафари */
.noscrollbar::-webkit-scrollbar {
    width: 0;
}

/* ie 10+ */
.noscrollbar {
    -ms-overflow-style: none;
}

/* фф (свойство больше не работает, других способов тоже нет)*/
.noscrollbar {
    overflow: -moz-scrollbars-none;
}
</style>
