<template>
    <Head>
        <title>Страница {{ user.name }}</title>
    </Head>
    <div class="bg-white p-5 pb-2 rounded-xl">
        <div class="flex justify-between">
            <img
                class="rounded-full"
                :src="route('image.crop', [user.avatar, '1000x1000'])"
                alt=""
                style="max-width: 90px"
            />
        </div>
        <p class="text-xl font-semibold">{{ user.name }}</p>
        <p class="font-semibold">{{ karma }}</p>
        <div class="flex items-center mt-2">
            <Link
                @click="selectedSection = 1"
                :href="route('profile', [user.id, 1])"
                ><button ref="link-1">Подборки</button></Link
            >
            <Link
                @click="selectedSection = 2"
                :href="route('profile', [user.id, 2])"
                ><button ref="link-2" class="ms-5">Комментарии</button></Link
            >
        </div>
        <!-- movable underline  -->
        <div
            ref="underline"
            class="bg-orange-500 w-20 h-1 absolute duration-200 mt-1 rounded"
            :style="
                'width:' +
                ' ' +
                getLinkWidth(selectedSection) +
                'px;' +
                'translate: ' +
                ' ' +
                setLinkPosition(selectedSection) +
                'px'
            "
        ></div>
    </div>
    <div class="mt-5 bg-white rounded-xl">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        user: null,
        karma: null,
        section: null,
    },
    data() {
        return {
            selectedSection: this.section,
            countOfLinks: 2,
        };
    },
    watch: {
        selectedSection(newValue, oldValue) {
            this.setLinkPosition(newValue);
        },
    },
    methods: {
        getLinkWidth(index) {
            if (this.$refs[`link-${index}`])
                return this.$refs[`link-${index}`].clientWidth;
        },
        setLinkPosition(index) {
            if (this.$refs[`link-${index}`]) {
                if (index == 1) return 0;
                let sum = 0;
                for (let i = 0; i < this.countOfLinks - 1; i++) {
                    sum += this.$refs[`link-${index}`].clientWidth - 5;
                }
                return sum;
            }
        },
    },
    mounted() {
        this.setLinkPosition(this.selectedSection);
    },
};
</script>
