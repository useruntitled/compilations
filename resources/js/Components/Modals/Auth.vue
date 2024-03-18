<template>
    <Modal
        :show="show"
        @close="
            showModal = false;
            emit('close');
        "
        v-if="showModal"
    >
        <div class="md:px-20  sm:p-5 xs:px-2  py-20">
<!--            <header class="text-center mx-auto w-full flex">-->
<!--                <button-->
<!--                    :class="{ 'bg-orange-400 text-white ': isLoginForm }"-->
<!--                    @click="-->
<!--                        currentForm = 'LoginForm';-->
<!--                        errors = {};-->
<!--                    "-->
<!--                    class="mx-2 ms-0 px-4 py-2 rounded-lg text-black font-medium hover:bg-orange-400 hover:text-white w-full"-->
<!--                >-->
<!--                    Вход-->
<!--                </button>-->
<!--                <button-->
<!--                    :class="{ 'bg-orange-400 text-white ': isRegisterForm }"-->
<!--                    @click="-->
<!--                        currentForm = 'RegisterForm';-->
<!--                        errors = {};-->
<!--                    "-->
<!--                    class="mx-2 ms-0 px-4 py-2 rounded-lg text-black font-medium hover:bg-orange-400 hover:text-white w-full"-->
<!--                >-->
<!--                    Регистрация-->
<!--                </button>-->
<!--            </header>-->
<!--            <div>-->
<!--                <div-->
<!--                    v-if="Object.keys(errors).length"-->
<!--                    class="bg-red-200 rounded px-2 py-3 my-2"-->
<!--                >-->
<!--                    <div-->
<!--                        v-for="error in Object.keys(errors)"-->
<!--                        class="text-sm text-slate-900"-->
<!--                    >-->
<!--                        {{ errors[error][0] }}-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <main>-->
<!--                <component-->
<!--                    @register="register"-->
<!--                    @login="login"-->
<!--                    :is="forms[currentForm]"-->
<!--                ></component>-->
<!--            </main>-->
            <section class="w-full space-y-10">
                <button class="w-full justify-center bg-[rgb(24,_24,_27)] rounded-2xl px-10 py-2 space-x-2 flex items-center" @click="openAuthWindow('yandex')">
                    <span>
                        <icon-yandex class="w-7 h-7"></icon-yandex>
                    </span>
                    <span class="text-white font-semibold">Войти с Яндекс ID</span>
                </button>
                <button @click="openAuthWindow('vkontakte')"
                        class="w-full space-x-2 justify-center border-2 bg-[#0077ff] rounded-2xl px-10 py-2 flex items-center">
                    <span>
                        <icon-vkontakte class="w-7 h-7"></icon-vkontakte>
                    </span>
                    <span class="text-white font-semibold ">
                        Войти с VK ID
                    </span>
                </button>
                <button @click="openAuthWindow('google')" class="w-full space-x-2 justify-center border-2 bg-white rounded-2xl px-10 py-2 flex items-center">
                    <span >
                        <icon-google class="w-7 h-7"></icon-google>
                    </span>
                    <span class="text-black font-semibold ">
                        Войти с Google
                    </span>
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
import IconGoogle from "@/Components/Icons/IconGoogle.vue";
import IconVkontakte from "@/Components/Icons/IconVkontakte.vue";
import IconYandex from "@/Components/Icons/IconYandex.vue";

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
