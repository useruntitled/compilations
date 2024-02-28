<template>
    <div class="inline-block p-1">
        <div class="inline-block hover:text-orange-700 flex items-center">
            <div class="flex items-center">
                <div>
                    <Link
                        :href="href ?? ''"
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
                                <slot :class="props.class"></slot>
                            </div>
                        </div>
                        <span class="ms-1">{{ text }}</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    href: {
        required: false,
        type: String,
    },
    class: null,
    text: null,
});

const isHovered = ref(false);
</script>
<!-- <script>
import { Link } from "@inertiajs/vue3";

export default {
    props: {
        href: {
            required: false,
            type: String,
        },
        text: null,
    },
    components: { Link },
};
</script> -->
