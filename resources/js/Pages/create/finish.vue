<template>
    <Base :title="post.title">
        <div class="bg-white p-5 rounded-xl">
            <p>Завершить настройку подборки</p>
            <div class="px-5 my-5">
                <PostAttachFilms :post="post"></PostAttachFilms>
                <div class="mt-2">
                    <button
                        @click="goBack()"
                        class="mt-5 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                    >
                        Назад
                    </button>
                    <!-- <button
                    @click="publish()"
                    class="mt-5 ml-2 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-orange-50 text-orange-700 hover:bg-orange-100"
                >
                    Завершить
                </button> -->
                    <PrimaryButton @click="publish"> Завершить </PrimaryButton>
                </div>
            </div>
        </div>
    </Base>
</template>
<script>
import PostAttachFilms from "@/Components/PostAttachFilms.vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
PostAttachFilms;
export default {
    props: {
        post: null,
    },
    data() {
        return {
            post_data: this.post ?? null,
        };
    },
    methods: {
        publish() {
            axios
                .post(route("post.publish"), {
                    id: this.post_data.id,
                    _method: "PUT",
                })
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    if (res.status == 200) {
                        // window.location = route("post", [
                        //     this.post_data.id,
                        //     this.post_data.slug,
                        // ]);
                        this.$inertia.visit(
                            route("post", [
                                this.post_data.id,
                                this.post_data.slug,
                            ])
                        );
                    }
                    console.log("Published");
                });
        },
        goBack() {
            // window.location = route("post.edit", [
            //     this.post_data.id,
            //     this.post_data.slug,
            // ]);
            this.$inertia.visit(
                route("post.edit", [this.post_data.id, this.post_data.slug])
            );
        },
    },
    components: { PostAttachFilms, PrimaryButton },
};
</script>
