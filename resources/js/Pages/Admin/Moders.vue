<template>
    <div>
        <section>
            <p>Выдать модерку по айдишнику</p>
            <input type="text"/>
            <button> Go</button>
        </section>
        Кол:во {{ moders?.length ?? 0 }}
        <div v-for="moder in moders" class="flex">
            <div>
                <p>{{ moder.id }}</p>
                <p> {{ moder.name }} </p>
            </div>
            <div>
                <button>Снять модерку</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
const props = defineProps({
    moders: null,
})

defineOptions({
    layout: PanelLayout
})
</script>
