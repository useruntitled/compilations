export const declineApi = {
    withRoute: async (route, id, reason, callback = () => {}) => {
        await axios
            .post(route, {
                _method: "PUT",
                id: id,
                reason: reason,
            })
            .then((res) => {
                return callback(res);
            });
    },
};
