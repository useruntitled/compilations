<template>
    <Base title="Панель управления">
        <p>Панель управления</p>
        <section class="p-5 shadow rounded-lg mt-5">
            <p class="text-sm">Информация о вашем аккаунте</p>
            <div class="text-sm text-slate-800">
                <p>Идентификатор: #{{ $page.props.auth.user.id }}</p>
                <p>Имя: {{ $page.props.auth.user.name }}</p>
                <p>Эл. почта: {{ $page.props.auth.user.email }}</p>
                <p>
                    Роли:
                    <span
                        v-for="role in $page.props.auth.user.roles"
                        :key="role.id"
                        class="me-5"
                    >
                        {{ role.role }}
                    </span>
                </p>
            </div>
        </section>
        <main
            class="flex gap-1 justify-center flex-wrap my-5 shadow rounded-xl p-5"
        >
            <Link
                :href="route('panel.films')"
                class="p-20 bg-emerald-200 text-sm text-emerald-700 font-semibold hover:bg-emerald-300 rounded"
            >
                Фильмы
            </Link>
            <Link
                :href="route('panel.posts')"
                class="p-20 bg-yellow-200 text-sm text-yellow-700 font-semibold hover:bg-yellow-300 rounded"
            >
                Подборки
            </Link>
            <Link
                :href="route('panel.genres')"
                class="p-20 bg-sky-200 text-sm text-sky-700 font-semibold hover:bg-sky-300 rounded"
            >
                Теги фильмов
            </Link>
            <Link
                class="p-20 bg-neutral-200 text-sm text-neutral-700 font-semibold hover:bg-neutral-300 rounded"
            >
                Теги подборок
            </Link>
            <Link
                :href="route('panel.users')"
                class="p-20 bg-neutral-200 text-sm text-neutral-700 font-semibold hover:bg-neutral-300 rounded"
            >
                Пользователи
            </Link>
            <Link
                :href="route('panel.admins')"
                class="p-20 bg-red-200 text-sm text-red-700 font-semibold hover:bg-red-300 rounded"
            >
                Администраторы
            </Link>
        </main>
    </Base>
</template>
<script>
export default {};
</script>
