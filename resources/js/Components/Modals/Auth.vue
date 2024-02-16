<template>
    <Modal
        :show="show"
        @close="
            showModal = false;
            emit('close');
        "
        v-if="showModal"
    >
        <div class="md:px-20  p-5">
            <header class="text-center mx-auto w-full flex">
                <button
                    :class="{ 'bg-orange-400 text-white ': isLoginForm }"
                    @click="
                        currentForm = 'LoginForm';
                        errors = {};
                    "
                    class="mx-2 ms-0 px-4 py-2 rounded-lg text-black font-medium hover:bg-orange-400 hover:text-white w-full"
                >
                    Вход
                </button>
                <button
                    :class="{ 'bg-orange-400 text-white ': isRegisterForm }"
                    @click="
                        currentForm = 'RegisterForm';
                        errors = {};
                    "
                    class="mx-2 ms-0 px-4 py-2 rounded-lg text-black font-medium hover:bg-orange-400 hover:text-white w-full"
                >
                    Регистрация
                </button>
            </header>
            <div>
                <div
                    v-if="Object.keys(errors).length"
                    class="bg-red-200 rounded px-2 py-3 my-2"
                >
                    <div
                        v-for="error in Object.keys(errors)"
                        class="text-sm text-slate-900"
                    >
                        {{ errors[error][0] }}
                    </div>
                </div>
            </div>
            <main>
                <component
                    @register="register"
                    @login="login"
                    :is="forms[currentForm]"
                ></component>
            </main>
            <section class="space-x-4 w-full">
                <button class="w-full justify-center bg-[rgb(24,_24,_27)] rounded-2xl px-10 py-2 space-x-2 flex items-center" @click="openAuthWindow('yandex')">
                    <span><img class="w-7 h-7 inline-block" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0ZDM0YxRCIgZD0iTTIyIDQzYTIxIDIxIDAgMSAwIDAtNDIgMjEgMjEgMCAwIDAgMCA0MloiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjUuMyAzNS4xM2g0LjU3VjguODZoLTYuNjZjLTYuNyAwLTEwLjIyIDMuNDQtMTAuMjIgOC41IDAgNC4wMiAxLjkzIDYuNDMgNS4zNyA4Ljg4bC01Ljk5IDguODhoNC45N0wyNCAyNS4xOGwtMi4zMi0xLjU0Yy0yLjgtMS45LTQuMTctMy4zNi00LjE3LTYuNTQgMC0yLjc5IDEuOTctNC42OCA1LjcyLTQuNjhoMi4wNXYyMi43aC4wMVoiLz48L3N2Zz4=" alt=""></span>
                    <span class="text-white font-semibold">Войти с Яндекс ID</span>
                </button>
            </section>
        </div>
    </Modal>
</template>
<script setup>
import Modal from "./Modal.vue";
import {ref, computed, onUnmounted} from "vue";
import EmailVerificationForm from "@/Components/Forms/Auth/EmailVerificationForm.vue";
import LoginForm from "../Forms/Auth/LoginForm.vue";
import RegisterForm from "../Forms/Auth/RegisterForm.vue";
import axios from "axios";
import { router } from "@inertiajs/vue3";

const emit = defineEmits("close");

const props = defineProps({
    show: Boolean,
});

const listenClosedWindowStatus = (event) => {
    if(event?.data == 'auth.window.closed') {
        router.reload({preserveState: false});
        emit('close');
    }
}

const openAuthWindow = (provider) => {
    const auth = window.open(route('oauth.redirect', [provider]), '_blank', 'popup');
    window.addEventListener('message', listenClosedWindowStatus);
}

onUnmounted(() => {
    window.removeEventListener('message', listenClosedWindowStatus);
})

const currentForm = ref("RegisterForm");

const forms = {
    LoginForm,
    RegisterForm,
    EmailVerificationForm,
};

const isLoginForm = computed(() => {
    return currentForm.value == "LoginForm";
});

const isRegisterForm = computed(() => {
    return currentForm.value == "RegisterForm";
})

const showModal = ref(props.show);

const errors = ref({});

const setErrors = (res) => {
    if (res.response.data.errors) {
        errors.value = res.response.data.errors;
    }
};

const register = (form) => {
    axios
        .post(route("register"), {
            name: form.name,
            username: form.username,
            email: form.email,
            password: form.password,
            password_confirmation: form.password_confirmation,
        })
        .catch((res) => {
            console.log(res);
            setErrors(res);
        })
        .then((res) => {
            console.log(res);
            if (res.status === 200) {
                currentForm.value = 'EmailVerificationForm';
                const channel = new BroadcastChannel('auth.modal');
                channel.onmessage = e => {
                    if(e.data === 'close') {
                        emit('close');
                    }
                }
                // router.reload({ preserveState: false });
                // emit("close");
            }
        });
};

const login = (form) => {
    axios
        .post(route("login"), {
            email: form.email,
            password: form.password,
        })
        .catch((res) => {
            console.log(res);
            setErrors(res);
        })
        .then((res) => {
            console.log(res);
            if (res.status == 200) {
                router.reload({ preserveState: false });
                emit("close");
            }
        });
};
</script>
<!-- <script>
import axios from "axios";
import Modal from "./Modal.vue";
import { router } from "@inertiajs/vue3";
export default {
    emits: ["close"],
    props: {
        mode: String,
        show: Boolean,
        size: String,
        showLogin: Boolean,
    },
    data() {
        return {
            errors: {},
            showModal: this.show,
            name: null,
            username: null,
            email: null,
            password: null,
            password_confirmation: null,
            login_password: null,
            login_email: null,
        };
    },
    methods: {
        register() {
            axios
                .post(route("register"), {
                    name: this.name,
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                .catch((res) => {
                    console.log(res);
                    if (res.response.data.errors) {
                        this.errors = res.response.data.errors;
                    }
                })
                .then((res) => {
                    // console.log(res);
                    if (res.status == 200) {
                        let url = new URL(window.location.href);

                        if (url.searchParams.has("modal") == false) {
                            this.showModal = false;
                            location.reload();
                        } else {
                            url.searchParams.delete("modal");
                            window.history.pushState(null, null, url);
                            location.reload();
                        }
                    }
                });
        },
        login() {
            axios
                .post(route("login"), {
                    email: this.login_email,
                    password: this.login_password,
                })
                .catch((res) => {
                    // console.log(res);
                    if (res.response.data.errors) {
                        this.errors = res.response.data.errors;
                    }
                })
                .then((res) => {
                    // console.log(res);
                    if (res.status == 200) {
                        let url = new URL(
                            this.$page.props.app_url + this.$page.url
                        );
                        const interval = setInterval(() => {
                            if (url.searchParams.has("modal") == false) {
                                location.reload();
                                clearInterval(interval);
                            } else {
                                url.searchParams.delete("modal");
                                window.history.pushState(null, null, url);
                            }
                        }, 20);
                    }
                });
        },
    },
    mounted() {
        console.log("Auth modal");
        if (this.$page.props.auth.check) {
            this.$emit("close");
        }
    },
    components: { Modal },
};
</script> -->
