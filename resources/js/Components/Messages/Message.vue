<template>
    <Teleport to="body">
        <div class="z-[100] absolute" v-if="messages.length > 0">
            <Transition name="message">
                <div>
                    <div v-for="msg in messages">
                        <div
                            class="bg-white my-5 mx-5 px-5 py-2 rounded-lg fixed right-0 min-w-xs max-w-x"
                            style="top: 65.6px"
                            v-if="msg.message != null"
                        >
                            <div class="flex items-center">
                                <div
                                    class="p-[1px] me-2"
                                >
                                    <icon-check v-show="msg.type === 'success'"
                                        class="w-5 h-5 stroke-2 text-white bg-green-400 rounded-full"
                                    ></icon-check>
                                    <icon-circle-cross
                                        v-show="msg.type === 'error'"
                                        class="w-5 h-5 text-white"></icon-circle-cross>

                                </div>
                                <p class="text-center font-medium">
                                    {{ msg.message }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>
<script setup>
import { watch, ref } from "vue";
import IconCheck from "../Icons/IconCheck.vue";
import IconCircleCross from "@/Components/Icons/IconCircleCross.vue";

const props = defineProps({
    message: null,
});

const messages = ref([]);

watch(props.message, (newValue, oldValue) => {
    if (newValue.type != null && newValue.message != null) {
        console.log("NOT NULL", newValue);
        const newVal = newValue;
        messages.value.unshift(newValue);
        console.log(messages.value[0]);
        // setTimeout(() => {
        //     const listIndex = messages.value.findIndex(
        //         (obj) => (obj.message = message.message)
        //     );
        //     messages.value.splice(listIndex, 1);
        //     console.log("SPLICE!");
        // }, 2000);
    } else {
        console.log("NULL", newValue);
        console.log(messages.value[0]);
    }
});
</script>
<style>
.message-enter-active,
.message-leave-active {
    transition: opacity 0.5s ease;
}

.message-enter-from,
.message-leave-to {
    opacity: 0;
}
</style>
