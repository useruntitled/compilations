<template>
    <admin-view-card title="Фильм" :object="film">
        <template #description>
            <br />
            <a
                :href="'https://kinopoisk.ru/film/' + film.id"
                class="bg-panelbck text-white rounded-xl px-4 py-3 font-medium"
            >
                Ссылка на кинопоиск
            </a>
            <form @submit.prevent="" class="shadow rounded-lg p-5 mt-5">
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
                            v-model="film.name_ru"
                            class="w-full bg-panelbck rounded-xl border-1 border-panelbck text-sm text-white"
                        />
                        <p class="text-sm uppercase">name_en</p>
                        <input
                            type="text"
                            v-model="film.name_en"
                            class="w-full bg-panelbck rounded-xl border-1 border-panelbck text-sm text-white"
                        />
                        <p class="text-sm uppercase">description</p>
                        <input
                            type="text"
                            v-model="film.description"
                            class="w-full bg-panelbck rounded-xl border-1 border-panelbck text-sm text-white"
                        />
                        <p class="text-sm uppercase">short_description</p>
                        <input
                            type="text"
                            v-model="film.short_description"
                            class="w-full bg-panelbck rounded-xl border-1 border-panelbck text-sm text-white"
                        />
                        <p class="text-sm uppercase">poster_url</p>
                        <input
                            type="text"
                            v-model="film.poster_url"
                            class="w-full bg-panelbck rounded-xl border-1 border-panelbck text-sm text-white"
                        />
                        <p class="text-sm uppercase">poster_url_preview</p>
                        <input
                            type="text"
                            v-model="film.poster_url_preview"
                            class="w-full bg-panelbck rounded-xl border-1 border-panelbck text-sm text-white"
                        />
                        <p class="text-sm uppercase">logo_url</p>
                        <input
                            type="text"
                            v-model="film.logo_url"
                            class="w-full bg-panelbck rounded-xl border-1 border-panelbck text-sm text-white"
                        />
                        <p class="text-sm uppercase">slogan</p>
                        <input
                            type="text"
                            v-model="film.slogan"
                            class="w-full bg-panelbck rounded-xl border-1 border-panelbck text-sm text-white"
                        />
                    </div>
                </div>
            </form>
        </template>
        <template #footer>
            <button @click="update()">Сохранить</button>
        </template>
    </admin-view-card>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminViewCard from "@/Components/Admin/AdminViewCard.vue";
import { router, usePage } from "@inertiajs/vue3";
import { filmApi } from "@/api/panel/filmApi.js";

defineOptions({
    layout: PanelLayout,
});

const page = usePage();

const props = defineProps({
    film: null,
});

const update = async () => {
    await filmApi.update(
        {
            name_ru: props.film.name_ru,
            name_en: props.film.name_en,
            description: props.film.description,
            short_description: props.film.short_description,
            poster_url: props.film.poster_url,
            poster_url_preview: props.film.poster_url_preview,
            logo_url: props.film.logo_url,
            slogan: props.film.slogan,
        },
        (res) => {
            router.reload({
                preserveState: false,
                replace: false,
            });
        },
    );
};
</script>
