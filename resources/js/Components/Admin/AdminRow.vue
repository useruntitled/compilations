<template>
    <tr class="hover:bg-panelsemiprimary">
        <th>
            <slot name="id"/>
        </th>
        <th class="max-w-[400px] overflow-hidden text-ellipsis">
            <slot name="title"/>
        </th>
        <th>
            <slot name="content"/>
        </th>
        <th>
            <slot name="status"/>
        </th>
        <th>
            <slot name="date"/>
        </th>
        <th>
            <slot name="action"/>
        </th>
    </tr>
</template>
<script setup>

const props = defineProps({
    status: null,
})


</script>
