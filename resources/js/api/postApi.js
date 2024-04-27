import axios from "@/axios/AxiosWrapper.js";

export const postApi = {
    get: async (id, callback) => {
        await axios.get(route("post.get", [id])).then((res) => {
            return callback(res);
        });
    },
    getMostCommented: async (page, callback) => {
        await axios.get(route("posts.most-commented", [page])).then((res) => {
            return callback(res);
        });
    },
    getPopular: async (page, callback) => {
        await axios.get(route("posts.popular", [page])).then((res) => {
            return callback(res);
        });
    },
    getNew: async (page, callback) => {
        await axios.get(route("posts.new", [page])).then((res) => {
            return callback(res);
        });
    },
    store: async (data, callback) => {
        await axios.post(route("post.store"), data).then((res) => {
            return callback(res);
        });
    },
    update: async (data, callback) => {
        await axios.post(route("post.update"), data).then((res) => {
            return callback(res);
        });
    },
    publish: async (id, callback) => {
        await axios
            .post(route("post.publish"), {
                id: id,
            })
            .then((res) => {
                return callback(res);
            });
    },
    uploadImage: async (id, media, callback) => {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("image", media);
        await axios.post(route("post.upload.image"), formData).then((res) => {
            return callback(res);
        });
    },
};
