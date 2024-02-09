<template>
    <div class="relative flex">
        <div class="flex items-center justify-center">
            <div
                v-blur
                class="absolute rounded-full transition-all blur-sm opacity-1 duration-200"
                style="width: 80px; height: 80px"
            ></div>
            <picture
                class="bg-shit rounded-full"
                style="width: 90px; height: 90px"
            >
                <img
                    v-appear
                    class="rounded-full opacity-0 duration-200"
                    :src="route('im', [href, '1000x1000'])"
                    alt=""
                />
            </picture>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    href: String,
});

const vBlur = {
    mounted: (el) => {
        setTimeout(() => {
            el.classList.add("opacity-0");
        }, 400);
    },
};

const vAppear = {
    mounted: (el) => {
        setTimeout(() => {
            el.classList.remove("opacity-0");
        }, 200);
    },
};
</script>
