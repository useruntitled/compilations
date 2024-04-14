<template>
    <modal @close="emit('close')" :show="show" color="panelsemiprimary">
        <div class="px-10 py-10">
            <p class="font-semibold">Введите причину</p>
            <SecondaryInput
                v-model="reason"
                placeholder="Причина"
                class="mt-5"
                bg-color="panelbck"
                primary-color="panelsemiprimary"
                secondary-color="gray-500"
            />
            <flat-primary-button
                primary-color="gray-500"
                class="mt-5"
                @click="execute()"
                >Выполнить
            </flat-primary-button>
        </div>
    </modal>
</template>
<script setup>
import Modal from "@/Components/Modals/Modal.vue";
import SecondaryInput from "@/Components/Forms/Inputs/SecondaryInput.vue";
import FlatPrimaryButton from "@/Components/Buttons/FlatPrimaryButton.vue";
import { ref, watch } from "vue";

const props = defineProps({
    show: false,
    id: null,
    route: null,
    withoutInput: false,
});

watch(
    () => props.show,
    (value) => {
        if (props.withoutInput === true && value === true) {
            execute();
            emit("close");
        }
    },
);

const reason = ref(null);

const execute = () => {
    axios
        .post(route(props.route), {
            _method: "PUT",
            id: props.id,
            reason: reason.value,
        })
        .then((res) => {
            if (res.status === 200) emit("close");
        });
};

const emit = defineEmits(["close"]);
</script>
