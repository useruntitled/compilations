<template>
    <div class="inset-0 mb-0 bg-white md:hidden">
        <div class="flex items-center">
            <Link
                preserve-scroll
                :href="route('home')"
            >
                <button
                    class=" rounded-xl p-2 font-medium"
                    :class="{'border-b-2': isActive('home')}">Популярное
                </button>
            </Link
            >
            <Link
                preserve-scroll
                :href="route('new')"
            >
                <button
                    class="ms-2 rounded-xl p-2 font-medium"
                    :class="{'border-b-2': isActive('new')}">
                    Свежее
                </button>
            </Link
            >
            <auth-link
                preserve-scroll
                :href="route('me.bookmarks')"
            >
                <button
                    class="ms-2 rounded-xl p-2 font-medium"
                    :class="{'border-b-2': isActive('bookmarks')}">
                    Закладки
                </button>
            </auth-link
            >
        </div>
    </div>

</template>

<script setup>
import {usePage} from "@inertiajs/vue3";
import AuthLink from "@/Components/AuthLink.vue";

const page = usePage();

const component = page.component;

const isActive = (page) => {
    return component === pages[page];
}

const pages = {
    'home': 'Home/Index',
    'new': 'Home/New',
    'bookmarks': 'Auth/Bookmarks'
};
</script>
