<template>
    <h1>El valor es: {{  counter.count }}</h1>
    <h4>ultimo cambio: {{ counter.lastChanged }}</h4>
</template>

<script setup lang="ts">
import { useCounterSetupStore } from '../../store/counter-setup';
const counter = useCounterSetupStore();
</script>

<style scoped>

</style>