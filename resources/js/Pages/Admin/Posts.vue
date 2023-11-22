<template>
    <Base title="Подборки">
        <p>Подборки</p>
        <main class="my-5 p-5 shadow rounded-xl">
            <div v-for="post in posts" :key="post.id">
                <Compilation :post="post"></Compilation>
            </div>
        </main>
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
