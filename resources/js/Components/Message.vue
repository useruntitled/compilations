<template>
    <Transition name="message" v-if="(mode = 'success')">
        <div
            v-show="showMessage"
            class="bg-emerald-50 my-5 mx-5 p-5 text-sm border border-1/2 border-emerald-150 rounded-xl fixed left-0 bottom-0 min-w-xs max-w-xs"
            ref="success_message"
        >
            <p class="text-center font-semibold text-emerald-700">Успех!</p>
        </div>
    </Transition>
</template>
<script>
export default {
    props: {
        showMessage: null,
        mode: null,
    },
    updated() {
        setTimeout(() => this.$emit("closeMessage"), 2000);
    },
};
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
