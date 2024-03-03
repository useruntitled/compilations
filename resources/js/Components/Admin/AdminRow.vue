<template>
    <div class="flex justify-between space-x-2">
        <div>
            <slot name="id"/>
        </div>

        <div>
            <slot name="title"/>
        </div>
        <div>
            <slot name="content"/>
        </div>

        <div>
            <slot name="timestamp"/>
        </div>
        <div class="flex justify-between space-x-4">
            <slot name="buttons"/>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    status: null,
})
</script>
