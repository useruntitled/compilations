<template>

    <div class="h-full min-h-screen">
        <div class="mb-4">
            <admin-search-inertia-input
                :href="page.url"
                :search="props.search"
            />
        </div>

        <div class="bg-dark-700 p-5">
            <slot/>
        </div>

        <div class="mb-10 fixed bottom-0 mt-10  py-5 border-t-2 border-panelbck w-full max-w-screen-xl">
            <admin-pagination :links="list.links" :last_page="list.last_page"/>
        </div>
    </div>
</template>
<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import AdminPagination from "@/Components/Admin/AdminPagination.vue";
import AdminSearchInertiaInput from "@/Components/Admin/AdminSearchInertiaInput.vue";
import {usePage} from "@inertiajs/vue3";

const props = defineProps({
    list: null,
    search: null,
});

const page = usePage();


defineOptions({
    layout: PanelLayout
})


</script>
<style scoped>
* {
    color: rgb(181 181 189);
}
</style>
