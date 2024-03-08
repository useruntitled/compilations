<template>
    <div class="space-x-4">
        <span v-for="link in links">
            <Link v-html="link.label" :href="link.url" v-if="link.url && last_page > 1"/>
        </span>
    </div>
</template>
<script setup>
const props = defineProps({
    links: null,
    last_page: null,
})
</script>
