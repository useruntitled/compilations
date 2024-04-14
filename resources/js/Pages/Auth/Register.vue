<script setup>
import InputError from "@/Components/Forms/Inputs/InputError.vue";
import InputLabel from "@/Components/Forms/Inputs/InputLabel.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import IconUser from "@/Components/Icons/IconUser.vue";
import IconMail from "@/Components/Icons/IconMail.vue";
import IconShieldDanger from "@/Components/Icons/IconShieldDanger.vue";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <Head title="Зарегистрироваться" />

    <form @submit.prevent="submit">
        <div>
            <InputLabel for="name" value="Никнейм" />

            <div class="flex items-center">
                <IconUser
                    class="absolute pl-2 fill-slate-400 stroke-slate-400"
                ></IconUser>
                <input
                    id="name"
                    type="text"
                    class="mt-1 pl-10 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />
            </div>

            <InputError class="mt-2" :message="form.errors.name" />
        </div>

        <div class="mt-4">
            <InputLabel for="email" value="Эл. почта" />

            <div class="flex items-center">
                <IconMail
                    class="absolute pl-2 fill-slate-400 stroke-white"
                ></IconMail>
                <input
                    id="email"
                    type="email"
                    class="mt-1 pl-10 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                />
            </div>

            <InputError class="mt-2" :message="form.errors.email" />
        </div>

        <div class="mt-4">
            <InputLabel for="password" value="Пароль" />

            <div class="flex items-center">
                <IconShieldDanger
                    class="absolute pl-2 fill-slate-400 stroke-white stroke-2"
                ></IconShieldDanger>
                <input
                    id="password"
                    type="password"
                    class="mt-1 pl-10 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                />
            </div>

            <InputError class="mt-2" :message="form.errors.password" />
        </div>

        <div class="mt-4">
            <InputLabel
                for="password_confirmation"
                value="Подтвердить пароль"
            />

            <div class="flex items-center">
                <IconShieldDanger
                    class="absolute pl-2 fill-slate-400 stroke-white stroke-2"
                ></IconShieldDanger>
                <input
                    id="password_confirmation"
                    type="password"
                    class="mt-1 pl-10 block w-full"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                />
            </div>

            <InputError
                class="mt-2"
                :message="form.errors.password_confirmation"
            />
        </div>

        <div class="flex items-center justify-end mt-4">
            <Link
                :href="route('login')"
                class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Уже зарегистрированы?
            </Link>

            <primary-button
                class="ml-4"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
            >
                Зарегистрироваться
            </primary-button>
        </div>
    </form>
</template>
