<template>
    <input
        v-model="search"
        class="rounded-xl focus:ring-panelsemiprimary
        bg-panelsemiprimary
        border-panelbck
        hover:ring-panelsemiprimary hover:border-panelsemiprimary enabled:border-panelsemiprimary hover:ring-[1.5px]"
        placeholder="Поиск..."
    />
</template>
<script setup>
import {ref, watch} from "vue";
import {router} from "@inertiajs/vue3";

const props = defineProps({
    search: null,
    href: null,
});

const search = ref(props.search);


watch(search, value => {
    router.get(props.href, {search: value}, {
        preserveState: true,
        replace: true
    });
});
</script>
