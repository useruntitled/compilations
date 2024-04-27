export const rolesApi = {
    addModerRole: async (id, callback = () => {}) => {
        await axios
            .post(route("panel.user.add.role.moder"), {
                id: id,
            })
            .then((res) => {
                return callback(res);
            });
    },
    removeModerRole: async (id, callback = () => {}) => {
        await axios
            .post(route("panel.user.remove.role.moder"), {
                _method: "DELETE",
                id: id,
            })
            .then((res) => {
                return callback(res);
            });
    },
};
