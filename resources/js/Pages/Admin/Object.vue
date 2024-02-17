<template>
    <div>
        <header>
            <p>
                id: {{ report_to.id }}
            </p>
            <p>
                {{ report_to}}
            </p>
            <p>
                <img class="max-h-40" :src="route('im', [report_to.image, 200])" alt="">
            </p>
        </header>
        <main class="mt-10">
            <button>Удалить/Скрыть</button>
        </main>
    </div>
</template>
<script setup>

import PanelLayout from "@/Layouts/PanelLayout.vue";

const props = defineProps({
    report_to: null,
});

defineOptions({
    layout: PanelLayout
})
</script>
