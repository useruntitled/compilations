<template>
    <div class="relative flex items-center" v-if="films.length">
        <!-- <span
            v-for="(film, index) in films"
            :key="film.id"
            class="inline-block"
        >
            <img
                v-if="index == 1"
                :src="film.poster_url_preview"
                class="z-0 block"
                alt=""
                style="width: 30px; height: 30px"
            />
            <img
                v-if="index == 0"
                :src="film.poster_url_preview"
                class="z-50 absolute"
                alt=""
                style="width: 30px; height: 30px"
            />
        </span> -->
        <img
            :src="films[2].poster_url_preview"
            class="z-0 rounded-lg absolute ml-4 hover:ml-8 duration-200"
            style="width: 34px; height: 34px"
        />
        <img
            :src="films[1].poster_url_preview"
            class="z-5 rounded-lg absolute ml-2 hover:ml-4 duration-200"
            style="width: 37px; height: 37px"
        />
        <img
            :src="films[0].poster_url_preview"
            class="z-10 block rounded-lg w-full"
            style="width: 40px; height: 40px"
        />
    </div>
</template>
<script>
export default {
    props: {
        films: null,
    },
};
</script>
