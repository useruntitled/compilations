import axios from "@/AxiosWrapper.js";

export const bookmarkApi = {
    store: async (id, callback = () => {}) => {
        await axios
            .post(route("bookmark.store"), {
                _method: "PUT",
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
