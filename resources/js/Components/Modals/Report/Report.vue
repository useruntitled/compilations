<template>
    <Modal :show="show" max-width="md" @close="emit('close')">
        <div class="bg-white">
            <header class="font-medium p-5 px-10 pb-4 text-lg border-b-2">
                Пожаловаться
            </header>
            <main class="p-5 px-10">
                <p class="mb-5 text-lgg">Выберите причину</p>
                <form @submit.prevent="submit" class="space-y-2">
                    <div
                        v-for="type in types"
                        :key="type.id"
                        class="flex items-center"
                    >
                        <input
                            type="radio"
                            v-model="selectedType"
                            :value="type.id"
                            :id="type.id"
                            class="appearance-none bg-gray-50 checked:bg-orange-500 checked:fill-orange-500 focus:fill-orange-500 focus:bg-orange-500 border-1 border-secondary border-opacity-10 text-lg text-orange-500 focus:ring-0"
                        />
                        <label
                            :for="type.id"
                            class="ms-4 py-2 cursor-pointer select-none"
                            >{{ type.label }}</label
                        >
                    </div>
                    <div class="text-end">
                        <PrimaryButton class="bg-orange-500 px-3">
                            Отправить
                        </PrimaryButton>
                    </div>
                </form>
            </main>
        </div>
    </Modal>
</template>
<script setup>
import { ref, inject } from "vue";
import Modal from "../Modal.vue";
import PrimaryButton from "../../Buttons/PrimaryButton.vue";
import { sendReport } from "./api.js";

const callMessage = inject("callMessage");

const selectedType = ref(null);

const types = [
    { id: "spam", label: "Спам" },
    { id: "rude", label: "Оскорбление" },
    { id: "violence", label: "Насилие" },
    { id: "illegal", label: "Нарушение закона" },
    { id: "other", label: "Другое" },
    { id: "lie", label: "Несоответствие" },
];

const props = defineProps({
    show: false,
    report_to_type: null,
    report_to_id: null,
});

const isLoading = ref(false);

const disabled = ref(false);

const submit = () => {
    if (!isLoading.value && !disabled.value) {
        isLoading.value = true;
        sendReport(
            {
                report_to_type: props.report_to_type,
                report_to_id: props.report_to_id,
                message: selectedType.value,
            },
            function () {
                emit("close");
                isLoading.value = false;
                disabled.value = true;
                callMessage("success", "Жалоба отправлена!");
            },
        );
    }
};

const emit = defineEmits(["close"]);
</script>
