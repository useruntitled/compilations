<template>
    <modal :show="show" @close="close()" v-if="showModal">
        <div class="sm:p-5 xs:px-2 sm:px-20 pb-0">
            <div v-if="postIsLoading" class="flex justify-center my-10">
                <AnimationLoader />
            </div>
            <div
                class="bg-white h-full sticky"
                v-if="!postIsLoading"
                style="height: calc(100vh - 100px)"
            >
                <p v-if="postIsPublished" class="font-medium">
                    Будьте осторожны. Подборка уже опубликована.
                </p>
                <div class="overflow-auto h-full noscrollbar pb-20">
                    <main class="overflow-y-auto px-1">
                        <div class="my-5 flex relative">
                            <div
                                v-if="
                                    !imageIsLoading &&
                                    (!post || post.image == null)
                                "
                            >
                                <input
                                    type="file"
                                    ref="filepond"
                                    class="hidden"
                                    accept="image/*"
                                    @input="handleFile($event)"
                                />
                                <div
                                    class="p-1 bg-gray-100 rounded-xl hover:opacity-80"
                                    @click="clickFilePond()"
                                >
                                    <IconPhoto
                                        class="w-[80px] h-[80px] stroke-[1.2] cursor-pointer opacity-60"
                                    />
                                </div>
                            </div>
                            <div
                                v-if="post && (post.image || form.image)"
                                class="inline-block flex justify-end"
                            >
                                <div
                                    class="flex text-center justify-center items-center"
                                >
                                    <UploadableLazyMedia
                                        v-if="post.image || form.image"
                                        rounded="xl"
                                        class="cursor-pointer object-cover w-[100px] h-[100px]"
                                        :media="post.image ?? form.image"
                                        @click="
                                            form.image = null;
                                            imageIsLoading = false;
                                            post.image = null;
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="my-5">
                            <SecondaryInput
                                v-focus
                                v-model="form.title"
                                placeholder="Название подборки"
                            />
                        </div>
                        <div>
                            <SecondaryContent
                                v-model="form.description"
                                placeholder="Описание подборки"
                            />
                        </div>

                        <div class="my-5">
                            <SearchInput
                                class="relative"
                                v-model="searchInput"
                                placeholder="Название фильма или ссылка с кинопоиска"
                                @input="searchFilm()"
                                @focus="searchInputFocused = true"
                                @mouseenter="searchInputFocused = true"
                            />
                            <section
                                @mouseleave="searchInputFocused = false"
                                v-show="searchResult.length > 0"
                                class="mt-2 p-2 px-5 bg-white shadow-lg rounded-lg"
                            >
                                <button
                                    v-for="film in searchResult"
                                    class="font-medium block my-2"
                                    @click="addFilm(film)"
                                >
                                    {{ film.name_ru ?? film.name_en }}
                                    <span class="text-secondary text-sm">{{
                                        film.start_year ?? film.year
                                    }}</span>
                                </button>
                            </section>
                        </div>

                        <div
                            class="my-5"
                            v-show="form.films?.length > 0"
                            v-if="form.films"
                        >
                            <p>{{ $tc("film", form.films?.length) }}</p>
                            <div
                                @mouseenter="hoverButtons = film.id"
                                @mouseleave="hoverButtons = null"
                                v-for="(film, index) in form.films"
                                class="flex justify-between items-center my-2"
                            >
                                <button
                                    class="font-medium"
                                    @click="removeFilm(film.id)"
                                >
                                    {{ film.name_ru ?? film.name_en }}
                                    <span class="text-secondary text-sm">{{
                                        film.start_year ?? film.year
                                    }}</span>
                                </button>
                                <div class="flex flex-col items-center">
                                    <button
                                        :class="
                                            hoverButtons != film.id
                                                ? 'text-white'
                                                : ''
                                        "
                                        class="p-0 m-0 hover:opacity-60"
                                        @click="changeFilmIndex(film.id, 0)"
                                    >
                                        <IconUp class="w-4 h-4" />
                                    </button>
                                    <button
                                        :class="
                                            hoverButtons != film.id
                                                ? 'text-white'
                                                : ''
                                        "
                                        class="p-0 m-0 hover:opacity-60"
                                        @click="changeFilmIndex(film.id, 1)"
                                    >
                                        <IconDown class="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <footer class="bg-white absolute bottom-0 w-full">
                    <div class="flex justify-between items-center bg-white">
                        <primary-button
                            class="px-4 ms-1 mb-4"
                            :class="canPublishClass"
                            @click="publish()"
                            >Опубликовать
                        </primary-button>
                        <p v-show="isUpdating" class="font-medium">
                            Сохранение...
                        </p>
                        <div
                            v-show="isUpdated && !isUpdating"
                            class="font-medium flex items-center"
                        >
                            <span> Сохранено </span>
                            <span>
                                <IconCheck class="w-5 h-5 inline-block" />
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </modal>
</template>
<script setup>
import SecondaryInput from "@/Components/Forms/Inputs/SecondaryInput.vue";
import { ref, reactive, computed, watch, onMounted, inject } from "vue";
import Modal from "./Modal.vue";
import { router, usePage } from "@inertiajs/vue3";
import axiosInstance from "@/axios/AxiosWrapper.js";
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import AnimationLoader from "../Animations/AnimationLoader.vue";
import SecondaryContent from "../Forms/SecondaryContent.vue";
import SearchInput from "../Forms/Inputs/SearchInput.vue";
import IconUp from "../Icons/IconUp.vue";
import IconDown from "../Icons/IconDown.vue";
import IconPhoto from "../Icons/IconPhoto.vue";
import IconCheck from "../Icons/IconCheck.vue";
import pkg from "lodash/function.js";
import UploadableLazyMedia from "@/Components/Media/UploadableLazyMedia.vue";
import { postApi } from "@/api/postApi.js";
import { filmApi } from "@/api/filmApi.js";
import { ModalStateManager } from "@/helpers/ModalStateManager.js";

