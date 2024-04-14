<template>
    <div class="mx-8">
        <div>
            <p class="font-medium pb-4 ms-1">Имя</p>
            <SecondaryInput v-model="form.username" />
        </div>
        <div class="mt-4">
            <p class="font-medium pb-4 ms-1">Описание</p>
            <SecondaryContent
                v-model="form.description"
                placeholder="Пара_слов_о_себе"
            />
        </div>
        <div class="ms-1 flex justify-between items-center mt-5">
            <button
                @click="send()"
                class="font-semibold text-orange-500 hover:opacity-70"
            >
                Сохранить
            </button>
            <div class="flex items-center" v-show="isUpdated">
                <p>Сохранено</p>
                <IconCheck class="ms-1 w-4 h-4" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { usePage } from "@inertiajs/vue3";
import SettingsLayout from "./SettingsLayout.vue";
import SecondaryInput from "@/Components/Forms/Inputs/SecondaryInput.vue";
import SecondaryContent from "@/Components/Forms/SecondaryContent.vue";
import axios from "axios";
import IconCheck from "@/Components/Icons/IconCheck.vue";
import MainLayout from "@/Layouts/MainLayout.vue";

defineOptions({ layout: [MainLayout, SettingsLayout] });

const page = usePage();

const form = reactive({
    username: page.props.auth.user.name,
    description: page.props.auth.user.subsite?.description,
});

const isUpdated = ref(false);

const send = () => {
    axios
        .post(route("settings.profile.update"), {
            _method: "PUT",
            name: form.username,
            description: form.description,
        })
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            console.log(res);
            isUpdated.value = true;
            setTimeout(() => {
                isUpdated.value = false;
            }, 1000);
        });
};
</script>
