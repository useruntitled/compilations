<template>
    <div class="text-sm flex">
        <div class="inline-block hover:text-green-700 flex items-center me-2">
            <span class="me-1">{{ up }}</span>
            <button
                @click.prevent="onClick('up')"
                class="p-1 rounded-full text-green-300 hover:text-green-500 hover:bg-green-100"
                :class="current_action === 'up' ? 'text-green-500' : ''"
            >
                <IconUp class="w-6 h-6" />
            </button>
        </div>
        <div class="inline-block hover:text-red-700 flex items-center">
            <span class="me-1">{{ down }}</span>
            <button
                @click.prevent="onClick('down')"
                class="p-1 rounded-full hover:bg-red-100 text-red-300 hover:text-red-500"
                :class="current_action === 'down' ? 'text-red-500' : ''"
            >
                <IconDown class="w-6 h-6" />
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref, inject } from "vue";
import IconUp from "@/Components/Icons/IconUp.vue";
import IconDown from "@/Components/Icons/IconDown.vue";
import { usePage } from "@inertiajs/vue3";
import { reputationApi } from "@/api/reputationApi.js";

const callModal = inject("callModal");

const props = defineProps({
    type: {
        required: true,
        default: null,
    },
    reputation: null,
});

const page = usePage();

const authorize = () => {
    if (page.props.auth.check === false) {
        callModal("Auth");
        return false;
    }
    return true;
};

const current_action = ref(props.reputation.action ?? null);
const up = ref(props.reputation.up);
const down = ref(props.reputation.down);

const onClick = (action) => {
    if (authorize()) {
        if (action === current_action.value) {
            return destroy();
        }

        if (action !== current_action.value && current_action.value != null) {
            return update(action);
        }

        if (current_action.value === null) {
            return store(action);
        }
    }
};

const store = (action) => {
    reputationApi.store(props.reputation.reputation_to_id, props.type, action);
    if (action === "up") {
        up.value++;
    } else {
        down.value++;
    }
    current_action.value = action;
};

const update = (action) => {
    reputationApi.update(props.reputation.id, action);
    if (action === "up") {
        up.value++;
        down.value--;
    } else {
        up.value--;
        down.value++;
    }
    current_action.value = action;
};

const destroy = () => {
    reputationApi.destroy(props.reputation.id, props.type);
    if (current_action.value === "up") {
        up.value--;
    } else {
        down.value--;
    }
    current_action.value = null;
};
</script>
