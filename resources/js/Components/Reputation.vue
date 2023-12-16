<template>
    <div class="text-sm flex">
        <Csrf></Csrf>
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
                <IconUp></IconUp>
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
                <IconDown></IconDown>
            </button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import AuthModal from "./AuthModal.vue";
import IconUp from "./Icons/IconUp.vue";
import IconDown from "./Icons/IconDown.vue";
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
                            this.callAuthModal();
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
                            this.callAuthModal();
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
                            this.callAuthModal();
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
            } else {
                console.log("Reputation error: incorrect type", this.type);
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
    components: { AuthModal, IconUp, IconDown },
};
</script>
