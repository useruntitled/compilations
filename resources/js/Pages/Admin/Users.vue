<template>
    <div v-for="user in users" class="flex justify-between items-center">
        <div>
            {{ user.name }}
        </div>
        <div>
            <button @click="ban(user.id)">
                Забанить
            </button>
        </div>
    </div>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";


defineOptions({
    layout: PanelLayout
})

const props = defineProps({
    users: null,
})

const ban = (id) => {
    axios.post(route('panel.user.ban'), {
        _method: 'PATCH',
        id: id,
    })
}
</script>
