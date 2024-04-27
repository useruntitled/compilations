import axios from "@/axios/AxiosWrapper.js";

export const bookmarkApi = {
    store: async (id, callback = () => {}) => {
        await axios
            .post(route("bookmark.store"), {
                _method: "POST",
                post_id: id,
            })
            .then((res) => {
                return callback(res);
            });
    },
    destroy: async (id, callback = () => {}) => {
        await axios
            .post(route("bookmark.destroy"), {
                _method: "DELETE",
                post_id: id,
            })
            .then((res) => {
                return callback(res);
            });
    },
};
