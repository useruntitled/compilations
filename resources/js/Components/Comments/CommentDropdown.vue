<template>
    <Dropdown width="auto" :align="'Right'">
        <template #trigger>
            <DropdownDotsTrigger class="w-6 h-6"> </DropdownDotsTrigger>
        </template>
        <template
            #content
            v-if="
                this.$page.props.auth.user &&
                this.comment.user.id == this.$page.props.auth.user.id
            "
        >
            <div class="px-2">
                <button
                    @click="this.$emit('enableEditing')"
                    class="block text-sm"
                    type="button"
                >
                    Редактировать
                </button>
                <button
                    @click.prevent="this.$emit('remove')"
                    class="block text-sm"
                    type="button"
                >
                    Удалить
                </button>
            </div>
        </template>
        <template #content v-else>
            <DropdownContentReport></DropdownContentReport>
        </template>
    </Dropdown>
</template>
<script>
import Dropdown from "../Dropdown.vue";
import DropdownDotsTrigger from "../Dropdowns/DropdownDotsTrigger.vue";
import IconDots from "../Icons/IconDots.vue";
import DropdownContentReport from "@/Components/Dropdowns/DropdownContentReport.vue";

export default {
    props: {
        comment: null,
    },
    components: {
        Dropdown,
        IconDots,
        DropdownContentReport,
        DropdownDotsTrigger,
    },
};
</script>
