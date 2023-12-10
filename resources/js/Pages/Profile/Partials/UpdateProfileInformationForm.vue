<script>
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import { Link, useForm, usePage } from "@inertiajs/vue3";
import axios from "axios";

export default {
    props: {
        mustVerifyEmail: {
            type: Boolean,
        },
        status: {
            type: String,
        },
    },
    setup() {
        function submit() {
            // form.patch(route("profile.update"));
            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("email", form.email);
            formData.append("avatar", form.avatar);
            formData.append("_method", "PATCH");
            // console.log(formData.get("name"));
            axios
                .post(route("profile.update"), formData)
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        form.recentlySuccessful = true;
                        setTimeout(() => {
                            form.recentlySuccessful = false;
                        }, 1000);
                    }
                });
        }
        // console.log("!!!!!!!!!!!!!!!!", usePage().props.auth.user);
        const user = usePage().props.auth.user;
        // const avatar = ref("avatar").value;

        const form = useForm({
            name: user.name,
            email: user.email,
            avatar: null,
        });

        return { form, submit, user };
    },
    components: {
        InputError,
        InputLabel,
        TextInput,
        PrimaryButton,
    },
};
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">
                Информация профиля
            </h2>

            <p class="mt-1 text-sm text-gray-600">
                Обновить информацию вашего профиля и эл. почту
            </p>
        </header>

        <form @submit.prevent="submit()" class="mt-6 space-y-6">
            <div>
                <InputLabel for="name" value="Имя" />

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <div>
                <InputLabel for="email" value="Эл. почта" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div v-if="mustVerifyEmail && user.email_verified_at === null">
                <p class="text-sm mt-2 text-gray-800">
                    Ваша электронная почта не подтверждена.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Нажмите здесь, чтобы повторно отправить письмо для
                        подтверждения.
                    </Link>
                </p>

                <div
                    v-show="status === 'verification-link-sent'"
                    class="mt-2 font-medium text-sm text-green-600"
                >
                    Новая ссылка верификации была отправлена на вашу почту.
                </div>
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing"
                    >Сохранить</PrimaryButton
                >

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p
                        v-if="form.recentlySuccessful"
                        class="text-sm text-gray-600"
                    >
                        Сохранено.
                    </p>
                </Transition>
            </div>
        </form>
    </section>
</template>