const { throttle } = pkg;

const emit = defineEmits(["close"]);

const close = () => {
    emit("close");
    showModal.value = false;
    if (editorIsReady.value && !postIsPublished.value && isCreated.value) {
        injectedCallMessage("success", "Подборка сохранена в черновиках.");
    }
};

const vFocus = {
    mounted: (el) => el.focus(),
};

const page = usePage();

const props = defineProps({
    show: Boolean,
});

const injectedCallMessage = inject("callMessage");

axiosInstance.setCallbackFunction(injectedCallMessage);

onMounted(async () => {
    const url = new URL(window.location.href);
    if (url.searchParams.has("id")) {
        isCreated.value = true;
    }

    if (isCreated.value) {
        await loadPost();
    }
    editorIsReady.value = true;

    console.log(isCreated.value);
});

const searchInputFocused = ref(false);
const showModal = ref(props.show);
const post = ref(null);
const postIsPublished = computed(() => {
    return post.value && post.value.is_active;
});
const postIsLoading = ref(false);

const isCreated = ref(false);

const isUpdating = ref(false);

const searchInput = ref(null);
const searchResult = ref([]);
const hoverButtons = ref(null);
const filepond = ref(null);
const imageIsLoading = ref(false);
const isUpdated = ref(false);

const clickFilePond = () => {
    filepond.value.click();
};

const handleFile = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
        uploadImage(file, e.target.result);
    };
    reader.readAsDataURL(file);
};

const uploadImage = async (image, base64) => {
    form.image = base64;

    if (!isCreated.value) {
        await createPost();
    }

    imageIsLoading.value = true;
    showUpdating();

    postApi.uploadImage(post.value.id, image, (res) => {
        if (res.status == 200) {
            imageIsLoading.value = false;
            isUpdating.value = false;
            post.value.image = res.data;
        }
        console.log(res);
    });
};

