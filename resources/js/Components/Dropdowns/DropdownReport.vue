<template>
    <Dropdown>
        <template #trigger>
            <button class="p-1 hover:bg-gray-100 text-gray-600 rounded-full">
                <IconDots></IconDots>
            </button>
        </template>
        <template #content>
            <div class="py-1">
                <button
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
</template>
<script>
import Dropdown from "@/Components/Dropdown.vue";
import IconFlag from "@/Components/Icons/IconFlag.vue";
import IconDots from "@/Components/Icons/IconDots.vue";
export default {
    components: { Dropdown, IconFlag, IconDots },
};
</script>
