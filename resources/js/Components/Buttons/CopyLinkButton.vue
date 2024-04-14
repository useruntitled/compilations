<template>
    <dropdown width="200" align="left">
        <template #trigger>
            <button
                class="p-[1px] rounded-full hover:bg-orange-100 hover:text-orange-700"
            >
                <slot />
            </button>
        </template>
        <template #content>
            <div class="px-2">
                <button
                    @click="copy()"
                    class="hover:bg-gray-100 flex items-center justify-center space-x-2 rounded-lg px-2 py-1"
                >
                    <span>
                        <IconLink class="w-[20px] h-[20px] text-black" />
                    </span>
                    <span class="text-15 text-black p-0 m-0">
                        Копировать ссылку
                    </span>
                </button>
            </div>
        </template>
    </dropdown>
</template>
<script setup>
import IconLink from "@/Components/Icons/IconLink.vue";
import Dropdown from "@/Components/Dropdowns/Dropdown.vue";
import { inject } from "vue";

const callMessage = inject("callMessage");

const props = defineProps({
    href: null,
});

const copy = async () => {
    await navigator.clipboard.writeText(props.href);
    callMessage("success", "Ссылка скопирована.");
};
</script>
