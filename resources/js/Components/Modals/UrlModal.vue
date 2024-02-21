<template>
    <div v-if="showModal == true">
        <component
            :is="modals[calledModal]"
            :show="showModal"
            @close="
                showModal = false;
                closeModal();
            "
        />
    </div>
</template>
<script setup>
import { router, usePage } from "@inertiajs/vue3";
import Auth from "./Auth.vue";
import Editor from "./Editor.vue";
import { ref, computed, watch, onMounted, inject, nextTick } from "vue";
const props = defineProps({
    modalIsClosed: Boolean,
    callModal: {
        type: String,
        default: null,
    },
});

const modals = {
    Auth: Auth,
    Editor: Editor,
};

const injectedCallModal = inject("callModal");
const injectedCloseModal = inject("closeModal");

const page = usePage();

onMounted(() => {
    console.log(url.value);

    if (calledModalByQuery.value != null) {
        callModalFunc(calledModalByQuery.value);
    }
});

watch(
    () => props.callModal,
    (newValue, oldValue) => {
        if (newValue != null) callModalFunc(newValue);
    }
);
watch(
    () => props.modalIsClosed,
    (newValue, oldValue) => {
        if (newValue == true) {
            console.log("Modal is closed");
            injectedCloseModal();
        }
    }
);

const calledModalByQuery = computed(() => {
    const uri = new URL(window.location.href);
    if (uri.searchParams.has("modal")) {
        return uri.searchParams.get("modal");
    }
    return null;
});

const url = computed(() => {
    return new URL(window.location.href);
});

const showModal = ref(false);
const modalIsOpened = ref(false);
const calledModal = ref(null);

// const setQuery = () => {
//     const uri = new URL(window.location.href);
//     if (!uri.searchParams.has("modal")) {
//         uri.searchParams.append("modal", calledModal.value);
//         console.log("Query set:", uri);
//         window.history.pushState(null, null, uri);
//         // router.reload({preserveState: true});
//         router.visit(uri, {
//             method: 'get',
//             replace: true,
//             preserveState: true,
//             preserveScroll: true,
//             onFinish: visit => {modalIsOpened.value = showModal.value},
//         })
//     }
// };
const unsetQuery = () => {
    const uri = new URL(window.location.href);
    uri.searchParams.delete("modal");
    uri.searchParams.delete("id");
    console.log("Unset query:", uri);
    window.history.pushState(null, null, uri);
    // router.reload({preserveState: true});
    // router.visit(uri, {
    //     method: 'get',
    //     replace: true,
    //     preserveState: true,
    //     preserveScroll: true,
    //     onFinish: visit => {modalIsOpened.value = showModal.value},
    // })
};

const showModalFunc = (modal) => {
    showModal.value = true;
    calledModal.value = modal;
    // setQuery();
};

const callModalFunc = (modal) => {
    console.log("Call modal", modal);
    console.log(url.value);
    if (!page.props.auth.check) {
        showModalFunc("Auth");
    } else {
        showModalFunc(modal);
        injectedCallModal(calledModalByQuery.value);
    }
};

const closeModal = () => {
    injectedCloseModal();
    showModal.value = false;
    unsetQuery();
};
</script>
