export const listenNotifications = (user_id, callback) => {
    var channel = Echo.private(`users.${user_id}`);
    channel.listen(".unread.notifications.count", (data) => {
        callback(data);
    });
}

export const LoadNotifications = async (callback) => {
    await axios.get(route("me.notifications.get")).then((res) => {
        callback(res);
    });
};

export const markNotificationsAsRead = async (callback) => {
    await axios
        .post(route("me.notifications.read"), {
            _method: "PATCH",
        })
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            console.log(res);
            callback(res);
        });
};
