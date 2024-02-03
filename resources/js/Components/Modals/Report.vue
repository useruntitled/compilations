<template>
    <Modal :show="show" max-width="md" @close="emit('close')">
        <div class="bg-white">
            <header class="font-medium p-5 px-10 pb-4 text-lg border-b-2">
                Пожаловаться
            </header>
            <main class="p-5 px-10">
                <p class="mb-5 text-lgg">Выберите причину</p>
                <form @submit.prevent="submit" class="space-y-2">
                    <div class="flex items-center">
                        <input
                            type="radio"
                            name="type"
                            class="before:content-[asdasd] border-1 border-secondary border-opacity-10 bg-bck focus:ring-0 text-lgg"
                            id="spam"
                        />
                        <label
                            for="spam"
                            class="ms-4 py-2 cursor-pointer select-none"
                            >Спам</label
                        >
                    </div>
                    <div class="flex items-center">
                        <input
                            type="radio"
                            name="type"
                            class="before:content-[asdasd] border-1 border-secondary border-opacity-10 bg-bck focus:ring-0 text-lgg"
                            id="rude"
                        />
                        <label
                            for="rude"
                            class="ms-4 py-2 cursor-pointer select-none"
                            >Оскорбление</label
                        >
                    </div>
                    <div class="flex items-center">
                        <input
                            type="radio"
                            name="type"
                            class="before:content-[asdasd] border-1 border-secondary border-opacity-10 bg-bck focus:ring-0 text-lgg"
                            id="violence"
                        />
                        <label
                            for="violence"
                            class="ms-4 py-2 cursor-pointer select-none"
                            >Насилие</label
                        >
                    </div>
                    <div class="flex items-center">
                        <input
                            type="radio"
                            name="type"
                            class="before:content-[asdasd] border-1 border-secondary border-opacity-10 bg-bck focus:ring-0 text-lgg"
                            id="illegal"
                        />
                        <label
                            for="illegal"
                            class="ms-4 py-2 cursor-pointer select-none"
                            >Нарушение закона</label
                        >
                    </div>
                    <div class="flex items-center">
                        <input
                            type="radio"
                            name="type"
                            class="before:content-[asdasd] border-1 border-secondary border-opacity-10 bg-bck focus:ring-0 text-lgg"
                            id="other"
                        />
                        <label
                            for="other"
                            class="ms-4 py-2 cursor-pointer select-none"
                        >
                            Другое
                        </label>
                    </div>
                    <div class="text-end">
                        <PrimaryButton class="bg-orange-500 px-3"
                            >Отправить</PrimaryButton
                        >
                    </div>
                </form>
            </main>
        </div>
    </Modal>
</template>
<script setup>
import { ref, watch } from "vue";
import Modal from "./Modal.vue";
import PrimaryButton from "../Buttons/PrimaryButton.vue";

const props = defineProps({
    show: false,
    report_to: null,
    report_to_id: null,
});

const emit = defineEmits(["close"]);
</script>
