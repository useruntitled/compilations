<template>
    <Base title="Пользователи">
        <p>Пользователи</p>
        <main class="p-5 my-5 shadow rounded-xl">
            <div
                v-for="user in users"
                :key="user.id"
                class="shadow p-5 rounded-lg text-sm flex justify-between"
            >
                <div>#{{ user.id }} {{ user.name }}</div>
                <div>
                    <span
                        v-for="role in user.roles"
                        :key="role.id"
                        class="me-2"
                    >
                        {{ role.role }}
                    </span>
                </div>
            </div>
        </main>
    </Base>
</template>
<script>
export default {
    props: {
        users: null,
    },
};
</script>
