const apiChannel = "all";
const apiEvent = ".comments.feed";
const broadcastChannel = new BroadcastChannel(apiChannel + apiEvent);



let isSubscribed = false;


export const listenFeedUpdates = (callback) => {
    const echoChannel = Echo.channel(apiChannel);

    echoChannel.subscribe(apiEvent);

    echoChannel.subscribed(() => {
        isSubscribed = true;
        console.log('Laravel Echo: connected');
        broadcastChannel.postMessage('subscription');

        broadcastChannel.onmessage = e => {
            if(e.data == "subscription") {
                broadcastChannel.postMessage('stop your subscribtion');
                console.log("Post message to new tab: stop your subscription")
            }
            else if(e.data == 'stop your subscribtion') {
                echoChannel.stopListening(apiEvent);
                echoChannel.unsubscribe(apiEvent);
                isSubscribed = false;
                console.log('Laravel Echo: disconnected')
            } else {
                broadcastChannel.onmessage = e => {
                    console.log('Message from tab', e.data);
                    callback(e.data);
                }
            }
        }
        if(isSubscribed) {
            echoChannel.listen(apiEvent, (rawData) => {
                broadcastChannel.postMessage(rawData);
                callback(rawData);
            });
        } 
    })
}

export const getFeed = (callback) => {
    axios
        .get(route("comments.get.last"))
        .catch((res) => {
            console.log(res);
        })
        .then((res) => {
            // console.log(res);
            if (res.status == 200) {
                callback(res.data);
            }
        });
}