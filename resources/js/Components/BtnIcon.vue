<template>
    <div class="inline-block p-1">
        <div
            class="inline-block flex items-center"
            :class="'hover:text-' + secondaryColor"
        >
            <div class="flex items-center">
                <div
                    class="inline-block rounded-full p-1 duration-200 hover:cursor-pointer"
                    :class="
                        'hover:text-' +
                        secondaryColor +
                        ' ' +
                        'hover:bg-' +
                        primaryColor
                    "
                >
                    <slot></slot>
                </div>
                <span class="ms-1">{{ text }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        text: null,
        primaryColor: {
            required: false,
            default: "orange-100",
        },
        secondaryColor: {
            required: false,
            default: "orange-700",
        },
    },
};
</script>
