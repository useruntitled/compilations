<template>
    <div class="flex">
        <div class="mt-5 text-start flex items-center w-full rounded-lg">
            <a
                :href="'https://kinopoisk.ru/film/' + film.id"
                class="object-cover h-full"
            >
                <img
                    v-if="film.poster_url_preview"
                    class="rounded-lg h-full w-full object-cover"
                    :src="film.poster_url_preview"
                    alt=""
                    style="min-width: 200px"
                />
                <img
                    v-else
                    :src="film.poster_url"
                    class="rounded-lg h-full w-full object-cover"
                    alt=""
                    style="min-width: 200px"
                />
                <img
                    v-if="!film.cover_url && !film.poster_url"
                    class="rounded-lg h-full w-full object-cover"
                    src="https://dummyimage.com/400x400/000/fff&text=No+image"
                    alt=""
                    style="min-width: 200px"
                />
            </a>
            <div class="ms-5 inline-block">
                <a
                    :href="'https://kinopoisk.ru/film/' + film.id"
                    class="text-sky-600 font-semibold"
                >
                    {{ film.name_ru }} {{ film.name_en }}
                </a>
                <div class="my-2 flex-wrap flex">
                    <span
                        v-for="genre in film.genres"
                        :key="genre.id"
                        class="mb-1"
                    >
                        <a
                            class="me-2 pe-2 py-1 text-dtfpr opacity-70 font-medium"
                            :href="genre.kp_wire"
                        >
                            #{{ genre.name }}
                        </a>
                    </span>
                </div>
                <p class="text-sm text-slate-800 break-words">
                    {{ film.description }}
                </p>
                <p
                    class="px-2 py-1 my-2 bg-orange-50 text-sm rounded-lg text-orange-700 inline-block font-medium"
                >
                    {{ film.type == "movie" ? "Фильм" : "Сериал" }}
                </p>
                <div class="my-2">
                    <img
                        :src="'https://rating.kinopoisk.ru/' + film.id + '.gif'"
                        style="width: 102px; height: 38px"
                        alt="Rating"
                    />
                </div>
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
