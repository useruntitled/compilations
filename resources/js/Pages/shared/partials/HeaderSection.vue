<template>
    <div class="text-md">
        <p class="px-4 text-md py-2 font-semibold">Мой профиль</p>
        <DropdownLink :href="route('profile', [$page.props.auth.user.id])">
            <div class="flex">
                <img
                    :src="
                        route('image.crop', [
                            $page.props.auth.user.avatar,
                            ['40x40'],
                        ])
                    "
                    class="rounded-full inline-block"
                    alt=""
                />
                <span class="whitespace-no-wrap overflow-hidden">
                    <p class="ms-2 whitespace-no-wrap overflow-hidden">
                        {{ $page.props.auth.user.name }}
                    </p>
                    <!-- <p>Страница</p> -->
                </span>
            </div>
        </DropdownLink>

        <DropdownLink
            v-if="$page.props.auth.user.isAdmin"
            :href="route('panel.index')"
        >
            <IconPanel class="me-2 inline-block"></IconPanel>
            Панель
        </DropdownLink>
        <DropdownLink :href="route('post.create')" class="my-2">
            <AnimationIconSquarePlusFilled
                class="me-2 inline-block text-green-600"
            ></AnimationIconSquarePlusFilled>
            Создать подборку
            <!-- <span
                class="text-center mx-auto bg-green-700 font-semibold p-2 w-1/2 whitespace-no-wrap overflow-hidden text-white text-xs rounded"
                >Создать подборку</span
            > -->
        </DropdownLink>
        <DropdownLink :href="route('drafts')">
            <IconPencil class="me-2 inline-block"></IconPencil>
            Черновики
        </DropdownLink>
        <DropdownLink :href="route('profile.edit')">
            <IconTooth class="me-2 inline-block"></IconTooth>
            Настройки
        </DropdownLink>
        <DropdownLink :href="route('logout')" method="post" as="button">
            <IconExit class="me-2 inline-block"></IconExit>
            Выйти
        </DropdownLink>
    </div>
</template>
<script>
import DropdownLink from "@/Components/DropdownLink.vue";
import IconCirclePlus from "@/Components/Icons/IconCirclePlus.vue";
import IconExit from "@/Components/Icons/IconExit.vue";
import IconGlobe from "@/Components/Icons/IconGlobe.vue";
import IconPanel from "@/Components/Icons/IconPanel.vue";
import IconPencil from "@/Components/Icons/IconPencil.vue";
import IconPlus from "@/Components/Icons/IconPlus.vue";
import IconSquarePlus from "@/Components/Icons/IconSquarePlus.vue";
import IconSquarePlusFilled from "@/Components/Icons/IconSquarePlusFilled.vue";
import IconTooth from "@/Components/Icons/IconTooth.vue";
import AnimationIconSquarePlusFilled from "@/Components/Animations/AnimationIconSquarePlusFilled.vue";

export default {
    components: {
        DropdownLink,
        IconPanel,
        IconPencil,
        IconTooth,
        IconExit,
        IconCirclePlus,
        IconPlus,
        IconGlobe,
        IconSquarePlus,
        IconSquarePlusFilled,
        AnimationIconSquarePlusFilled,
    },
};
</script>