const canPublishClass = computed(() => {
    if (form.films && form.title) {
        return "bg-orange-500";
    }
    return "bg-orange-200";
});

watch(searchInput, () => {
    searchResult.value = [];
});

const form = reactive({
    title: "",
    description: "",
    image: "",
    films: [],
});

const getUrl = () => {
    return new URL(window.location.href);
};

const loadPost = () => {
    postIsLoading.value = true;
    postApi.get(getUrl().searchParams.get("id"), (res) => {
        if (res.status == 200) {
            post.value = res.data;
            form.title = res.data.title;
            form.description = res.data.description;
            form.films = res.data.films ?? [];
            postIsLoading.value = false;
        }
        console.log(res);
    });
};

const editorIsReady = ref(false);

watch(
    form,
    throttle(async () => {
        if (!postIsLoading.value && !isUpdating.value) {
            await savePost();
        }
    }, 500),
);

const createPost = async () => {
    console.log("creating post");

    const data = {
        title: form.title,
        description: form.description,
    };

    if (!isUpdating.value && !isCreated.value) {
        showUpdating();

        await postApi.store(data, async (res) => {
            if (res.status === 200 || res.status === 201) {
                post.value = res.data;
                showUpdated();
                console.log("post is created");
                isCreated.value = true;
                await ModalStateManager.pushEditor(post.value.id);
            }
            console.log(res);
        });
    }
};

const showUpdated = () => {
    isUpdating.value = false;
    isUpdated.value = true;
    editorIsReady.value = true;
    setTimeout(() => {
        isUpdated.value = false;
    }, 500);
};

const showUpdating = () => {
    isUpdating.value = true;
};

const savePost = async () => {
    if (!isCreated.value) {
        console.log("post is created value", isCreated.value);
        await createPost();
    } else {
        showUpdating();

        const data = {
            _method: "PUT",
            title: form.title,
            description: form.description,
            id: post.value.id,
            films: form.films,
        };

        await postApi.update(data, (res) => {
            showUpdated();
        });
    }
};

const formQuery = () => {
    searchInput.value =
        parseInt(searchInput.value.replace(/\D/g, "")) || searchInput.value;
};

const searchFilm = () => {
    formQuery();
    if (searchInput.value == "") return;
    setTimeout(() => {
        filmApi.search(`${searchInput.value}`, (res) => {
            if (res.status == 200) searchResult.value = res.data;
        });
    }, 200);
};

const addFilm = async (film) => {
    if (!isCreated.value) {
        await createPost();
    }

    if (!form.films.length || !form.films.find((obj) => obj.id === film.id)) {
        form.films.push(film);
        console.log(form.films);
    }
};

const removeFilm = (film_id) => {
    const index = form.films.findIndex((obj) => obj.id == film_id);
    form.films.splice(index, 1);
};

const changeFilmIndex = (film_id, action) => {
    const index = form.films.findIndex((obj) => obj.id == film_id);
    const film = form.films[index];
    const filmAbove = form.films[index - 1];
    const filmBelow = form.films[index + 1];
    if (
        (index == 0 && action == 0) ||
        (index == form.films.length - 1 && action == 1)
    )
        return false;

    if (action == 0) {
        form.films[index - 1] = film;
        form.films[index] = filmAbove;
    } else {
        form.films[index + 1] = film;
        form.films[index] = filmBelow;
    }
};

const publish = () => {
    postApi.publish(post.value.id, (res) => {
        if (res.status == 200) {
            post.value.is_active = true;
            close();
            router.visit(res.data);
        }
    });
};
</script>
<style>
/* хром, сафари */
.noscrollbar::-webkit-scrollbar {
    width: 0;
}

/* ie 10+ */
.noscrollbar {
    -ms-overflow-style: none;
}

/* фф (свойство больше не работает, других способов тоже нет)*/
.noscrollbar {
    overflow: -moz-scrollbars-none;
}
</style>
