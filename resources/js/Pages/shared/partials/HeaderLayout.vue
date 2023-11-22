<script>
import DropdownLink from "@/Components/DropdownLink.vue";
import Dropdown from "@/Components/Dropdown.vue";
import UserTablet from "@/Components/UserTablet.vue";

export default {
    data() {
        return {
            showRegister: false,
        };
    },

    components: { DropdownLink, Dropdown, UserTablet },
};
</script>
<template>
    <div class="bg-white">
        <div
            class="bg-white max-w-6xl px-0 mx-auto flex items-center justify-between"
            :class="$page.props.auth.user ? 'p-2' : 'p-5'"
        >
            <div>
                <Link :href="route('home')">Подборки</Link>
                <NavLink :href="route('post.create')">
                    Создать подборку
                </NavLink>
            </div>

            <Dropdown class="text-sm">
                <template #trigger>
                    <button>
                        {{ $page.props.auth.user ? "" : "Авторизоваться" }}
                        <UserTablet
                            v-if="$page.props.auth.user"
                            :user="$page.props.auth.user"
                            class="inline-block"
                        ></UserTablet>
                        <svg
                            class="ms-0 -mr-0.5 h-4 w-4 inline-block text-slate-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg></button
                ></template>
                <template #content v-if="!$page.props.auth.user">
                    <DropdownLink
                        :href="route('register')"
                        @click="showRegister = !showRegister"
                    >
                        Зарегистрироваться
                    </DropdownLink>
                    <DropdownLink :href="route('login')">Войти</DropdownLink>
                </template>
                <template v-if="$page.props.auth.user" #content>
                    <DropdownLink :href="route('profile.edit')">
                        Профиль
                    </DropdownLink>
                    <DropdownLink
                        v-if="$page.props.auth.user.isAdmin"
                        :href="route('panel.index')"
                    >
                        Панель
                    </DropdownLink>
                    <DropdownLink :href="route('drafts')">
                        Черновики
                    </DropdownLink>
                    <DropdownLink
                        :href="route('logout')"
                        method="post"
                        as="button"
                    >
                        Выйти
                    </DropdownLink>
                </template>
            </Dropdown>
        </div>
    </div>
</template>
