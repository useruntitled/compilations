<template>
    <Dropdown width="200">
        <template #trigger>
            <button>
                <slot/>
            </button>
        </template>
        <template #content>
            <div class="px-2">
                <button
                    @click="copy()"
                    class="flex items-center justify-center space-x-2 hover:bg-gray-100 rounded-lg px-2 py-1">
                <span>
                    <icon-link class="w-[20px] h-[20px] text-black"></icon-link>
                </span>

                    <span class="text-15 text-black p-0 m-0">
                    Копировать ссылку
                </span>
                    <input ref="crunch" type="hidden" :value="href">
                </button>
            </div>
        </template>
    </Dropdown>
</template>
<script setup>
import IconLink from "@/Components/Icons/IconLink.vue";
import Dropdown from "@/Components/Dropdown.vue";
import {ref} from 'vue';

const props = defineProps({
    href: null,
});

const crunch = ref(null);

const copy = () => {
    crunch.value.document.execCommand('copy');
}
</script>
