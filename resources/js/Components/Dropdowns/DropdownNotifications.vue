<template>
    <Dropdown width="350" v-if="$page.props.auth.user">
        <template
            #trigger
            v-if="notifications_count <= 0 || notificationsHaveBeenRead"
        >
            <div class="px-3" @click="open()">
                <BtnIcon class="flex items-center"
                    ><IconBell class="w-[28px] h-[28px] stroke-[2px]"></IconBell
                ></BtnIcon>
            </div>
        </template>
        <template #trigger v-else>
            <div @click="open()" class="px-3">
                <BtnIcon>
                    <div class="flex items-center">
                        <IconBell
                            class="w-[28px] h-[28px] stroke-[2px]"
                        ></IconBell>
                        <span
                            class="absolute ms-3 mt-3 px-[5px] text-xs rounded-full bg-red-500 text-white"
                            >{{ notifications_count }}</span
                        >
                    </div>
                </BtnIcon>
            </div>
        </template>
        <template #content>
            <p class="text-start font-medium p-5 py-2">Уведомления</p>
            <div v-if="notifications_count">
                <div v-for="(items, key) in notificationsGroup">
                    <component
                        :is="items[0].type.replace('App\\Notifications\\', '')"
                        :notifications="items"
                        :count="notificationsGroup[key].length"
                    ></component>
                </div>
                <div v-if="notifications_count >= 5">
                    <hr />
                    <Link :href="route('notifications')">
                        <button class="p-[5px] text-dtfpr">
                            Все уведомления
                        </button></Link
                    >
                </div>
            </div>
            <div
                v-if="notifications_count == 0 && notificationsIsLoaded"
                class="p-5"
            >
                <p class="text-xl font-medium">Уведомлений пока нет</p>
                <p class="text-secondary mt-5">
                    Делайте хорошие подборки и пишите комментарии, и здесь
                    станет не так пусто!
                </p>
            </div>
            <div v-if="isLoading" class="p-5">
                <div class="flex justify-center">
                    <AnimationLoader></AnimationLoader>
                </div>
            </div>
        </template>
    </Dropdown>
</template>
<script>
import axios from "axios";
import BtnIcon from "../BtnIcon.vue";
import Dropdown from "../Dropdown.vue";
import IconBell from "../Icons/IconBell.vue";
import AnimationLoader from "../Animations/AnimationLoader.vue";
import PostWasCommentedNotification from "@/Components/Notifications/PostWasCommentedNotification.vue";
import ReplyNotification from "../Notifications/ReplyNotification.vue";
import PostUpNotification from "../Notifications/PostUpNotification.vue";

export default {
    props: {},
    data() {
        return {
            notifications_count: this.$page.props.auth.user
                ? this.$page.props.auth.user.unreadNotifications_count
                : 0,
            notificationsHaveBeenRead: false,
            notificationsIsLoaded: false,
            notifications: null,
            isLoading: false,
            notificationsGroup: this.notifications,
        };
    },

    methods: {
        open() {
            if (!this.notificationsHaveBeenRead) {
                this.LoadNotificationsAndRead();
            }
        },
        group() {
            const resultObject = {};
            let count;
            if (this.notifications) {
                this.notifications.forEach((n) => {
                    const type = n.type;
                    const readed = n.read_at == null ? false : true;
                    const id = n.data.object_id;
                    const key = `${type}-${readed}-${id}`;
                    if (!resultObject[key]) resultObject[key] = [];
                    resultObject[key].push(n);
                    count++;
                });
            }
            // return resultObject;
            this.notifications_count = count;
            this.notificationsGroup = resultObject;
        },
        LoadNotificationsAndRead() {
            this.isLoading = true;
            this.notificationsIsLoaded = false;
            axios
                .get(
                    route("notifications.get", [this.$page.props.auth.user.id])
                )
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    this.notifications = res.data;
                    this.group();
                    this.notifications_count = res.data.length;
                    this.isLoading = false;
                    this.notificationsIsLoaded = true;
                });
            this.readNotifications();
        },
        readNotifications() {
            axios
                .post(route("notifications.read"))
                .catch((res) => {
                    console.log(res);
                })
                .then((res) => {
                    console.log(res);
                    this.notificationsHaveBeenRead = true;
                });
        },
    },
    mounted() {
        if (this.$page.props.auth.user) {
            console.log("Connecting");
            // Echo.channel(`private-users.${this.$page.props.auth.user.id}`).listen(
            //     "reputation.put.event",
            //     (data) => {
            //         console.log(data);
            //     }
            // );
            // console.log(Echo);

            var channel = Echo.private(
                `users.${this.$page.props.auth.user.id}`
            );
            channel.listen(".unread.notifications.count", (data) => {
                console.log(data);
                this.notifications_count = data.unreadNotifications_count;
                this.notificationsHaveBeenRead = false;
            });
        }
    },
    components: {
        Dropdown,
        IconBell,
        BtnIcon,
        AnimationLoader,
        PostWasCommentedNotification,
        ReplyNotification,
        PostUpNotification,
    },
};
</script>
