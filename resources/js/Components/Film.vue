<template>
    <div class="flex">
        <div
            class="mt-5 border-2 text-start flex items-center w-full rounded-lg"
        >
            <a :href="'https://kinopoisk.ru/film/' + film.id">
                <img
                    v-if="film.poster_url_preview"
                    class="rounded-lg"
                    v-lazy="film.poster_url_preview"
                    alt=""
                    style="max-width: 200px; height: 300px; width: 200px"
                />
                <img
                    v-else
                    v-lazy="film.poster_url"
                    class="rounded-lg"
                    alt=""
                    style="max-width: 200px"
                />
                <img
                    v-if="!film.cover_url && !film.poster_url"
                    class="rounded-lg"
                    src="https://dummyimage.com/400x400/000/fff&text=No+image"
                    alt=""
                    style="max-width: 200px"
                />
            </a>
            <div class="ms-5 inline-block">
                <a
                    :href="'https://kinopoisk.ru/film/' + film.id"
                    class="text-sky-600 font-bold"
                >
                    {{ film.name_ru }} {{ film.name_en }}
                </a>
                <div>
                    <span v-for="genre in film.genres" :key="genre.id">
                        <a
                            class="me-2 text-sm text-sky-700"
                            :href="genre.kp_wire"
                        >
                            #{{ genre.name }}
                        </a>
                    </span>
                </div>
                <p class="text-sm text-slate-800 break-words">
                    {{ film.description }}
                </p>
                <p class="text-sm text-slate-800">
                    {{ film.end_year }} {{ film.country }}
                    {{ film.type }}
                </p>
                <div class="my-2">
                    <img
                        v-lazy="
                            'https://rating.kinopoisk.ru/' + film.id + '.gif'
                        "
                        style="width: 102px; height: 38px"
                        alt="Rating"
                    />
                </div>
                <div v-if="mode == 'admin'">
                    <Link
                        :href="route('film.edit', [film.id])"
                        class="border-sky-600 border p-1 rounded text-sm text-sky-600 hover:bg-sky-600 hover:text-white transition duration-150"
                        >Редактировать</Link
                    >
                </div>
                <button
                    v-if="mode != 'read' && mode != 'admin'"
                    @click="$emit('removeFilm')"
                    type="button"
                    class="absolute my-2 border-red-600 border p-1 rounded text-sm text-red-600 hover:bg-red-600 hover:text-white transition duration-150"
                >
                    Удалить
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        film: null,
        mode: "edit",
    },
};
</script>
