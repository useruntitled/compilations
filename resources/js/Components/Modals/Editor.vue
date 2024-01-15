<template>
    <Modal :show="show" @close="showModal = false" v-if="showModal">
        <div class="p-5 px-20">
            <div v-if="postIsLoading" class="flex justify-center my-20">
                <AnimationLoader></AnimationLoader>
            </div>
            <div class="bg-white" v-if="access && !postIsLoading">
                <main>
                    <div class="my-5">
                        <input
                            type="text"
                            class="rounded-xl text-sm w-full text-[16px] font-semibold border-0 bg-gray-100 p-3 px-4"
                            placeholder="Название подборки"
                            v-model="form.title"
                            @input="savePost()"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            class="rounded-xl text-sm w-full text-[16px] font-semibold border-0 bg-gray-100 p-3 px-4"
                            placeholder="Описание подборки"
                            v-model="form.description"
                            @input="savePost()"
                        />
                    </div>

                    <div class="my-5"></div>
                </main>
                <footer class="bg-white flex justify-between">
                    <PrimaryButton class="bg-orange-500 px-4"
                        >Опубликовать</PrimaryButton
                    >
                    <p v-if="isUpdating">Сохранение...</p>
                </footer>
            </div>
            <div v-if="!access">Недостаточно кармы</div>
        </div>
    </Modal>
</template>
<script setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import Modal from "./Modal.vue";
import { usePage } from "@inertiajs/vue3";
import axios from "axios";
import { onBeforeUnmount } from "vue";
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import { onUnmounted } from "vue";
import AnimationLoader from "../Animations/AnimationLoader.vue";

const page = usePage();

const props = defineProps({
    show: Boolean,
});

onMounted(() => {
    if (!access.value)
        console.log("Editor Modal: The user cannot create the post.");

    if (postIsCreated.value) loadPost();

    console.log(postIsCreated.value);
});

// onUnmounted(() => {
//     url.value.searchParams.delete("id");
//     url.value.searchParams.delete("modal");
//     window.history.pushState(null, null, url.value);
// });

const showModal = ref(props.show);
const post = ref(null);
const postIsLoading = ref(false);
const postIsCreated = computed({
    get() {
        return url.value.searchParams.has("id");
    },
    set(newValue) {
        return newValue;
    },
});
const isUpdating = ref(false);

watch(post, () => {
    console.log(url.value);
    postIsCreated.value = true;
    postIsLoading.value = false;
    if (page.props.auth.user.id != post.value.user.id) access.value = false;
    pushState();
    form.title = post.value.title;
    form.description = post.value.description;
});

const form = reactive({
    title: null,
    description: null,
    films: post.films ?? [],
});

const loadPost = () => {
    postIsLoading.value = true;
    axios
        .get(route("post.get", [url.value.searchParams.get("id")]))
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            if (res.status == 200) post.value = res.data;
            console.log(res);
        });
};

const POSTWASLOADED = ref(false);

// const url = computed(() => {
//     return new URL(window.location.href);
// });

const url = reactive(
    computed({
        get() {
            return new URL(window.location.href);
        },
        set() {
            return new URL(window.location.href);
        },
    })
);

watch(
    () => window.location.href,
    (newValue, oldValue) => {
        console.log("CHANGED!");
        url.value = newValue;
    }
);

const access = computed({
    get() {
        return page.props.auth.can.create_posts;
    },
    set(newValue) {
        return newValue;
    },
});

const pushState = () => {
    const url = new URL(window.location.href);
    function append(param, value) {
        if (!url.searchParams.has(param)) url.searchParams.append(param, value);
    }
    append("modal", "Editor");
    append("id", post.value.id);

    window.history.pushState(null, null, url);
};

const createPost = () => {
    axios
        .post(route("post.create"), {
            title: form.title,
            description: form.description,
        })
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            POSTWASLOADED.value = true;
            if (res.status == 200) post.value = res.data;
            console.log(res);
        });
};

const savePost = () => {
    if (!postIsCreated.value && !POSTWASLOADED.value) createPost();
    isUpdating.value = true;
    setTimeout(() => {
        axios
            .post(route("post.update"), {
                _method: "PUT",
                title: form.title,
                description: form.description,
                id: post.value.id,
            })
            .catch((res) => {
                console.log(res);
            })
            .then((res) => {
                if (res.status == 200) isUpdating.value = false;
            });
    }, 1000);
};
</script>
<!-- <script>
import PostAttachFilms from "../PostAttachFilms.vue";
import Modal from "./Modal.vue";

export default {
    props: {
        show: false,
    },
    data() {
        return {
            showModal: this.show,
            postIsCreated: false,
        };
    },
    computed: {
        access() {
            return this.$page.props.auth.can.create_posts;
        },
    },
    methods: {
        savePost() {
            if (this.postIsCreated) this.updatePost();
        },
        updatePost() {},
    },
    mounted() {
        if (this.$page.props.auth.can.create_posts == false) {
            console.log("Editor Modal: user cant create post");
        }
    },
    components: { Modal, PostAttachFilms },
};
</script> -->
