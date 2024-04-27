<template>
    <admin-table>
        <admin-row v-for="user in list.data" :key="user.id">
            <template #id>
                {{ user.id }}
            </template>
            <template #title>
                {{ user.name }}
            </template>
            <template #status>
                <p class="text-red-500" v-if="user.is_banned">Заблокирован</p>
                <p v-else>Активен</p>
            </template>
            <template #date>
                {{ user.created_at }}
            </template>
            <template #action>
                <Link :href="route('panel.view.user', [user.id])"
                    >Рассмотреть
                </Link>
            </template>
        </admin-row>
    </admin-table>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminRow from "@/Components/Admin/AdminRow.vue";
import { usePage } from "@inertiajs/vue3";
import PanelListLayout from "@/Layouts/PanelListLayout.vue";
import AdminTable from "@/Components/Admin/AdminTable.vue";

const props = defineProps({
    list: null,
    search: null,
});

const page = usePage();

defineOptions({
    layout: [PanelLayout, PanelListLayout],
});
</script>
