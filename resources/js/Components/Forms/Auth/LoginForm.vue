<template>
    <form class="my-5" @submit.prevent="submit()">
        <main>
            <!-- Email Address -->
            <div class="my-5">
                <SecondaryInput
                    v-focus
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
        </main>
        <footer>
            <PrimaryButton class="px-4 py-3 w-full" :class="buttonClass"
                >Войти</PrimaryButton
            >
        </footer>
    </form>
</template>
<script setup>
import { reactive, computed } from "vue";
import SecondaryInput from "../SecondaryInput.vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";

const emit = defineEmits(["login"]);

const submit = () => {
    emit("login", form);
};

const vFocus = {
    mounted: (el) => el.focus(),
};

const form = reactive({
    email: "",
    password: "",
});

const buttonClass = computed(() => {
    if (form.email != "" && form.password != "") {
        return "bg-orange-500 cursor-pointer";
    }
    return "bg-orange-200 cursor-not-allowed";
});
</script>
