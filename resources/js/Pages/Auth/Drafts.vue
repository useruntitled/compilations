<template>
    <Base>
        <p>Черновики</p>
        <div class="shadow rounded-lg p-5 mt-5">
            <div v-for="draft in drafts" :key="draft.id">
                <Compilation :post="draft" mode="draft"></Compilation>
            </div>
        </div>
    </Base>
</template>
<script>
import Compilation from "@/Components/Compilation.vue";
export default {
    props: {
        drafts: null,
    },
    components: {
        Compilation,
    },
};
</script>
