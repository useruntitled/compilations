<template>
    <Dropdown :align="align">
        <template #trigger>
            <button class="p-1 hover:bg-gray-100 text-gray-600 rounded-full" >
                <IconDots :class="class"></IconDots>
            </button>
        </template>
        <template #content>
            <div class="py-1">
                <button
                    @click="showModal = true"
                    class="text-base text-black hover:bg-neutral-100 rounded-lg px-5"
                >
                    <IconFlag
                        class="stroke-2 inline-block me-2 w-5 h-5"
                    ></IconFlag>
                    <span>Пожаловаться</span>
                </button>
            </div>
        </template>
    </Dropdown>
    <report @close="showModal = false" :show="showModal" :report_to_type="report_to_type" :report_to_id="report_to_id"></report>
</template>
<script setup>
import Dropdown from "@/Components/Dropdown.vue";
import IconFlag from "@/Components/Icons/IconFlag.vue";
import IconDots from "@/Components/Icons/IconDots.vue";
import Report from '@/Components/Modals/Report/Report.vue';
import { ref } from 'vue';

const showModal = ref(false);

const props = defineProps({
    report_to_type: null,
    report_to_id: null,
    class: null,
    align: 'right',
})
</script>
