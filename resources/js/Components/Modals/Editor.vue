<template>
    <Modal :show="show" @close="showModal = false" v-if="showModal">
        <div class="p-5">
            <div class="bg-white">
                <p>Создать подборку (пока пусто)</p>
            </div>
        </div>
    </Modal>
</template>
<script>
import Modal from "./Modal.vue";

export default {
    props: {
        show: false,
    },
    data() {
        return {
            showModal: this.show,
        };
    },
    components: { Modal },
};
</script>
