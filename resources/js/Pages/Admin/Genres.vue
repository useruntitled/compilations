<template>
    <Base title="Теги фильмов">
        <p>Теги фильмов</p>
        <main class="my-5 p-5 shadow rounded-xl">
            <p class="text-sm">Существующие теги фильмов</p>
            <div class="text-sm my-5 inline-block flex flex-wrap">
                <a
                    v-for="genre in genres"
                    :key="genre.id"
                    :href="route('genre', [genre.slug])"
                    class="me-5 my-2 p-5 shadow rounded-xl"
                >
                    {{ genre.name }}
                </a>
            </div>
        </main>
    </Base>
</template>
<script>
export default {
    props: {
        genres: null,
    },
};
</script>
