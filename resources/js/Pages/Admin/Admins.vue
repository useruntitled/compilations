<template>
    <Base title="Администраторы">
        <p>Администраторы</p>
        <main class="p-5 my-5 shadow rounded-xl">
            <div
                v-for="admin in admins"
                :key="admin.id"
                class="shadow p-5 rounded-lg text-sm flex justify-between"
            >
                <div>#{{ admin.id }} {{ admin.name }}</div>
                <div>
                    <span
                        v-for="role in admin.roles"
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
        admins: null,
    },
};
</script>
