<template>
    <div v-if="showModal == true">
        <component
            :is="modals[calledModal]"
            :show="showModal"
            @close="closeModal()"
        />
    </div>
</template>
<script setup>
import { usePage } from "@inertiajs/vue3";
import Auth from "./Auth.vue";
import Editor from "./Editor.vue";
import { ref, computed, watch, onMounted, inject, watchEffect } from "vue";
const props = defineProps({
    modalIsClosed: Boolean,
    callModal: {
        type: String,
        default: null,
    },
});
const emit = defineEmits(["closeModal"]);

const modals = {
    Auth: Auth,
    Editor: Editor,
};

const injectedCallModal = inject("callModal");

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
            emit("closeModal");
        }
    }
);

const calledModalByQuery = computed(() => {
    if (url.value.searchParams.has("modal")) {
        return url.value.searchParams.get("modal");
    }
    return null;
});

const url = computed(() => {
    return new URL(window.location.href);
});

const showModal = ref(false);
const calledModal = ref(null);

const setQuery = () => {
    url.value.searchParams.append("modal", calledModal.value);
    window.history.pushState(null, null, url.value);
};
const unsetQuery = () => {
    url.value.searchParams.delete("modal");
    url.value.searchParams.delete("id");
    window.history.pushState(null, null, url.value);
};

const showModalFunc = (modal) => {
    showModal.value = true;
    calledModal.value = modal;
    setQuery();
};

const callModalFunc = (modal) => {
    console.log("Call modal");
    console.log(url.value);
    if (!page.props.auth.check) {
        showModalFunc("Auth");
    } else {
        showModalFunc(modal);
        injectedCallModal(calledModalByQuery.value);
    }
};

const closeModal = () => {
    showModal.value = false;
    unsetQuery();
};
</script>
<!-- <script>
import Auth from "./Auth.vue";
import Editor from "./Editor.vue";
export default {
    props: {
        modalIsClosed: null,
        callModal: null,
    },
    data() {
        return {
            modalName: "Auth",
            showModal: false,
            isClosed: this.modalIsClosed,
            modalIsCalled: false,
            url: new URL(this.$page.props.app_url + this.$page.url),
        };
    },
    watch: {
        callModal: function (newValue, oldValue) {
            if (newValue != null) {
                this.callModalFunction();
            }
        },
        modalIsClosed: function (newValue, oldValue) {
            if (newValue == true) {
                this.closeModal();
            }
        },
        "this.$page.url": function (newValue, oldValue) {
            console.log(newValue);
        },
    },
    methods: {
        callModalFunction(modalName = null) {
            let url = new URL(this.$page.props.app_url + this.$page.url);

            modalName = modalName ?? this.callModal;

            // Если пользователь не авторизован, но пытается открыть не окно регистрации, то вызвать ему окно регистрации
            if (modalName != "Auth" && !this.$page.props.auth.user) {
                const interval = setInterval(() => {
                    if (url.searchParams.get("modal") == "Auth") {
                        clearInterval(interval);
                    } else {
                        url.searchParams.delete("modal");
                        window.history.pushState(null, null, url);
                        url.searchParams.append("modal", "Auth");
                        window.history.pushState(null, null, url);
                    }
                }, 20);

                this.callModalFunction("Auth");
            } else {
                if (
                    (modalName == "Auth" && !this.$page.props.auth.user) ||
                    (modalName != "Auth" && this.$page.props.auth.user)
                ) {
                    url.searchParams.append("modal", this.callModal);
                    window.history.pushState(null, null, url);
                    this.modalName = modalName;
                    this.showModal = true;
                } else {
                    const interval = setInterval(() => {
                        if (url.searchParams.has("modal") == false) {
                            clearInterval(interval);
                        } else {
                            url.searchParams.delete("modal");
                            window.history.pushState(null, null, url);
                        }
                    }, 20);
                }
            }
        },
        closeModal() {
            let url = new URL(this.$page.props.app_url + this.$page.url);
            let params = new URLSearchParams(url.search);
            this.showModal = false;
            params.delete("modal");
            url.searchParams.delete("modal");
            window.history.pushState(null, null, url);
            this.isClosed = true;
            this.$emit("closeModal");
        },
        normalizeParamName(name) {
            name = name.charAt(0).toUpperCase() + name.slice(1);
            return name;
        },
    },
    mounted() {
        if (this.url.searchParams.has("modal")) {
            this.callModalFunction(
                this.normalizeParamName(this.url.searchParams.get("modal"))
            );
        }
    },
    components: {
        Auth,
        Editor,
    },
    emits: ["closeModal"],
};
</script> -->
