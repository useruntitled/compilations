<template>
    <admin-view-card title="Фильм" :object="film">
        <template #description>
            <a :href="'https://kinopoisk.ru/film/' + film.id">
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
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">name_en</p>
                        <input
                            type="text"
                            v-model="film.name_en"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">description</p>
                        <input
                            type="text"
                            v-model="film.description"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">short_description</p>
                        <input
                            type="text"
                            v-model="film.short_description"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">poster_url</p>
                        <input
                            type="text"
                            v-model="film.poster_url"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">poster_url_preview</p>
                        <input
                            type="text"
                            v-model="film.poster_url_preview"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">logo_url</p>
                        <input
                            type="text"
                            v-model="film.logo_url"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                        <p class="text-sm uppercase">slogan</p>
                        <input
                            type="text"
                            v-model="film.slogan"
                            class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                        />
                    </div>
                </div>

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
import UserTablet from "@/Components/UserTablet.vue";
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";
import Message from "@/Components/Message.vue";

defineOptions({
    layout: PanelLayout,
})

const page = usePage();


const props = defineProps({
    film: null,
})

const update = () => {
    axios.post(route('panel.update.film', [props.film.id]), {
        '_method': 'PATCH',
        name_ru: props.film.name_ru,
        name_en: props.film.name_en,
        description: props.film.description,
        short_description: props.film.short_description,
        poster_url: props.film.poster_url,
        poster_url_preview: props.film.poster_url_preview,
        logo_url: props.film.logo_url,
        slogan: props.film.slogan,
    })
}
</script>
