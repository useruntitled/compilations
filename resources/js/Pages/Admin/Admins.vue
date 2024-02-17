<template>
    <div class="space-y-4">
        <section>
            <p>Выдать админку по айдишнику</p>
            <input type="text"/>
            <button> Go</button>
        </section>
        Кол-во {{ admins?.length ?? 0 }}
        <div v-for="admin in admins" class="border-b-2">
            <div>
                <div v-for="admin in admins">
                    <p>{{ admin.id }}</p>
                    <p> {{ admin.name }} </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";

const props = defineProps({
    admins: null,
})

defineOptions({
    layout: PanelLayout,
})
</script>
