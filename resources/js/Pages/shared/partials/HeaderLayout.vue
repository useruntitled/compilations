<script>
import DropdownLink from "@/Components/DropdownLink.vue";
import Dropdown from "@/Components/Dropdown.vue";
import UserTablet from "@/Components/UserTablet.vue";
import IconSearch from "@/Components/Icons/IconSearch.vue";
import HeaderSection from "./HeaderSection.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
import PrimaryButtonWhite from "@/Components/Buttons/PrimaryButtonWhite.vue";

export default {
    data() {
        return {
            showRegister: false,
            input_site: null,
        };
    },

    components: {
        DropdownLink,
        Dropdown,
        UserTablet,
        IconSearch,
        HeaderSection,
        ApplicationLogo,
        PrimaryButton,
        PrimaryButtonWhite,
    },
};
</script>
<template>
    <!-- fixed -->
    <div
        class="bg-kppale w-full top-0 z-50"
        v-for="i in [0, 1]"
        :class="i == 0 ? 'block' : 'fixed'"
    >
        <div
            class="bg-kppale max-w-7xl px-4 mx-auto flex items-center justify-between space-x-20 py-2"
            :class="$page.props.auth.user ? 'p-2' : 'p-5'"
        >
            <div>
                <Link :href="route('home')">
                    <!-- <img
                        class="inline-block rounded"
                        style="max-width: 50px"
                        :src="route('image.crop', ['logo', '200x200'])"
                /> -->
                    <ApplicationLogo
                        class="inline-block rounded hover:opacity-80"
                        :size="'200x200'"
                        style="max-width: 50px"
                    ></ApplicationLogo>
                </Link>
            </div>
            <div class="flex items-center w-1/2 mx-auto">
                <span class="text-sm absolute pl-2"
                    ><IconSearch
                        class="text-slate-600 stroke-3 w-5 h-5"
                    ></IconSearch
                ></span>
                <input
                    list="films"
                    v-model="input_site"
                    type="text"
                    placeholder="Поиск"
                    class="w-full ps-10 bg-kpnpale border-kpnpale rounded-xl border-1 text-md duration-300 text-slate-900 hover:bg-white hover:ring-kp hover:ring-1 focus:bg-white focus:ring-kp focus:border-kp"
                />
            </div>
            <Dropdown class="text-sm" v-if="$page.props.auth.user">
                <template #trigger>
                    <button>
                        <UserTablet
                            v-if="$page.props.auth.user"
                            :mode="'no action'"
                            :avatarOnly="true"
                            :user="$page.props.auth.user"
                            class="inline-block me-2"
                        ></UserTablet>
                        <svg
                            v-if="$page.props.auth.user"
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
                    <div class="text-md">
                        <HeaderSection></HeaderSection>
                    </div>
                </template>
            </Dropdown>
            <PrimaryButtonWhite v-else @click="callAuthModal()">
                Войти
            </PrimaryButtonWhite>
        </div>
    </div>
</template>
