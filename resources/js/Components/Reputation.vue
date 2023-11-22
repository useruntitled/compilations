<template>
    <div class="text-sm">
        <Csrf></Csrf>
        <!-- <p>Up: {{ reputation["up"] }}</p> -->
        <!-- <p>Down: {{ reputation["down"] }}</p> -->

        <span>{{ up }}</span>
        <!-- icon up -->
        <button @click.prevent="setUp()">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 inline text-green-300 hover:text-green-500"
                :class="current_action == 'up' ? 'stroke-green-500' : ''"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
            </svg>
        </button>
        <span>{{ down }}</span>
        <!-- icon down -->
        <button @click.prevent="setDown()">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 inline text-red-300 hover:text-red-500"
                :class="current_action == 'down' ? 'stroke-red-500' : ''"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>
        </button>
    </div>
    <AuthModal :show="showModal" @close="showModal = !showModal"></AuthModal>
</template>
<script>
import axios from "axios";
import AuthModal from "./AuthModal.vue";
export default {
    props: {
        type: null,
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
            // i can do that with formdata for chosing post_id or comment_id
            if (this.type == "post" || this.type == null) {
                axios
                    .post(route("reputation.post"), {
                        _method: "PATCH",
                        post_id: this.reputation.post_id,
                        action: action,
                    })
                    .catch((res) => {
                        console.log(res);
                        if (res.response.status == 401) {
                            this.showModal = true;
                        }
                    })
                    .then((res) => {
                        if (res.status == 200 || res.status == 201) {
                            this.up = res.data.up;
                            this.down = res.data.down;
                            if (this.current_action == action) {
                                this.current_action = null;
                                return;
                            }
                            this.current_action = action;
                        }
                        console.log(res);
                    });
            } else if (this.type == "comment") {
                axios
                    .post(route("comment.reputation.post"), {
                        _method: "PATCH",
                        comment_id: this.reputation.comment_id,
                        action: action,
                    })
                    .catch((res) => {
                        console.log(res);
                        if (res.response.status == 401) {
                            this.showModal = true;
                        }
                    })
                    .then((res) => {
                        if (res.status == 200 || res.status == 201) {
                            this.up = res.data.up;
                            this.down = res.data.down;
                            if (this.current_action == action) {
                                this.current_action = null;
                                return;
                            }
                            this.current_action = action;
                        }
                        console.log(res);
                    });
            } else if (this.type == "reply") {
                axios
                    .post(route("reply.reputation.post"), {
                        _method: "PATCH",
                        reply_id: this.reputation.reply_id,
                        action: action,
                    })
                    .catch((res) => {
                        console.log(res);
                        if (res.response.status == 401) {
                            this.showModal = true;
                        }
                    })
                    .then((res) => {
                        if (res.status == 200 || res.status == 201) {
                            this.up = res.data.up;
                            this.down = res.data.down;
                            if (this.current_action == action) {
                                this.current_action = null;
                                return;
                            }
                            this.current_action = action;
                        }
                        console.log(res);
                    });
            }
        },
        setDown() {
            // this.current_action = "down";
            this.sendAction("down");
        },
        setUp() {
            // this.current_action = "up";
            this.sendAction("up");
        },
    },
    components: { AuthModal },
};
</script>
