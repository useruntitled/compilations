<template>
    <div class="flex" @mouseenter="showReportTrigger = true" @mouseleave="showReportTrigger = false">
        <div class="mt-5 text-start flex items-center w-full rounded-lg">
            <a
                :href="'https://kinopoisk.ru/film/' + film.id"
                class="object-cover h-full"
            >
                <img
                    v-if="film.poster_url_preview"
                    class="rounded-lg h-full w-full object-cover min-w-[200px] w-1/4 "
                    :src="film.poster_url_preview"
                    alt=""
                />
                <img
                    v-else
                    :src="film.poster_url"
                    class="rounded-lg h-full w-full object-cover min-w-[200px] w-1/4 "
                    alt=""
                />
                <img
                    v-if="!film.cover_url && !film.poster_url"
                    class="rounded-lg h-full w-full object-cover min-w-[200px]  w-1/4"
                    src="https://dummyimage.com/400x400/000/fff&text=No+image"
                    alt=""
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
                            class="me-2 pe-2 py-1 text-orange-700 opacity-70 font-medium"
                            :href="genre.kp_wire"
                        >
                            #{{ genre.name }}
                        </a>
                    </span>
                </div>
                <p class="text-sm text-slate-800 break-words w-full overflow-hidden min-w-min" ref="film_description"  :class="{'max-h-20': isTooLong}" >
                    {{ film.description }}
                </p>
                    <button @click="isTooLong = false" v-show="isTooLong" class="block text-black opacity-60 hover:opacity-40 my-2 text-sm">
                        Читать дальше
                    </button>
                <p
                    class="px-2 py-1 my-2 bg-orange-50 text-sm rounded-lg text-orange-700 inline-block font-medium"
                >
                    {{ film.type == "movie" ? "Фильм" : "Сериал" }}
                </p>
                <div class="my-2">
                    <div class="flex items-end justify-between space-x-2">
                        <img
                            :src="'https://rating.kinopoisk.ru/' + film.id + '.gif'"
                            class="bg-gray-100 rounded"
                            style="width: 102px; height: 38px"
                            alt="Rating"
                        />
                        <div v-show="showReportTrigger">
                            <DropdownReport
                                report_to_type="film"
                                :report_to_id="film.id"
                                align="right" class="text-gray-400 w-6 h-6"></DropdownReport>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import DropdownReport from "@/Components/Dropdowns/DropdownReport.vue";
const props = defineProps({
    film: null,
})

const film_description = ref(null);

const isTooLong = ref(false);

const showReportTrigger = ref(false);

onMounted(() => {
    nextTick(() => {
        if(film_description.value.clientHeight > 100 ){
            isTooLong.value = true;
        }
    })
})


</script>
