<template>
    <dropdown>
        <template #trigger>
            <button class="p-1 hover:bg-gray-100 text-secondary rounded-full">
                <IconDots />
            </button>
        </template>
        <template #content v-if="!user || user.id != post.user.id">
            <div class="py-1">
                <button
                    class="text-base text-black hover:bg-neutral-100 rounded-lg px-5"
                >
                    <IconFlag class="stroke-2 inline-block me-2 w-5 h-5" />
                    <button @click="showReportModal = true">
                        Пожаловаться
                    </button>
                </button>
            </div>
        </template>
        <template #content v-else>
            <div class="py-1 text-start text-sm">
                <button
                    @click="editPost()"
                    class="text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"
                >
                    <IconPencil class="w-5 h-5 me-2 inline-block" />
                    <span>Редактировать</span>
                </button>
                <button
                    @click="deletePost"
                    class="text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"
                >
                    <IconTrash class="w-5 h-5 me-2 inline-block" />
                    <span>Удалить</span>
                </button>
            </div>
        </template>
    </dropdown>
    <Report
        report_to_type="post"
        :report_to_id="post.id"
        :show="showReportModal"
        @close="showReportModal = !showReportModal"
    ></Report>
</template>
<script setup>
import { router } from "@inertiajs/vue3";
import { inject, ref } from "vue";
import Dropdown from "./Dropdown.vue";
import IconDots from "../Icons/IconDots.vue";
import IconFlag from "../Icons/IconFlag.vue";
import IconPencil from "../Icons/IconPencil.vue";
import IconTrash from "../Icons/IconTrash.vue";
import Report from "../Modals/Report/Report.vue";

const props = defineProps({
    user: null,
    post: null,
});

const showReportModal = ref(false);

const injectedCallModal = inject("callModal");

const editPost = async () => {
    const url = new URL(window.location.href);
    url.searchParams.append("modal", "Editor");
    url.searchParams.append("id", props.post.id);
    window.history.pushState(null, null, url);
    router.reload({
        preserveState: false,
        onSuccess: () => {
            return Promise.all([injectedCallModal("Editor")]);
        },
    });
};

const deletePost = async () => {
    axios.post(route("post.delete"), {
        _method: "DELETE",
        id: props.post.id,
    });
};
</script>
