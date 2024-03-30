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
    <!--    <div class="mx-auto w-full hover:bg-panelsemiprimary px-2">-->
    <!--        -->
    <!--        <div class="flex justify-between space-x-2">-->
    <!--            <div>-->
    <!--                <slot name="id"/>-->
    <!--            </div>-->

    <!--            <div>-->
    <!--                <slot name="title"/>-->
    <!--            </div>-->
    <!--            <div>-->
    <!--                <slot name="content"/>-->
    <!--            </div>-->

    <!--            <div>-->
    <!--                <slot name="timestamp"/>-->
    <!--            </div>-->
    <!--            <div class="flex justify-between space-x-4">-->
    <!--                <slot name="buttons"/>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
</template>
<script setup>
const props = defineProps({
    status: null,
})
</script>
