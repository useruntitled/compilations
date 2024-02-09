<template>
    <div class="py-1">
        <button
            class="text-base text-black hover:bg-neutral-100 rounded-lg px-5 flex items-center"
        >
            <IconFlag class="stroke-2 inline-block me-2 w-5 h-5"></IconFlag>
            <span>Пожаловаться</span>
        </button>
    </div>
</template>
<script>
import IconFlag from "../Icons/IconFlag.vue";

export default { components: { IconFlag } };
</script>
