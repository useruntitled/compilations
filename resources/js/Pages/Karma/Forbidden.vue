<template>
    <Base title="Нет прав доступа">
        <p class="mt-5">Вы не можете публиковать подборки.</p>
        <main class="my-5 p-5 shadow rounded-xl">
            <p class="text-sm">
                У вас слишком маленькая репутация ({{ karma }}), чтобы
                публиковать подборки.
            </p>
        </main>
    </Base>
</template>
<script>
export default {
    props: {
        karma: null,
    },
};
</script>
