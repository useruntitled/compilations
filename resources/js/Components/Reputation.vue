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
import { ref, inject } from "vue";
import axios from "axios";
import IconUp from "./Icons/IconUp.vue";
import IconDown from "./Icons/IconDown.vue";

const callModal = inject("callModal");

const props = defineProps({
    type: {
        required: true,
        default: null,
    },
    reputation: null,
});

const current_action = ref(props.reputation.action ?? null);
const up = ref(props.reputation.up);
const down = ref(props.reputation.down);
const showModal = ref(null);

const setUp = async () => {
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

    await sendAction("down");
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
            if (res.status == 200 || res.status == 201) {
                up.value = res.data.up;
                down.value = res.data.down;
                current_action.value = res.data.action;
            }
            console.log(res);
        });
};
</script>
<!-- <script>

import Csrf from "@/Pages/shared/csrf.vue";
export default {
    inject: ["callModal"],
    props: {
        type: {
            required: true,
            default: null,
        },
        reputation: null,
    },
    data() {
        return {
            current_action: this.reputation.action,
            up: this.reputation.up,
            down: this.reputation.down,
            showModal: null,
        };
    },
    methods: {
        sendAction(action) {
            this.current_action = action;
            axios
                .post(route("new.reputation"), {
                    reputation_to_type: this.type,
                    reputation_to_id: this.reputation.reputation_to_id,
                    action: action,
                })
                .catch((res) => {
                    console.log(res);
                    if (res.response.status == 401) this.callModal("Auth");
                })
                .then((res) => {
                    if (res.status == 200 || res.status == 201) {
                        this.up = res.data.up;
                        this.down = res.data.down;
                        this.current_action = res.data.action;
                    }
                    console.log(res);
                });
        },
        setDown() {
            // this.current_action = "down";
            if (!this.reputation.action == "down") this.down++;
            this.sendAction("down");
        },
        setUp() {
            // this.current_action = "up";
            if (!this.reputation.action == "up") this.up++;
            this.sendAction("up");
        },
    },
    components: { AuthModal, IconUp, IconDown, Csrf },
};
</script> -->
