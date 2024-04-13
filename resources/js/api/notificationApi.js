export const notificationApi = {
    listen: (user_id, callback) => {
        const channel = Echo.private(`users.${user_id}`);
        channel.listen(".unread.notifications.count", (data) => {
            callback(data);
        });
    },
    get: async (callback) => {
        await axios.get(route("me.notifications.get")).then((res) => {
            return callback(res);
        });
    },
    markAsRead: async (callback) => {
        await axios
            .post(route("me.notifications.read"), {
                _method: "PATCH",
            })
            .catch((res) => {
                console.log(res);
            })
            .then((res) => {
                console.log(res);
                return callback(res);
            });
    },
};
