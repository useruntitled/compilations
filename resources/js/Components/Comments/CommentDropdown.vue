<template>
    <Dropdown align="left">
        <template #trigger>
            <button class="p-1 hover:bg-gray-100 text-secondary rounded-full">
                <icon-dots :class="class" />
            </button>
        </template>
        <template #content v-if="page.props.auth.user?.id != comment.user.id">
            <div class="py-1 text-sm">
                <button
                    @click="showReportModal = true"
                    class="text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"
                >
                    <icon-flag
                        class="w-5 h-5  me-2 inline-block"
                    ></icon-flag>
                    <span>Пожаловаться</span>
                </button>
            </div>
        </template>
        <template #content v-else>
            <div class="py-1 text-start text-sm">
                <button
                    @click="emit('enableEditing')"
                    class="text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"
                >
                    <icon-pencil
                        class="w-5 h-5  me-2 inline-block"
                    ></icon-pencil>
                    <span>Редактировать</span>
                </button>
                <button
                    @click="emit('remove')"
                    class="text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"
                >
                    <icon-trash
                        class="w-5 h-5  me-2 inline-block"
                    ></icon-trash>
                    <span>Удалить</span>
                </button>
            </div>
        </template>
    </Dropdown>

    <Report
        report_to_type="comment"
        :report_to_id="comment.id"
        :show="showReportModal"
        @close="showReportModal = !showReportModal"
    ></Report>
</template>
<script setup>
import { ref } from 'vue';
import IconDots from "../Icons/IconDots.vue";
import IconTrash from "@/Components/Icons/IconTrash.vue";
import IconFlag from "@/Components/Icons/IconFlag.vue";
import IconPencil from "@/Components/Icons/IconPencil.vue";
import {usePage} from "@inertiajs/vue3";
import Report from '@/Components/Modals/Report/Report.vue';
import Dropdown from '@/Components/Dropdown.vue';

const emit = defineEmits(['enableEditing', 'remove']);

const showReportModal = ref(false);

const page = usePage();

const props = defineProps({
    comment: null,
    class: null,
})

</script>
