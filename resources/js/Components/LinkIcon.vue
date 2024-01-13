<template>
    <div class="inline-block p-1">
        <div class="inline-block hover:text-orange-700 flex items-center">
            <div class="flex items-center">
                <div
                    class="inline-block hover:text-orange-700 hover:bg-orange-100 rounded-full p-1 duration-200"
                >
                    <Link
                        :href="href ?? ''"
                        class="fill-none stroke-slate-700 hover:stroke-orange-700"
                    >
                        <slot></slot>
                    </Link>
                </div>
                <span class="ms-1">{{ text }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { Link } from "@inertiajs/vue3";

export default {
    props: {
        href: {
            required: false,
            type: String,
        },
        text: null,
    },
    components: { Link },
};
</script>
