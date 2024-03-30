<template>
    <div class="bg-panelsemiprimary p-5 max-w-5xl">
        <header class="border-b-2 pb-2 flex justify-between font-semibold text-lg">
            <div>
                {{ props.title }} #{{ props.object.id }}
            </div>
            <div>
                {{ props.object.created_at }}
            </div>
        </header>
        <section v-if="object?.declined_at != null" class="my-10 border-y-2 font-semibold">
            <p>Удалено: {{ object.declined_at }}</p>
            <p>Причина: {{ object.declined_reason }}</p>
            <p>Кем удалено:
                <Link :href="route('panel.view.user', [object.declined_by.id])">
                    {{ object.declined_by.name }}
                </Link>
            </p>
        </section>
        <main class="border-b-2 py-2">
            <slot name="description"/>
        </main>

        <footer class="flex justify-between space-x-4 font-semibold">
            <slot name="footer"/>
        </footer>
    </div>
</template>
<script setup>
const props = defineProps({
    object: null,
    title: null,
})
</script>
<style scoped>
* {
    color: rgb(181 181 189);
}
</style>
