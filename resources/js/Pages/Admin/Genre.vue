<template>
    <Csrf></Csrf>
    <Base :title="genre.name">
        <p>Тег фильма</p>
        <main class="p-5 shadow rounded-xl my-5">
            <p class="text-sm text-slate-800">#{{ genre.id }}</p>
            <p>{{ genre.name }}</p>
            <div class="shadow p-5 my-5 rounded-lg">
                <p class="text-sm">Прикрепить к разделу жанра</p>
                <form @submit.prevent="wire()">
                    <input
                        v-model="input"
                        type="text"
                        class="w-full rounded-xl text-sm border-slate-200"
                        required
                    />
                    <button
                        class="mt-2 block py-2 px-4 rounded-full border-0 text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                    >
                        Прикрепить
                    </button>
                </form>
            </div>
        </main>
    </Base>
</template>
<script>
export default {
    props: {
        genre: null,
    },
    data() {
        return {
            input: this.genre.kp_wire,
        };
    },
    methods: {
        wire() {
            axios
                .post(route("genre.wire"), {
                    genre_id: this.genre.id,
                    url: this.input,
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                });
        },
    },
};
</script>
