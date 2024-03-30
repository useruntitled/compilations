<template>
    <Head>
        <title>Страница {{ user.name }}</title>
    </Head>

    <div class="max-w-screen">
        <div
            class="bg-white rounded-xl "

        >
                <subsite-cover :user="props.user"/>
            <div class="sm:px-5 xs:px-2 pb-2">
                <div class="flex justify-between items-center">
                    <div class="mt-[-32px]">
                        <input
                            type="file"
                            class="hidden"
                            ref="filepond_avatar"
                            accept="image/*"
                            @input="handleFile('avatar', $event)"
                        />
                        <uploadable-lazy-media
                            @click="!avatarIsUploading && canUpload  ? filepond_avatar.click() : ''"
                            @mouseenter="avatarIsHovered = true"
                            :media="user.avatar"
                            width="90"
                            height="90"
                            rounded="full"
                            border="3.5"
                            class="cursor-pointer"
                            :canUpload="canUpload"
                        />
                    </div>
                    <Link
                        v-if="
                        page.props.auth.check &&
                        page.props.auth.user.id == user.id
                    "
                        class="bg-gray-100 p-2 rounded-xl hover:opacity-70"
                        :href="route('settings')"
                    >
                        <IconTooth class="w-[20px] h-[20px] stroke-2"></IconTooth>
                    </Link>
                </div>
                <p class="text-xl font-medium">{{ user.name }}</p>
                <p class="text-sm" v-html="user.subsite?.description"></p>
                <karma-count-with-emoji :karma="karma"></karma-count-with-emoji>

                <div class="flex items-center mt-4">
                    <Link
                        preserve-scroll
                        @click="selectedSection = 1"
                        :href="route('profile', [user.id])"
                        :only="['posts', 'section']"
                    ><button ref="linkFirst">Подборки</button></Link
                    >
                    <Link
                        preserve-scroll
                        @click="selectedSection = 2"
                        :href="route('profile.comments', [user.id])"
                        :only="['comments', 'section']"
                    ><button ref="linkSecond" class="ms-5">
                        Комментарии
                    </button></Link
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
        </div>
        <div class="mt-5 xs:w-screen md:w-auto">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
import {ref, watch, computed, onMounted, inject} from "vue";
import IconPhoto from "@/Components/Icons/IconPhoto.vue";
import ZoomableImage from "@/Components/ZoomableImage.vue";
import KarmaCountWithEmoji from "@/Components/KarmaCountWithEmoji.vue";
import { usePage } from "@inertiajs/vue3";
import IconTooth from "@/Components/Icons/IconTooth.vue";
import LazyImage from "@/Components/LazyImage.vue";
import { nextTick } from "vue";
import axios from "@/AxiosWrapper.js";
import axiosInstance from "@/AxiosWrapper.js";
import LazyMedia from "@/Components/Media/LazyMedia.vue";
import AnimationLoader from "@/Components/Animations/AnimationLoader.vue";
import SubsiteCover from "@/Components/Media/SubsiteCover.vue";
import UploadableLazyMedia from "@/Components/Media/UploadableLazyMedia.vue";

const props = defineProps({
    user: null,
    karma: null,
    section: null,
});


const injectedCallMessage = inject("callMessage");

axiosInstance.setCallbackFunction(injectedCallMessage);

const canUpload = computed(() => {
    return page.props.auth.check && page.props.auth.user.id === props.user.id;
})

const page = usePage();

const selectedSection = ref(parseInt(props.section.value));
const linkWidth = ref(null);
const linkPosition = ref(null);

// const vPlay = {
//     mounted: (el) => el.play(),
// };

const linkFirst = ref(null);
const linkSecond = ref(null);

watch(
    () => props.section,
    () => {
        selectedSection.value = props.section;
    }
);

const setLinkWidth = (index) => {
    if (index == 1) {
        linkWidth.value = linkFirst.value.clientWidth;
    } else {
        linkWidth.value = linkSecond.value.clientWidth;
    }
};

const setLinkPosition = (index) => {
    if (index == 1) linkPosition.value = 0;
    else linkPosition.value = linkSecond.value.clientWidth - 10;
};

watch(selectedSection, () => {
    setLinkWidth(selectedSection.value);
    setLinkPosition(selectedSection.value);
});

onMounted(() => {
    selectedSection.value = props.section;
});

const avatarIsHovered = ref(false);


const filepond_avatar = ref(null);

const showUploadAvatar = computed(() => {
    if (page.props.auth.check && page.props.auth.user.id == props.user.id) {
        return avatarIsHovered.value;
    }
    return false;
});

const avatarIsUploading = ref(false);

const isUploaded = ref(false);

const uploadAvatar = (file, base64) => {
    avatarIsUploading.value = true;
    props.user.avatar = base64;

    const formData = new FormData();
    formData.append("image", file);

    axios
        .post(route("user.upload.avatar"), formData)
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            console.log(res);
            if (res.status == 200) {
                avatarIsUploading.value = false;
                props.user.avatar = res.data;
                isUploaded.value = true;
            }
        });
};


const handleFile = (type, e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
        uploadAvatar(file, e.target.result);
    };
    reader.readAsDataURL(file);
};
</script>
