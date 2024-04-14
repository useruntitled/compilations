<template>
    <div class="inline-block p-1">
        <div class="inline-block hover:text-orange-700 flex items-center">
            <div class="flex items-center">
                <div>
                    <button
                        @mouseenter="isHovered = true"
                        @mouseleave="isHovered = false"
                        class="stroke-secondary hover:stroke-orange-700 flex items-center"
                        :class="{ 'stroke-orange-700': isHovered }"
                    >
                        <div
                            class="inline-block hover:text-orange-700 hover:bg-orange-100 rounded-full p-1 duration-0"
                            :class="{
                                'bg-orange-100': isHovered,
                                'text-secondary': !isHovered,
                            }"
                        >
                            <div :class="props.class">
                                <slot :class="props.class" />
                            </div>
                        </div>
                        <span class="ms-1">{{ text }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
    class: null,
    text: null,
});

const isHovered = ref(false);
</script>
