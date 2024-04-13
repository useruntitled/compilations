<template>
    <div class="flex items-center">
        <span class="text-sm absolute pl-2"
            ><IconSearch
                class="w-5 h-5 stroke-2 opacity-70 text-slate-700"
            ></IconSearch
        ></span>
        <input
            @focus="emit('focus')"
            @focusout="emit('focusout')"
            v-model="model"
            type="text"
            :placeholder="placeholder"
            class="w-full pl-10 rounded-xl w-full text-[16px] font-medium border-0 bg-gray-100 p-3 px-4 hover:bg-white focus:bg-white border-[1px] border-white hover:border-orange-500 focus:ring-orange-200 focus:border-orange-500 focus:ring-2 ring-2 ring-white hover:ring-orange-200"
        />
    </div>
</template>
<script setup>
import IconSearch from "../Icons/IconSearch.vue";

const model = defineModel();

const emit = defineEmits(["focus", "focusout"]);

const props = defineProps({
    placeholder: {
        type: String,
        default: "",
    },
});
</script>
