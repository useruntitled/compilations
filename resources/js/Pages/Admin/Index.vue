<template>
        <main>
            <p class="font-semibold mb-5 text-lgg">
                Жалобы
            </p>
            <div>
                <div v-for="report in reports">
                    {{ report }}
                </div>
            </div>
        </main>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";

defineOptions({
    layout: PanelLayout,
})

const props = defineProps({
    reports: null,
})
</script>
