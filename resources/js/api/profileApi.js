import axios from "@/axios/AxiosWrapper.js";
import { toFormData } from "@/helpers/FileHandler.js";

export const profileApi = {
    uploadAvatar: (media, callback) => {
        const formData = toFormData("image", media);
        axios.post(route("user.upload.avatar"), formData).then((res) => {
            return callback(res);
        });
    },
    uploadCover: (media, callback) => {
        const formData = toFormData("image", media);
        axios.post(route("user.upload.subsite.cover"), formData).then((res) => {
            return callback(res);
        });
    },
};
