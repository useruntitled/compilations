<template>
    <Modal :show="show" @close="close()" v-if="showModal">
        <div class="p-5 px-20 pb-0">
            <div v-if="postIsLoading" class="flex justify-center my-10">
                <AnimationLoader></AnimationLoader>
            </div>
            <div
                class="bg-white h-full sticky"
                v-if="access && !postIsLoading"
                style="height: calc(100vh - 100px)"
            >
                <p v-if="postIsPublished" class="font-semibold">
                    Будьте осторожны. Пост уже опубликован.
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
                                    ></IconPhoto>
                                </div>
                                <!-- <PrimaryButton
                                    @click="clickFilePond()"
                                    textColor="gray-500"
                                    class="bg-gray-100 px-5 py-3 hover:bg-orange-500 hover:text-white"
                                >
                                    Изображение
                                </PrimaryButton> -->
                            </div>
                            <div
                                v-if="post && (post.image || form.image)"
                                class="inline-block flex justify-end"
                            >
                                <div
                                    class="flex text-center justify-center items-center"
                                >
                                    <AnimationLoader
                                        v-if="imageIsLoading"
                                        class="absolute w-10 h-10"
                                    ></AnimationLoader>
                                    <img
                                        @click="
                                            form.image = null;
                                            imageIsLoading = false;
                                            post.image = null;
                                        "
                                        class="rounded-xl cursor-pointer object-cover w-full h-full"
                                        :src="
                                            !imageIsLoading
                                                ? route('im', [
                                                      post.image,
                                                      '200x200',
                                                  ])
                                                : form.image
                                        "
                                        alt=""
                                        style="width: 100px; height: 100px"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="my-5">
                            <SecondaryInput
                                v-focus
                                v-model="form.title"
                                placeholder="Название подборки"
                            ></SecondaryInput>
                        </div>
                        <div>
                            <SecondaryContent
                                v-model="form.description"
                                placeholder="Описание подборки"
                            ></SecondaryContent>
                        </div>

                        <div class="my-5">
                            <SearchInput
                                class="relative"
                                v-model="searchInput"
                                placeholder="Название фильма или ссылка с кинопоиска"
                                @input="searchFilm()"
                                @focus="searchInputFocused = true"
                                @mouseenter="searchInputFocused = true"
                            ></SearchInput>
                            <section
                                @mouseleave="searchInputFocused = false"
                                v-show="
                                    searchResult.length > 0 &&
                                    searchInputFocused
                                "
                                class="mt-2 p-2 px-5 bg-white shadow-lg rounded-lg"
                            >
                                <button
                                    v-for="film in searchResult"
                                    class="font-semibold block my-2"
                                    @click="addFilm(film)"
                                >
                                    {{ film.name_ru ?? film.name_en }}
                                </button>
                            </section>
                        </div>

                        <div class="my-5" v-show="form.films.length > 0">
                            <p>{{ $tc("film", form.films.length) }}</p>
                            <div
                                @mouseenter="hoverButtons = film.id"
                                @mouseleave="hoverButtons = null"
                                v-for="(film, index) in form.films"
                                class="flex justify-between items-center my-2"
                            >
                                <button
                                    class="font-semibold"
                                    @click="removeFilm(film.id)"
                                >
                                    {{ film.name_ru ?? film.name_en }}
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
                                        <IconUp class="w-4 h-4"></IconUp>
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
                                        <IconDown class="w-4 h-4"></IconDown>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <footer class="bg-white absolute bottom-0 w-full">
                    <div class="flex justify-between items-center bg-white">
                        <PrimaryButton
                            class="px-4 ms-1 mb-4"
                            :class="canPublishClass"
                            @click="publish()"
                            >Опубликовать</PrimaryButton
                        >
                        <p v-show="isUpdating" class="font-semibold">
                            Сохранение...
                        </p>
                        <div
                            v-show="isUpdated && !isUpdating"
                            class="font-semibold flex items-center"
                        >
                            <span> Сохранено </span>
                            <span>
                                <IconCheck
                                    class="w-5 h-5 inline-block"
                                ></IconCheck>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
            <div v-if="!access">
                Вы не можете публиковать подборки, так как не являетесь частью
                сообщества.
            </div>
        </div>
    </Modal>
