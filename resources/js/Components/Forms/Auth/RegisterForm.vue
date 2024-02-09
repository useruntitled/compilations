<template>
    <form class="my-5" @submit.prevent="submit()">
        <main>
            <div class="my-5">
                <SecondaryInput
                    v-focus
                    v-model="form.name"
                    placeholder="Имя"
                ></SecondaryInput>
            </div>
            <div class="my-5">
                <SecondaryInput
                    v-model="form.username"
                    placeholder="Юзернейм"
                ></SecondaryInput>
            </div>
            <!-- Email Address -->
            <div class="my-5">
                <SecondaryInput
                    type="email"
                    v-model="form.email"
                    placeholder="Эл. почта"
                ></SecondaryInput>
            </div>

            <!-- Password -->
            <div class="my-5">
                <SecondaryInput
                    type="password"
                    v-model="form.password"
                    placeholder="Пароль"
                ></SecondaryInput>
            </div>
            <div class="my-5">
                <SecondaryInput
                    type="password"
                    v-model="form.password_confirmation"
                    placeholder="Подтвердить пароль"
                ></SecondaryInput>
            </div>
        </main>
        <footer>
            <PrimaryButton class="px-4 w-full py-3" :class="buttonClass"
                >Зарегистрироваться</PrimaryButton
            >
        </footer>
    </form>
</template>
<script setup>
import { reactive, computed } from "vue";
import SecondaryInput from "../SecondaryInput.vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";

const emit = defineEmits(["register"]);

const submit = () => {
    emit("register", form);
};

const vFocus = {
    mounted: (el) => el.focus(),
};

const form = reactive({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const buttonClass = computed(() => {
    if (form.email != "" && form.password != "") {
        return "bg-orange-500 cursor-pointer";
    }
    return "bg-orange-200 cursor-not-allowed";
});
</script>
