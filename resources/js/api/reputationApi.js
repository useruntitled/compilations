export const reputationApi = {
    store: async (id, type, action, callback = () => {}) => {
        await axios
            .post(route("reputation.store"), {
                id: id,
                type: type,
                action: action,
            })
            .then((res) => {
                return callback(res);
            });
    },
    update: async (id, action, callback = () => {}) => {
        await axios
            .post(route("reputation.update"), {
                _method: "PUT",
                id: id,
                action: action,
            })
            .then((res) => {
                return callback(res);
            });
    },
    destroy: async (id, callback = () => {}) => {
        await axios
            .post(route("reputation.destroy"), {
                _method: "DELETE",
                id: id,
            })
            .then((res) => {
                return callback(res);
            });
    },
};
