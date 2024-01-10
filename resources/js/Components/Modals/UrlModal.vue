<template>
    <div v-if="showModal == true">
        <component :is="modalName" :show="showModal" />
    </div>
</template>
<script>
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
    // mounted() {
    //     setInterval(() => {
    //         // if (window.location.hash == "#modal=auth") {
    //         //     this.showModal = true;
    //         // }
    //         let url = new URL(this.$page.props.app_url + this.$page.url);

    //         // Получаем параметры URL
    //         let params = new URLSearchParams(url.search);
    //         // Получаем значение параметра "modal"
    //         let modalValue = params.get("modal");
    //         if (params.has("modal")) {
    //             this.showModal = true;
    //             modalValue =
    //                 modalValue.charAt(0).toUpperCase() + modalValue.slice(1);
    //         }

    //         if (this.modalIsClosed && this.isClosed == false) {
    //         }

    //         // if (this.callModal != null && this.modalIsCalled == false) {
    //         //     this.modalIsCalled = true;
    //         //     this.showModal = true;
    //         //     url.searchParams.append("modal", this.callModal);
    //         //     window.history.pushState(null, null, url);
    //         // }
    //         // console.log(modalValue);
    //     }, 100);
    // },
    components: {
        Auth,
        Editor,
    },
    emits: ["closeModal"],
};
</script>
