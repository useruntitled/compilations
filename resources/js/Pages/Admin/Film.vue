<template>
    <Csrf></Csrf>
    <Base :title="film.name_ru" :sides="false">
        <div class="bg-white p-5 rounded-xl">
            <p>Редактировать данные фильма</p>
            <button
                @click.prevent="refresh()"
                class="mt-10 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-red-50 text-red-700 hover:bg-red-100 block"
            >
                Обновить информацию через API
            </button>
            <a
                :href="'https://kinopoisk.ru/film/' + film.id"
                class="text-sm text-sky-700 font-semibold ms-2"
                >Перейти на кинопоиск</a
            >
            <form @submit.prevent="update()" class="shadow rounded-lg p-5 mt-5">
                <div class="flex items-center">
                    <img
                        v-lazy="film.poster_url"
                        alt=""
                        class="rounded-xl"
                        style="max-height: 500px; max-width: 334px"
                    />
                    <div class="w-full ms-5 shadow p-5 shadow-xl rounded-xl">
                        <p class="text-sm uppercase">name_ru</p>
                        <input
                            type="text"
                            v-model="name_ru"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">name_en</p>
                        <input
                            type="text"
                            v-model="name_en"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">description</p>
                        <input
                            type="text"
                            v-model="description"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">short_description</p>
                        <input
                            type="text"
                            v-model="short_description"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">poster_url</p>
                        <input
                            type="text"
                            v-model="poster_url"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">poster_url_preview</p>
                        <input
                            type="text"
                            v-model="poster_url_preview"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">logo_url</p>
                        <input
                            type="text"
                            v-model="logo_url"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">slogan</p>
                        <input
                            type="text"
                            v-model="slogan"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                    </div>
                </div>
                <button
                    class="mt-10 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mx-auto block"
                >
                    Сохранить
                </button>
                <!-- <Transition name="message">
                <div
                    v-show="updated"
                    class="bg-emerald-50 my-5 mx-5 p-5 text-sm border border-1/2 border-emerald-150 rounded-xl fixed left-0 bottom-0 min-w-xs max-w-xs"
                    ref="success_message"
                >
                    <p class="text-center font-semibold text-emerald-700">
                        Успех!
                    </p>
                </div>
            </Transition> -->
                <Message
                    mode="success"
                    :showMessage="updated"
                    @closeMessage="updated = false"
                ></Message>
            </form>
        </div>
    </Base>
</template>
<script>
import Message from "@/Components/Message.vue";
export default {
    props: {
        film: null,
    },
    data() {
        return {
            updated: false,
            name_ru: this.film.name_ru,
            name_en: this.film.name_en,
            description: this.film.description,
            short_description: this.film.short_description,
            poster_url: this.film.poster_url,
            poster_url_preview: this.film.poster_url_preview,
            logo_url: this.film.logo_url,
            slogan: this.film.slogan,
        };
    },
    methods: {
        update() {
            axios
                .post(route("film.patch"), {
                    _method: "PATCH",
                    film_id: this.film.id,
                    name_ru: this.name_ru,
                    name_en: this.name_en,
                    description: this.description,
                    short_description: this.short_description,
                    poster_url: this.poster_url,
                    poster_url_preview: this.poster_url_preview,
                    logo_url: this.logo_url,
                    slogan: this.slogan,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        this.updated = true;
                    }
                });
        },
        refresh() {
            axios
                .post(route("film.refresh"), {
                    _method: "PATCH",
                    id: this.film.id,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        this.updated = 200;
                    }
                });
        },
    },
    components: { Message },
};
</script>
