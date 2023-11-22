<template>
    <form>
        <p class="text-sm">Поиск фильма с сайта</p>
        <div class="border p-5">
            <input
                list="films"
                @input="handleInputSite()"
                v-model="input_site"
                type="text"
                class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
            />
            <div class="my-2">
                <p
                    v-for="film in films_for_chose"
                    :key="film.id"
                    class="text-sm text-slate-800 border rounded-xl p-2 cursor-pointer"
                    @click="attachFilm(film.id)"
                >
                    {{ film.name_ru }} {{ film.name_en }}
                </p>
            </div>
        </div>
        <!-- <datalist id="films">
            <div v-for="film in films_for_chose" :key="film.id">
                <option :value="film.name_ru"></option>
                <option :value="film.name_en"></option>
            </div>
        </datalist> -->

        <p class="text-sm">Или вставить ссылку с кинопоиска</p>
        <input
            v-model="input_kp"
            @input="handleInputKinopoisk()"
            type="text"
            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
        />
        <main>
            <div v-for="film in films_data" :key="film.id">
                <Film :film="film" @removeFilm="removeFilm(film.id)"></Film>
            </div>
        </main>
        <div class="shadow p-5 mt-5 rounded-xl">
            <div class="flex flex-wrap">
                <p
                    v-for="tag in tags"
                    :key="tag.id"
                    class="text-sm inline-block me-5 shadow p-2 rounded-lg my-2"
                >
                    {{ tag.name }}
                    <span
                        @click="detachTag(tag.id)"
                        class="cursor-pointer text-red-700"
                        >✘</span
                    >
                </p>
            </div>
            <p class="text-sm">Прикрепите теги, вводя через запятую</p>
            <input
                type="text"
                @input="handleInputTags()"
                v-model="input_tags"
                class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
            />
        </div>
    </form>
</template>
<script>
import axios from "axios";
import Film from "./Film.vue";
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
    components: { Film },
};
</script>
