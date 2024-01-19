<template>
    <div class="text-md text-15">
        <p class="px-4 text-md py-2 font-semibold text-start">Мой профиль</p>
        <DropdownLink
            :href="route('profile', [$page.props.auth.user.id])"
            class="my-2"
        >
            <div class="flex items-center">
                <img
                    :src="
                        route('im', [$page.props.auth.user.avatar, ['100x100']])
                    "
                    class="rounded-full inline-block"
                    alt=""
                    style="width: 45px; height: 45px"
                />
                <span
                    class="whitespace-no-wrap overflow-hidden flex flex-col ms-2"
                >
                    <p class="whitespace-no-wrap overflow-hidden font-semibold">
                        {{ $page.props.auth.user.name }}
                    </p>
                    <p class="opacity-80">Профиль</p>
                </span>
            </div>
        </DropdownLink>

        <DropdownLink
            v-if="$page.props.auth.user.isAdmin"
            :href="route('panel.index')"
            class="my-4 font-semibold text-17px"
        >
            <IconPanel class="me-2 inline-block stroke-[2]"></IconPanel>
            Администрировать
        </DropdownLink>

        <DropdownLink
            :href="route('drafts')"
            class="my-4 font-semibold text-17px"
        >
            <IconPencil class="me-2 inline-block stroke-[2]"></IconPencil>
            Черновики
        </DropdownLink>
        <DropdownLink
            :href="route('profile.edit')"
            class="my-4 font-semibold text-17px"
        >
            <IconTooth class="me-2 inline-block stroke-[2]"></IconTooth>
            Настройки
        </DropdownLink>
        <DropdownLink
            :href="route('logout')"
            method="post"
            as="button"
            class="my-4 font-semibold text-17px"
        >
            <IconExit class="me-2 inline-block stroke-[2]"></IconExit>
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
