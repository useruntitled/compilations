<template>
    <div class="space-x-4">
        <span v-for="link in links">
            <Link
                :preserve-scroll="true"
                v-html="link.label"
                :href="link.url"
                v-if="link.url && last_page > 1"
                :class="{'text-zinc-500': link.active}"
            />
        </span>
    </div>
</template>
<script setup>
const props = defineProps({
    links: null,
    last_page: null,
})
</script>
