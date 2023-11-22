<template>
    <Base title="Подборки">
        <p>Последние подборки</p>
        <div v-if="posts.length == 0" class="shadow p-5 rounded-lg mt-5">
            <p class="text-sm">Пока нет подборок..</p>
        </div>
        <div class="mx-auto flex justify-center gap-5 flex-wrap">
            <div v-for="post in posts" :key="post.id" class="inline-block">
                <Compilation :post="post"></Compilation>
            </div>
        </div>
    </Base>
</template>
<script>
import Compilation from "@/Components/Compilation.vue";
export default {
    props: {
        posts: null,
    },
    components: { Compilation },
};
</script>