</template>
<script setup>
import SecondaryInput from "@/Components/Forms/SecondaryInput.vue";
import { ref, reactive, computed, watch, onMounted, inject } from "vue";
import Modal from "./Modal.vue";
import { router, usePage } from "@inertiajs/vue3";
import axios from "axios";
import PrimaryButton from "../Buttons/PrimaryButton.vue";
import AnimationLoader from "../Animations/AnimationLoader.vue";
import SecondaryContent from "../Forms/SecondaryContent.vue";
import SearchInput from "../Forms/SearchInput.vue";
import IconUp from "../Icons/IconUp.vue";
import IconDown from "../Icons/IconDown.vue";
import IconPhoto from "../Icons/IconPhoto.vue";
import IconCheck from "../Icons/IconCheck.vue";

const emit = defineEmits(["close"]);

const close = () => {
    emit("close");
    showModal.value = false;
    if (POSTWASLOADED.value && !postIsPublished.value) {
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

onMounted(() => {
    if (!access.value)
        console.log("Editor Modal: The user cannot create the post.");

    if (postIsCreated.value) loadPost();

    console.log(postIsCreated.value);
});

const searchInputFocused = ref(false);
const showModal = ref(props.show);
const post = ref(null);
const postIsPublished = computed(() => {
    return post.value && post.value.is_active;
});
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

    if (post.value.films != undefined) {
        pinnedFilms.value = [...post.value.films];
        form.films = post.value.films;
    } else {
        form.films = [];
    }
});

const searchInput = ref(null);
const searchResult = ref([]);
const pinnedFilms = ref([]);
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
    isUpdating.value = true;

    imageIsLoading.value = true;

    if (!post.value) {
        await createPost();
    }
    const formData = new FormData();
    formData.append("id", post.value.id);
    formData.append("image", image);

    axios
        .post(route("post.upload.image"), formData)
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            if (res.status == 200) {
                imageIsLoading.value = false;
                isUpdating.value = false;
                post.value.image = res.data;
            }
            console.log(res);
        });
};

const canPublishClass = computed(() => {
    if (form.films.length > 0 && form.title) {
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
    films: "",
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

/**
 * Crunch
 */
const POSTWASLOADED = ref(false);

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

watch(form, () => {
    savePost();
});
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
    router.reload();
};

const createPost = async () => {
    console.log("creating post");
    isUpdating.value = true;
    await axios
        .post(route("post.create"), {
            title: form.title,
            description: form.description,
        })
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            POSTWASLOADED.value = true;
            if (res.status == 200) {
                post.value = res.data;
                isUpdating.value = false;
            }
            console.log(res);
        });
};

const savePost = async () => {
    if (!postIsCreated.value && !POSTWASLOADED.value && !isUpdating.value) {
        await createPost();
    }
    isUpdating.value = true;
    setTimeout(async () => {
        await axios
            .post(route("post.update"), {
                _method: "PUT",
                title: form.title,
                description: form.description,
                id: post.value.id,
                films: form.films,
            })
            .catch((res) => {
                console.log(res);
            })
            .then((res) => {
                if (res.status == 200) {
                    isUpdating.value = false;
                    isUpdated.value = true;
                    setTimeout(() => {
                        isUpdated.value = false;
                    }, 1000);
                }
            });
    }, 1000);
};

const formQuery = () => {
    searchInput.value =
        parseInt(searchInput.value.replace(/\D/g, "")) || searchInput.value;
};

const searchFilm = () => {
    formQuery();
    if (searchInput.value == "") return;
    setTimeout(() => {
        axios
            .get(route("film.search", [`${searchInput.value}`]))
            .catch((res) => {
                console.log(res);
            })
            .then((res) => {
                console.log(res);
                if (res.status == 200) searchResult.value = res.data;
            });
    }, 200);
};

const addFilm = async (film) => {
    if (!post.value && !isUpdating.value) {
        await createPost();
    }

    if (!form.films.find((obj) => obj.id == film.id)) form.films.push(film);
};

const removeFilm = (film_id) => {
    const index = form.films.findIndex((obj) => obj.id == film_id);
    form.films.splice(index, 1);
    savePost();
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

    savePost();
};

const publish = () => {
    axios
        .post(route("post.publish"), {
            id: post.value.id,
        })
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
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
