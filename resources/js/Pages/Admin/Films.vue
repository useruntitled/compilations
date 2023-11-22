<template>
    <Base title="Фильмы">
        <p>Фильмы</p>
        <main class="my-5 p-5 shadow rounded-xl">
            <div class="p-5 my-5 shadow rounded-xl">
                <p class="text-sm">Добавить фильм по ссылке</p>
                <input
                    @input="handleInputKinopoisk"
                    v-model="input_kp"
                    type="text"
                    class="text-sm rounded-xl w-full border-slate-300"
                />
            </div>
            <div class="my-5 p-5 shadow rounded-xl">
                <p class="text-sm">Найти фильм</p>
                <input
                    @input="search()"
                    v-model="input_search"
                    type="text"
                    class="text-sm rounded-xl border-slate-300 w-full"
                />
                <div class="p-2">
                    <Link
                        v-for="founded_film in founded_films"
                        :key="founded_film.id"
                        :href="route('film.edit', [founded_film.id])"
                        class="text-sm border p-2 rounded w-full block"
                    >
                        {{ founded_film.name_ru }} {{ founded_film.name_en }}
                    </Link>
                </div>
            </div>
            <div
                v-for="film in films.data"
                :key="film.id"
                class="flex justify-between my-2"
            >
                <p class="text-sm">{{ film.name_ru }} {{ film.name_en }}</p>
                <Link
                    :href="route('film.edit', [film.id])"
                    class="text-sm text-slate-800"
                    >Редактировать</Link
                >
            </div>
        </main>
        <Pagination :items="films"></Pagination>
        <Message
            :showMessage="show_success_message"
            @closeMessage="show_success_message = !show_success_message"
        ></Message>
    </Base>
</template>
<script>
import Film from "@/Components/Film.vue";
import Message from "@/Components/Message.vue";
import Pagination from "@/Components/Pagination.vue";
import axios from "axios";
export default {
    props: {
        films: null,
    },
    data() {
        return {
            input_kp: null,
            input_search: null,
            founded_films: [],
            show_success_message: false,
        };
    },
    methods: {
        addFilm(id) {
            axios
                .post(route("film.store"), {
                    id: id,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200 || res.status == 201) {
                        this.input_kp = "";
                        this.show_success_message = true;
                    }
                });
        },
        handleInputKinopoisk() {
            let id = parseInt(this.input_kp.replace(/\D/g, "")) || 0;
            this.addFilm(id);
        },
        search() {
            console.log(this.films);
            if (this.input_search == null || this.input_search.trim() == "") {
                this.founded_films = [];
            }
            axios
                .get(route("film.search", [this.input_search]))
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        this.founded_films = res.data;
                    }
                });
        },
    },
    components: { Film, Pagination, Message },
};
</script>
