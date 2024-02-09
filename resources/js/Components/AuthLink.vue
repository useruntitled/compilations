<template>
    <Link v-if="page.props.auth.check" :href="href">
        <slot></slot>
    </Link>
    <div v-else @click="callModal('Auth')">
        <slot></slot>
    </div>
</template>
<script setup>
import { inject } from "vue";
import { usePage } from "@inertiajs/vue3";

const props = defineProps({
    href: String,
});

const callModal = inject("callModal");

const page = usePage();
</script>
