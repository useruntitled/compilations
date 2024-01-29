<template>
    <Head>
        <title>Страница {{ user.name }}</title>
    </Head>
    <div class="bg-white rounded-xl">
        <div class="flex">
            <input
                type="file"
                class="hidden"
                ref="filepond_background"
                accept="image/*"
                @input="handleFile('background_image', $event)"
            />
            <div
                @click="filepond_background.click()"
                v-if="showUploadBackground"
                @mouseleave="backgroundImageIsHovered = false"
                class="absolute bg-black bg-opacity-20 rounded-t-xl flex items-center cursor-pointer aspect-[640/200] w-[640px]"
            >
                <IconPhoto
                    class="w-10 h-10 mx-auto stroke-4 border-white"
                ></IconPhoto>
            </div>
            <!-- <img
                class="appearance-none bg-zinc-200 aspect-[640/200] w-full rounded-t-xl object-cover"
                v-lazy="
                    !backgroundImageIsUploading
                        ? route('im', [user.background_image ?? '', '1000'])
                        : user.background_image
                "
                @mouseover="backgroundImageIsHovered = true"
            /> -->
            <div class="overflow-hidden" v-if="user.background_image">
                <LazyImage
                    @mouseover="backgroundImageIsHovered = true"
                    :preview="`/media/${user.background_image_preview}`"
                    :than="route('im', [user.background_image, 1000])"
                    class="appearance-none bg-zinc-200 aspect-[640/200] w-full rounded-t-xl object-cover"
                    style="min-width: 640px"
                >
                </LazyImage>
            </div>
            <div
                v-else
                @mouseover="backgroundImageIsHovered = true"
                class="appearance-none bg-zinc-200 aspect-[640/200] w-full rounded-t-xl object-cover"
            ></div>
        </div>
        <div class="px-5 pb-2">
            <div class="flex justify-between items-center">
                <div class="mt-[-32px]">
                    <div v-if="page.props.auth.user?.id != user.id">
                        <ZoomableImage
                            :preview="'/media/' + user.avatar_preview"
                            :than="route('im', [user.avatar, '1000'])"
                            class="border-gray-100 border-[3.5px] rounded-full w-[90px] h-[90px] object-cover"
                            style="width: 90px; height: 90px"
                        >
                        </ZoomableImage>
                    </div>
                    <div v-else class="flex items-center justify-between">
                        <input
                            type="file"
                            class="hidden"
                            ref="filepond_avatar"
                            accept="image/*"
                            @input="handleFile('avatar', $event)"
                        />
                        <div
                            @click="filepond_avatar.click()"
                            v-if="showUploadAvatar"
                            @mouseleave="avatarIsHovered = false"
                            class="absolute bg-black bg-opacity-20 rounded-full flex items-center cursor-pointer z-30"
                            style="width: 90px; height: 90px"
                        >
                            <IconPhoto
                                class="w-10 h-10 mx-auto stroke-4 border-white"
                            ></IconPhoto>
                        </div>
                        <!-- <img
                            @mouseover="avatarIsHovered = true"
                            class="rounded-full border-gray-100 border-[3.5px] z-20"
                            :src="
                                !avatarIsUploading
                                    ? `/media/${user.avatar_preview}`
                                    : user.avatar
                            "
                            style="width: 90px; height: 90px"
                            alt=""
                        /> -->
                        <LazyImage
                            @mouseover="avatarIsHovered = true"
                            class="rounded-full border-gray-100 border-[3.5px] z-20"
                            style="width: 90px; height: 90px"
                            :preview="`/media/${user.avatar_preview}`"
                            :than="route('im', [user.avatar, 1000])"
                        ></LazyImage>
                    </div>
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
            <p class="text-sm" v-html="user.description"></p>
            <KarmaCountWithEmoji :karma="karma"></KarmaCountWithEmoji>

            <div class="flex items-center mt-4">
                <Link
                    preserve-scroll
                    @click="selectedSection = 1"
                    :href="route('profile', [user.id, 1])"
                    :only="['posts', 'section']"
                    ><button ref="linkFirst">Подборки</button></Link
                >
                <Link
                    preserve-scroll
                    @click="selectedSection = 2"
                    :href="route('profile', [user.id, 2])"
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
    <div class="mt-5">
        <slot></slot>
    </div>
</template>
<script setup>
import { ref, watch, computed, onMounted } from "vue";
import IconPhoto from "@/Components/Icons/IconPhoto.vue";
import ZoomableImage from "@/Components/ZoomableImage.vue";
import KarmaCountWithEmoji from "@/Components/KarmaCountWithEmoji.vue";
import { usePage } from "@inertiajs/vue3";
import axios from "axios";
import IconTooth from "@/Components/Icons/IconTooth.vue";
import LazyImage from "@/Components/LazyImage.vue";

const props = defineProps({
    user: null,
    karma: null,
    section: null,
});

const page = usePage();

const selectedSection = ref(parseInt(props.section.value));
const linkWidth = ref(null);
const linkPosition = ref(null);

const linkFirst = ref(null);
const linkSecond = ref(null);

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
const backgroundImageIsHovered = ref(false);

const filepond_avatar = ref(null);
const filepond_background = ref(null);
const showUploadAvatar = computed(() => {
    if (page.props.auth.check && page.props.auth.user.id == props.user.id) {
        return avatarIsHovered.value;
    }
    return false;
});
const showUploadBackground = computed(() => {
    if (page.props.auth.check && page.props.auth.user.id == props.user.id) {
        return backgroundImageIsHovered.value;
    }
    return false;
});
const avatarIsUploading = ref(false);
const backgroundImageIsUploading = ref(false);

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
            }
        });
};

const uploadBackgroundImage = (file, base64) => {
    backgroundImageIsUploading.value = true;
    props.user.background_image = base64;

    const formData = new FormData();
    formData.append("image", file);

    axios
        .post(route("user.upload.background.image"), formData)
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            console.log(res);
            if (res.status == 200) {
                backgroundImageIsUploading.value = false;
                props.user.background_image = res.data;
            }
        });
};

const handleFile = (type, e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
        if (type == "avatar") {
            uploadAvatar(file, e.target.result);
        } else {
            uploadBackgroundImage(file, e.target.result);
        }
    };
    reader.readAsDataURL(file);
};
</script>
