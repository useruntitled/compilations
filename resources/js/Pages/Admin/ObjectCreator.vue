<template>
    <div class="max-w-screen-sm">
        <header>
           <Link :href="route('profile', [user.id])">
               <user-tablet :user="user">
                   <template #content>
                       <p>{{ user.name }}</p>
                       <p>{{ user.description }}</p>
                       <div v-for="role in user.roles">
                           <p :class="{'text-red-500 font-semibold': role.role === 'admin'}">
                               {{ role.role }}
                           </p>
                       </div>
                   </template>
               </user-tablet>
           </Link>
            <img :src="route('im', [user.background_image, 1000])" alt="">
        </header>
        <main class="flex flex-col items-start">
            <button>Забанить</button>
            <button>Скрыть/удалить все посты</button>
        </main>

    </div>
</template>

<script setup>
import PanelLayout from "@/Layouts/PanelLayout.vue";
import UserTablet from "@/Components/UserTablet.vue";

defineOptions({
    layout: PanelLayout
})

const props = defineProps({
    user: null,
})
</script>
<style scoped>

</style>
