<template>
    <h1>Pinia Setup</h1>
    <h4>Counter: {{ count }}</h4>
    <h4>Square: {{ squareCount }}</h4>

    <br>
    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterSetup.$reset()">Reset</button>
    <br>
    <CounterSetupValue />
</template>

<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counter-setup'; 
import { storeToRefs } from 'pinia';
import CounterSetupValue from '../components/CounterSetupValue.vue'


const counterSetup = useCounterSetupStore();
const { increment, incrementBy } = counterSetup;
const { count,squareCount } = storeToRefs( counterSetup );
</script>

<style scoped>
button{
    margin: 5px;
}
</style>