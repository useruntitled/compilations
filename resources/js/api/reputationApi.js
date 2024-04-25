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
    update: async (id, type, action, callback = () => {}) => {
        await axios
            .post(route("reputation.update"), {
                _method: "PUT",
                id: id,
                type: type,
                action: action,
            })
            .then((res) => {
                return callback(res);
            });
    },
    destroy: async (id, type, callback = () => {}) => {
        await axios
            .post(route("reputation.destroy"), {
                _method: "DELETE",
                id: id,
                type: type,
            })
            .then((res) => {
                return callback(res);
            });
    },
};
