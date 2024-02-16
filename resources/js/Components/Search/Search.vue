<template>
        <div class="flex items-center w-full mx-auto" >
                            <span class="text-sm absolute pl-2 "
                            ><IconSearch
                                class="text-slate-600 text-secondary opacity-70 w-5 h-5"

                            ></IconSearch
                            ></span>
            <input
                @focus="showResultsBlock = true"
                v-model="search"
                list="films"
                type="text"
                placeholder="Поиск"
                class="appearance-none w-full border-[0.2px] border-opacity-0 font-regular ps-10 border-orange-300 hover:border-opacity-100 rounded-xl outline-orange-500 outline-0 hover:ring-[2px] ring-opacity-[10] hover:ring-orange-300 hover:ring-opacity-50  text-md duration-300 text-slate-900 hover:bg-white focus:ring-kpnpale focus:ring-opacity-[10] focus:bg-white focus:border-orange-500"
                :class="bgInputColor"
            />
        </div>
        <div v-show="(posts?.length || users?.length ) && showResultsBlock" class="w-full p-0 " @click="showResultsBlock = false"  @mouseup="showResultsBlock = true" >
            <div class="relative max-w-full">
                <div class="absolute  w-full z-[20] ">
                    <div class="bg-white shadow-sm px-5 py-5 rounded-xl mt-2 ">
                        <div class="space-y-2">
                            <div v-for="post in posts">
                                <Link :href="route('post', [post.id, post.slug])">
                                    {{ post.title }}
                                </Link>
                            </div>
                            <div v-for="user in users">
                                <Link :href="route('profile', [user.id])">
                                    <div class="flex items-center space-x-2">
                                        <div>
                                            <lazy-image
                                                :preview="'/media/' + user.avatar_preview"
                                                :then="route('im', [user.avatar, 100])"
                                                class="w-10 h-10 rounded-full border-2"
                                            ></lazy-image>
                                        </div>
                                        <div>
                                            {{ user.name }}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="w-screen h-screen inset-0 absolute z-0" v-show="showResultsBlock" @click="showResultsBlock = false"></div>
        </div>
</template>
<script setup>
import IconSearch from "@/Components/Icons/IconSearch.vue";
import {ref, watch} from "vue";
import {throttle} from "lodash/function.js";
import LazyImage from "@/Components/LazyImage.vue";

const props = defineProps({
    class: null,
    bgInputColor: {
        default: 'bg-kpnpale'
    }
});


const search = ref(null);

const posts = ref(null);

const showResultsBlock = ref(false);

const users = ref(null);

const loadResult = (query) => {
    axios.get(route('search.query', [query]))
        .then((res) => {
            posts.value = (res.data.posts);
            users.value = (res.data.users);
            if(res.data.posts?.length === 0 && res.data.users?.length === 0) {
                posts.value = null;
                users.value = null;
            }
        })
}

watch(search, throttle((newValue, oldValue) => {
    if(newValue == '') {
        posts.value = null;
        users.value = null;
    }
    loadResult(newValue);
},500))
</script>
