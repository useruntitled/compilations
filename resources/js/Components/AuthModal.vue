<template>
    <Csrf></Csrf>
    <Modal :show="show" @close="$emit('close')">
        <div class="p-5">
            <!-- errors -->
            <div
                v-if="Object.keys(errors).length"
                class="bg-red-200 rounded px-2 py-3 my-2"
            >
                <div
                    v-for="error in Object.keys(errors)"
                    class="text-sm text-slate-900"
                >
                    {{ errors[error][0].replace("films", "фильмы") }}
                </div>
            </div>
            <form
                v-show="!showLogin"
                @submit.prevent="onSubmit"
                @submit="register()"
            >
                <!-- Name -->
                <div>
                    <label
                        class="block font-medium text-sm text-gray-700"
                        for="name"
                    >
                        Имя
                    </label>
                    <input
                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                        type="text"
                        name="name"
                        required
                        v-model="name"
                    />
                </div>
                <div>
                    <label
                        class="block font-medium text-sm text-gray-700"
                        for="username"
                    >
                        Юзернейм
                    </label>
                    <input
                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                        type="text"
                        name="username"
                        required
                        v-model="username"
                    />
                </div>

                <!-- Email Address -->
                <div class="mt-4">
                    <label
                        class="block font-medium text-sm text-gray-700"
                        for="email"
                    >
                        Эл. почта
                    </label>
                    <input
                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                        type="email"
                        name="email"
                        required
                        v-model="email"
                    />
                </div>

                <!-- Password -->
                <div class="mt-4">
                    <label
                        class="block font-medium text-sm text-gray-700"
                        for="password"
                    >
                        Пароль
                    </label>
                    <input
                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                        type="password"
                        name="password"
                        required
                        v-model="password"
                    />
                </div>

                <!-- Confirm Password -->
                <div class="mt-4">
                    <label
                        class="block font-medium text-sm text-gray-700"
                        for="password_confirmation"
                    >
                        Подтвердить пароль
                    </label>

                    <input
                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                        type="password"
                        name="password_confirmation"
                        required
                        v-model="password_confirmation"
                    />
                </div>

                <div class="flex items-center justify-end mt-4">
                    <a
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:cursor-pointer"
                        @click="showLogin = !showLogin"
                    >
                        Уже зарегистрированы?
                    </a>

                    <button
                        class="ml-4 inline-flex items-center px-4 py-2 bg-orange-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-orange-700 focus:bg-orange-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        type="submit"
                    >
                        Зарегистрироваться
                    </button>
                </div>
            </form>
            <form
                v-show="showLogin"
                @submit.prevent="onSubmit"
                @submit="login()"
            >
                <!-- Email Address -->
                <div class="mt-4">
                    <label
                        class="block font-medium text-sm text-gray-700"
                        for="email"
                    >
                        Эл. почта
                    </label>
                    <input
                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                        type="email"
                        name="email"
                        required
                        v-model="login_email"
                    />
                </div>

                <!-- Password -->
                <div class="mt-4">
                    <label
                        class="block font-medium text-sm text-gray-700"
                        for="password"
                    >
                        Пароль
                    </label>
                    <input
                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full"
                        type="password"
                        name="password"
                        required
                        v-model="login_password"
                    />
                </div>
                <div class="flex items-center justify-end mt-4">
                    <a
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:cursor-pointer"
                        @click="showLogin = !showLogin"
                    >
                        Зарегистрироваться
                    </a>

                    <button
                        class="ml-4 inline-flex items-center px-4 py-2 bg-orange-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-orange-700 focus:bg-orange-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        type="submit"
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    </Modal>
</template>
<script>
import axios from "axios";
import Modal from "./Modal.vue";
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
                    // console.log(res);
                    if (res.response.data.errors) {
                        this.errors = res.response.data.errors;
                    }
                })
                .then((res) => {
                    // console.log(res);
                    if (res.status == 200) {
                        location.reload();
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
                        location.reload();
                    }
                });
        },
    },
    components: { Modal },
};
</script>
