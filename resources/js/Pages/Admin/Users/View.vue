<template>
    <admin-view-card title="Пользователь" :object="user">
        <template #description>
            <user-tablet :user="user"/>
            <p>Имя: {{ user?.name }}</p>
            <div v-for="role in user?.roles">
                {{ role.role }}
            </div>
            <div v-if="user.is_banned">
                Пользователь заблокирован
            </div>
        </template>
        <template #footer>
            <button v-if="!user.is_admin && !user.is_moder" @click="showModal = true">
                Заблокировать
            </button>
            <div v-if="accessToAttachRoles" class="space-x-4">
                <button @click="toggleModer()">Дать модерку/Забрать модерку</button>
            </div>
        </template>
    </admin-view-card>

    <decline-modal :show="showModal" @close="showModal = false" route="panel.ban.user" :id="user.id"/>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminViewCard from "@/Components/Admin/AdminViewCard.vue";
import UserTablet from "@/Components/UserTablet.vue";
import {usePage} from "@inertiajs/vue3";
import {computed, ref} from "vue";
import DeclineModal from "@/Components/Admin/DeclineModal.vue";

defineOptions({
    layout: PanelLayout,
})

const page = usePage();

const accessToAttachRoles = computed(() => {
    return page.props.auth.access_level == 2 && !props.user.is_admin;
})

const toggleModer = () => {
    axios.post(route('panel.user.toggle.moder'), {
        '_method': 'PUT',
        id: props.user.id,
    })
}

const showModal = ref(false);

const props = defineProps({
    user: null,
})
</script>
