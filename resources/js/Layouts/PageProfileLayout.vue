<template>
    <Head>
        <title>Страница {{ user.name }}</title>
    </Head>
    <div class="bg-white p-5 pb-2 rounded-xl">
        <div class="flex justify-between">
            <img
                class="rounded-full"
                v-lazy="route('im', [user.avatar, '1000x1000'])"
                alt=""
                style="width: 90px"
            />
        </div>
        <p class="text-xl font-semibold">{{ user.name }}</p>
        <!-- <p class="font-semibold">{{ karma }}</p> -->
        <KarmaCountWithEmoji :karma="karma"></KarmaCountWithEmoji>
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
                linkWidth +
                'px;' +
                'translate: ' +
                ' ' +
                linkPosition +
                'px'
            "
        ></div>
    </div>
    <div class="mt-5 bg-white rounded-xl">
        <slot></slot>
    </div>
</template>
<script>
import KarmaCountWithEmoji from "@/Components/KarmaCountWithEmoji.vue";

export default {
    props: {
        user: null,
        karma: null,
        section: null,
    },
    data() {
        return {
            selectedSection: parseInt(this.section),
            countOfLinks: 2,
            linkWidth: null,
            linkPosition: null,
        };
    },
    watch: {
        selectedSection(newValue, oldValue) {
            this.setLinkPosition(newValue);
            this.setLinkWidth(newValue);
        },
    },
    methods: {
        setLinkWidth(index) {
            if (this.$refs[`link-${index}`])
                this.linkWidth = this.$refs[`link-${index}`].clientWidth;
        },
        setLinkPosition(index) {
            // если реф существуют, то
            if (this.$refs[`link-${index}`]) {
                if (index == 1) {
                    this.linkPosition = 0;
                    return;
                }
                let sum = 0;
                for (let i = 0; i < this.countOfLinks - 1; i++) {
                    sum += this.$refs[`link-${index}`].clientWidth - 5;
                }
                this.linkPosition = sum;
            }
        },
    },
    mounted() {
        this.$watch(
            () => this.$page.url,
            (newUrl, oldUrl) => {
                if (newUrl.slice(-1) > 2) {
                    this.selectedSection = 1;
                }
            }
        );
        this.setLinkPosition(this.selectedSection);
        this.setLinkWidth(this.selectedSection);
        // alert(this.setLinkPosition(this.selectedSection));
    },
    components: { KarmaCountWithEmoji },
};
</script>
