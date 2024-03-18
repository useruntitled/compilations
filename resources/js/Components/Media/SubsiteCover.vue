<template>
    <div class="z-0">
        <input
            type="file"
            class="hidden"
            ref="filepond_background"
            accept="image/png, image/jpeg, image/jpg, image/webp, image/gif"
            @input="handleFile('background_image', $event)"
        />
        <div class="overflow-hidden" v-if="user.subsite?.cover">
            <uploadable-lazy-media
                @click="handleClick()"
                @mouseover="backgroundImageIsHovered = true"
                :media="user.subsite?.cover"
                width="640"
                height="200"
                rounded="t-xl"
                class="appearance-none bg-zinc-200 aspect-[640/200]  w-full rounded-t-xl object-cover xs:w-screen"
                :class="{'cursor-pointer': canUpload}"
                :can-upload="canUpload"
            />
        </div>
        <div
            v-else
            @mouseenter="backgroundImageIsHovered = true"
            @click="handleClick"
            class="appearance-none bg-zinc-200 aspect-[640/200] min-w-[640px] w-full rounded-t-xl object-cover z-0"
            :class="{'cursor-pointer': canUpload}"
        >
            <icon-photo v-show="canUpload" class="w-full h-full"/>
        </div>
    </div>
</template>
<script setup>
import LazyImage from "@/Components/LazyImage.vue";
import IconPhoto from "@/Components/Icons/IconPhoto.vue";
import {computed, ref} from "vue";
import axios from "@/AxiosWrapper.js";
import {usePage} from "@inertiajs/vue3";
import LazyMedia from "@/Components/Media/LazyMedia.vue";
import AnimationLoader from "@/Components/Animations/AnimationLoader.vue";
import UploadableLazyMedia from "@/Components/Media/UploadableLazyMedia.vue";

const page = usePage();

const props = defineProps({
    user: null,
})

const filepond_background = ref(null);
const backgroundImageIsHovered = ref(false);
const backgroundImageIsUploading = ref(false);
const isUploaded = ref(false);

const showUploadBackground = computed(() => {
    if (page.props.auth.check && page.props.auth.user.id == props.user.id) {
        return backgroundImageIsHovered.value;
    }
    return false;
});

const canUpload = computed(() => {
    return page.props.auth.check && page.props.auth.user.id === props.user.id;
});

const handleClick = () => {
    if (canUpload.value && !backgroundImageIsUploading.value) {
        filepond_background.value.click();
        backgroundImageIsHovered.value = false;
    }
}


const uploadBackgroundImage = (file, base64) => {
    backgroundImageIsUploading.value = true;
    props.user.subsite.cover = base64;

    const formData = new FormData();
    formData.append("image", file);

    axios
        .post(route("user.upload.subsite.cover"), formData)
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            console.log(res);

            if (res.status == 200) {

                props.user.subsite.cover = res.data;
                backgroundImageIsUploading.value = false;
                isUploaded.value = true;
            }
        });
};

const handleFile = (type, e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
        uploadBackgroundImage(file, e.target.result);
    };
    reader.readAsDataURL(file);
};
</script>
