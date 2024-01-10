<template>
    <h1>Родительский компонент</h1>

    <p>
        Дочерний компонент
        <TestComponent />
    </p>
</template>
<script>
import TestComponent from "./TestComponent.vue";

export default {
    provide() {
        return {
            foo: "bar",
        };
    },
    components: { TestComponent },
};
</script>
