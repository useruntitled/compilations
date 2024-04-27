export const filmApi = {
    update: async (data, callback = () => {}) => {
        await axios
            .post(route("panel.films"), {
                _method: "PUT",
                ...data,
            })
            .then((res) => {
                return callback(res);
            });
    },
};
