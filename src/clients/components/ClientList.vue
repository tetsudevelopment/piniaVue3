<script setup lang="ts">
import useClients from '@/clients/composables/useClients';

const { clients } = useClients(); // es un use Composable Function

</script>
<template>
  <ul>
    <li 
      v-for="client of clients" 
      :key="client.id">

        <RouterLink :to="{
          name: 'client-id',
          params: {id: client.id},
        }">
        {{ client.name }}
      </RouterLink>
    </li>
  </ul>
</template>



<style scoped>

</style>