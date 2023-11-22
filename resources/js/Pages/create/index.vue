<template>
    <Csrf></Csrf>
    <Base title="Создать подборку">
        <p>Создать подборку</p>
        <div
            v-if="Object.keys(errors).length"
            class="bg-red-200 rounded px-2 py-3 my-2"
        >
            <div
                v-for="error in Object.keys(errors)"
                class="text-sm text-slate-900"
            >
                {{ errors[error][0].replace("films", "фильмы") }}
            </div>
        </div>
        <form @submit.prevent="submit()" class="my-0 mx-0">
            <div class="shadow rounded-xl p-5 mt-5">
                <p class="text-sm">Название подборки</p>
                <input
                    v-model="title"
                    type="text"
                    class="w-full p-2 text-sm border-1 border border-slate-200 rounded-xl text-slate-800"
                    placeholder="Название подборки"
                    required
                />
                <p class="text-sm">Описание подборки</p>
                <textarea
                    @input="handleInputTextarea($event)"
                    rows="1"
                    v-model="description"
                    type="text"
                    class="w-full p-2 text-sm border-1 border border-slate-200 rounded-xl text-slate-800"
                    placeholder="Описание подборки"
                    :required="false"
                />
                <p class="text-sm">Выберите изображение подборки</p>
                <div class="border-1 border border-slate-200 rounded-xl p-1">
                    <input
                        @change="handleFilepond($event)"
                        ref="file"
                        type="file"
                        accept="image/png, image/jpeg"
                        class="p-2 text-sm text-slate-800 file:mr-4 ring-0 focus:ring-0 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 file:cursor-pointer"
                        placeholder="Описание подборки"
                        :required="isCreated ? false : true"
                    />
                </div>
                <!-- <button
                    type="button"
                    class="mt-5 block py-2 px-4 rounded-full border-0 text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                >
                    Добавить фильм
                </button> -->
            </div>
            <button
                class="mt-5 block py-2 px-4 rounded-full border-0 text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
            >
                Подтвердить
            </button>
        </form>
    </Base>
</template>
<script>
import axios from "axios";
import PostAttachFilms from "@/Components/PostAttachFilms.vue";
import Modal from "@/Components/Modal.vue";
export default {
    props: {
        post: null,
    },
    data() {
        return {
            title: null,
            tag: null,
            tags: [],
            description: null,
            formData: new FormData(),
            errors: {},
            step: 1,
            films: null,
            post_data: this.post,
            isCreated: this.post != null ? true : false,
        };
    },
    methods: {
        handleFilepond(e) {
            let formData =
                this.formData != null ? this.formData : new FormData();
            const file = e.target.files[0];
            formData.append("image", file);
        },
        handleErrors(res) {
            if (res.response.status == 422) {
                this.errors = res.response.data.errors;
                console.log("CATCHED ERRORS", this.errors);
                this.showModal = false;
            }
        },
        submit() {
            this.formData.append("title", this.title);
            this.formData.append("description", this.description);
            if (!this.isCreated) {
                axios
                    .post(route("post.create"), this.formData)
                    .catch((res) => {
                        this.handleErrors(res);
                        console.log(res);
                        return;
                    })
                    .then((res) => {
                        // this.step = 2;
                        this.isCreated = true;
                        this.post_data = res.data;
                        // window.location = route("post.finish", [
                        //     this.post_data.id,
                        // ]);
                        this.$inertia.visit(
                            route("post.finish", [this.post_data.id])
                        );
                        console.log(res);
                        this.errors = {};
                    });
            } else {
                this.formData.append("post_id", this.post_data.id);
                this.formData.append("_method", "PUT");
                axios
                    .post(route("post.update"), this.formData)
                    .catch((res) => {
                        this.handleErrors(res);
                        console.log(res);
                    })
                    .then((res) => {
                        this.post_data = res.data;

                        // window.location = route("post.finish", [
                        //     this.post_data.id,
                        // ]);
                        this.$inertia.visit(
                            route("post.finish", [this.post_data.id])
                        );
                        this.step = 2;
                        this.errors = {};
                    });
            }
        },
        handleInputTextarea(e) {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
        },
    },
    mounted() {
        if (this.isCreated) {
            this.title = this.post.title;
            this.description = this.post.description.replace(/<br \/>/g, "");
        }
    },
    components: { PostAttachFilms, Modal },
};
</script>
