<template>
    <h1>Pinia Options</h1>
    <h4>Counter: {{ count }}</h4>
    <h4>Square: {{ squareCount }}</h4>

    <br>
    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterOptions.$reset()">Reset</button>
    <br>
    <CounterOptionsValues />
</template>

<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import { storeToRefs } from 'pinia';
import CounterOptionsValues from '../components/CounterOptionsValues.vue'


const counterOptions = useCounterOptionsStore();
const { increment, incrementBy } = counterOptions;
const { count,squareCount } = storeToRefs( counterOptions );
</script>

<style scoped>
button{
    margin: 5px;
}
</style>