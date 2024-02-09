<template>
    <Csrf></Csrf>
    <Modal
        :show="show"
        @close="
            showModal = false;
            emit('close');
        "
        v-if="showModal"
    >
        <div class="px-20 p-5">
            <header class="text-center mx-auto">
                <button
                    :class="{ 'bg-gray-100 ': isLoginForm }"
                    @click="
                        currentForm = 'LoginForm';
                        errors = {};
                    "
                    class="mx-2 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
                >
                    Вход
                </button>
                <button
                    :class="{ 'bg-gray-100 ': !isLoginForm }"
                    @click="
                        currentForm = 'RegisterForm';
                        errors = {};
                    "
                    class="mx-2 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
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
        </div>
    </Modal>
</template>
<script setup>
import Modal from "./Modal.vue";
import { ref, computed } from "vue";
import LoginForm from "../Forms/Auth/LoginForm.vue";
import RegisterForm from "../Forms/Auth/RegisterForm.vue";
import axios from "axios";
import { router } from "@inertiajs/vue3";

const emit = defineEmits("close");

const props = defineProps({
    show: Boolean,
});

const currentForm = ref("LoginForm");

const forms = {
    LoginForm,
    RegisterForm,
};

const isLoginForm = computed(() => {
    return currentForm.value == "LoginForm";
});

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
            if (res.status == 200) {
                router.reload({ preserveState: false });
                emit("close");
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
