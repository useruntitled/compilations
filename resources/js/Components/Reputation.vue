<template>
    <div class="text-sm flex">
        <!-- <p>Up: {{ reputation["up"] }}</p> -->
        <!-- <p>Down: {{ reputation["down"] }}</p> -->

        <!-- icon up -->
        <div class="inline-block hover:text-green-700 flex items-center me-2">
            <span class="me-1">{{ up }}</span>
            <button
                @click.prevent="setUp()"
                class="p-1 rounded-full text-green-300 hover:text-green-500 hover:bg-green-100"
                :class="current_action == 'up' ? 'text-green-500' : ''"
            >
                <IconUp class="w-6 h-6"></IconUp>
            </button>
        </div>
        <div class="inline-block hover:text-red-700 flex items-center">
            <span class="me-1">{{ down }}</span>
            <!-- icon down -->
            <button
                @click.prevent="setDown()"
                class="p-1 rounded-full hover:bg-red-100 text-red-300 hover:text-red-500"
                :class="current_action == 'down' ? 'text-red-500' : ''"
            >
                <IconDown class="w-6 h-6"></IconDown>
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref, inject, computed } from "vue";
import axios from "axios";
import IconUp from "./Icons/IconUp.vue";
import IconDown from "./Icons/IconDown.vue";
import { usePage } from "@inertiajs/vue3";

const callModal = inject("callModal");

const props = defineProps({
    type: {
        required: true,
        default: null,
    },
    reputation: null,
});

const page = usePage();

const access = () => {
    if (page.props.auth.check == false) {
        callModal("Auth");
        return false;
    }
    return true;
};

const current_action = ref(props.reputation.action ?? null);
const up = ref(props.reputation.up);
const down = ref(props.reputation.down);
const showModal = ref(null);

const setUp = async () => {
    if (!access()) return;

    if (current_action.value != "up") {
        if (current_action.value != null) {
            down.value -= 1;
        }
        current_action.value = "up";
        up.value += 1;
    } else {
        up.value -= 1;
        current_action.value = null;
    }

    await sendAction("up");
};

const setDown = async () => {
    if (!access()) return;
    if (current_action.value != "down") {
        if (current_action.value != null) {
            up.value -= 1;
        }
        current_action.value = "down";
        down.value += 1;
    } else {
        down.value -= 1;
        current_action.value = null;
    }

    sendAction("down");
};

const sendAction = async (action) => {
    await axios
        .post(route("new.reputation"), {
            reputation_to_type: props.type,
            reputation_to_id: props.reputation.reputation_to_id,
            action: action,
        })
        .catch((res) => {
            console.log(res);
            if (res.response.status == 401) callModal("Auth");
        })
        .then((res) => {
            console.log(res);
        });
};
</script>
