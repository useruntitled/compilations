<template>
    <Base :title="tag.name">
        <p class="text-sky-700 font-semibold text-center p-5 text-xl">
            #{{ tag.name }}
        </p>
        <main class="shadow rounded-xl p-5 my-5 text-sm">
            <Compilation v-for="post in posts" :post="post"></Compilation>
        </main>
    </Base>
</template>
<script>
import Compilation from "@/Components/Compilation.vue";
export default {
    props: {
        posts: null,
        tag: null,
    },
    components: { Compilation },
};
</script>
