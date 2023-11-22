<template>
    <section>
        <div v-if="items.links.length > 3">
            <div class="flex flex-wrap mb-1">
                <section v-for="(link, p) in items.links" :key="p">
                    <Link
                        :href="link.url"
                        v-if="
                            link.url != null && link.label.includes('Previous')
                        "
                        class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                    >
                        Назад
                    </Link>
                    <Link
                        v-if="link.url != null && link.label >= 0"
                        class="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500"
                        :class="{ 'bg-blue-700 text-white': link.active }"
                        :href="link.url"
                        v-html="link.label"
                    >
                    </Link>
                    <Link
                        :href="link.url"
                        v-if="link.url != null && link.label.includes('Next')"
                        class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                    >
                        Вперед
                    </Link>
                </section>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        items: null,
    },
};
</script>
