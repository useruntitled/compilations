<template>
    <form>
        <p class="text-sm">Поиск фильма с сайта</p>
        <div class="py-2">
            <div class="flex items-center">
                <span class="text-sm absolute pl-2"
                    ><IconSearch class="w-5 h-5 text-slate-700"></IconSearch
                ></span>
                <input
                    list="films"
                    @input="handleInputSite()"
                    v-model="input_site"
                    type="text"
                    placeholder="Поиск"
                    class="w-full pl-12 rounded-xl border-1 border-slate-200 text-sm text-slate-900 bg-neutral-50 hover:bg-white hover:border-kp border-2 focus:bg-white focus:ring-kp focus:border-kp"
                />
            </div>
            <div
                v-if="films_for_chose.length || loading"
                class="my-2 bg-neutral-50 p-2 px-1 rounded-lg shadow-lg"
            >
                <p
                    v-if="!loading"
                    v-for="film in films_for_chose"
                    :key="film.id"
                    class="text-sm rounded-xl p-2 cursor-pointer"
                    @click="attachFilm(film.id)"
                >
                    {{ film.name_ru }} {{ film.name_en }}
                </p>
                <div v-else class="flex justify-center p-2">
                    <AnimationLoader class="w-8 h-8"></AnimationLoader>
                </div>
            </div>
        </div>
        <!-- <datalist id="films">
            <div v-for="film in films_for_chose" :key="film.id">
                <option :value="film.name_ru"></option>
                <option :value="film.name_en"></option>
            </div>
        </datalist> -->

        <p class="text-sm pb-2">Или вставить ссылку с кинопоиска</p>
        <input
            v-model="input_kp"
            @input="handleInputKinopoisk()"
            type="text"
            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900 focus:border-kp focus:ring-kp"
        />
        <main>
            <div v-for="film in films_data" :key="film.id">
                <Film :film="film" @removeFilm="removeFilm(film.id)"></Film>
            </div>
        </main>
        <div class="mt-5">
            <div class="flex flex-wrap">
                <p
                    v-for="tag in tags"
                    :key="tag.id"
                    class="text-sm inline-block me-5 rounded-full border-gray-500 border-2 border px-2 pl-3 py-1 my-2"
                >
                    {{ tag.name }}
                    <span
                        @click="detachTag(tag.id)"
                        class="cursor-pointer text-neutral-300 font-semibold text-sm px-1"
                        >✕</span
                    >
                </p>
            </div>
            <p class="text-sm pb-2">Прикрепите теги, вводя через запятую</p>
            <input
                type="text"
                @input="handleInputTags()"
                v-model="input_tags"
                class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900 focus:ring-kp focus:border-kp"
            />
        </div>
    </form>
</template>
<script>
import axios from "axios";
import Film from "./Film.vue";
import IconSearch from "@/Components/Icons/IconSearch.vue";
import AnimationLoader from "./Animations/AnimationLoader.vue";
export default {
    props: {
        post: null,
    },
    data() {
        return {
            films_data: this.post.films ?? [],
            loading: false,
            input_kp: null,
            input_tags: [],
            input_site: null,
            films_for_chose: [],
            tags: this.post && this.post.tags ? this.post.tags : [],
        };
    },
    methods: {
        attachFilm(id) {
            if (id != 0) {
                console.log("url is caught, id:", id);
                this.loading = true;
                axios
                    .post(route("post.attach.film"), {
                        id: id,
                        post_id: this.post.id,
                    })
                    .catch((res) => {
                        console.log(res);
                        this.loading = false;
                    })
                    .then((res) => {
                        console.log(res);
                        if (res) {
                            this.films_for_chose = [];
                            this.showModal = false;
                            let isset = this.films_data.findIndex(
                                (obj) => obj.id == res.data.id
                            );
                            isset == -1 ? this.films_data.push(res.data) : "";
                        }
                        this.loading = false;
                        this.input_kp = "";
                        this.input_site = "";
                    });
            }
        },
        handleInputKinopoisk() {
            let id = parseInt(this.input_kp.replace(/\D/g, "")) || 0;
            this.attachFilm(id);
        },
        handleInputSite() {
            let query = this.input_site;
            if (this.input_site == null || this.input_site == "") {
                this.films_for_chose = [];
                this.loading = false;
            } else {
                this.loading = true;
            }
            // let catched = this.films_for_chose.find(
            //     (obj) => obj.name_ru == query
            // );
            // catched == undefined
            //     ? (catched = this.films_for_chose.find(
            //           (obj) => obj.name_en == query
            //       ))
            //     : "";
            // if (catched != undefined) {
            //     // alert(catched);
            //     this.attachFilm(catched.id);
            //     return;
            // }
            axios
                .get(route("film.search", [query]))
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        this.films_for_chose = res.data;
                        this.loading = false;
                    }
                });
        },
        handleInputTags() {
            if (this.input_tags.includes(",")) {
                let tag = this.input_tags.replace(",", "").trim();
                axios
                    .post(route("tag.attach.post"), {
                        post_id: this.post.id,
                        name: tag,
                    })
                    .catch((res) => {
                        console.log(res);
                    })
                    .then((res) => {
                        console.log(res);
                        if (res.status == 201 || res.status == 200) {
                            this.tags.push(res.data);
                            this.input_tags = "";
                        }
                    });
            }
        },
        detachTag(id) {
            axios
                .post(route("tag.detach.post"), {
                    _method: "DELETE",
                    post_id: this.post.id,
                    tag_id: id,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status) {
                        let listIndex = this.tags.findIndex(
                            (obj) => obj.id == id
                        );
                        this.tags.splice(listIndex, 1);
                    }
                });
        },
        removeFilm(index) {
            let listIndex = this.films_data.findIndex((obj) => obj.id == index);
            axios
                .post(route("post.dettach.film"), {
                    _method: "PATCH",
                    id: index,
                    post_id: this.post.id,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    this.films_data.splice(listIndex, 1);
                });
        },
    },
    components: { Film, IconSearch, AnimationLoader },
};
</script>
