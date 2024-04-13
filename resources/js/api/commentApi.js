import axios from "axios";

export const commentApi = {
    store: (instance, callback) => {
        axios
            .post(route("comment.store"), makeFormData(instance, "POST"))
            .then((res) => {
                return callback(res);
            });
    },
    update: (instance, callback) => {
        axios
            .post(route("comment.update"), makeFormData(instance, "PUT"))
            .then((res) => {
                return callback(res);
            });
    },
    destroy: (id, callback) => {
        axios
            .post(route("comment.delete"), {
                _method: "DELETE",
                id: id,
            })
            .then((res) => {
                return callback(res);
            });
    },
    getByPostId: async (id, callback) => {
        await axios.get(route("comments.get", [id])).then(async (res) => {
            return callback(res);
        });
    },
};

function makeFormData(instance, method) {
    const data = {};
    data._method = method;
    data.id = instance.id;
    if (instance.post_id) data.post_id = instance.post_id;
    data.text = instance.text;
    if (instance.image != null) data.image = instance.image;
    if (instance.comment_id) data.comment_id = instance.comment_id;
    console.log(data);
    return data;
}
