import clientsApi from "@/api/clients-api";
import type { Client } from "@/clients/interfaces/client.interface";
import {  useQuery } from "@tanstack/vue-query";
import { useClientsStore } from "@/store/clients";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const getClients = async():Promise<Client[]> =>{
  const { data } = await clientsApi.get<Client[]>('/clients?_page=1');
  return data; 
} 
const useClients = ()=>{
  const store = useClientsStore();
  const { currentPage, clients, totalPages } = storeToRefs( store );


  const { isLoading, data } = useQuery(
    ['clients?page=', currentPage ],
    () => getClients( ),
);

  watch(data, clients =>{
    if(clients){
      store.setClients( clients )
    }
  })

  return {
    isLoading,
    clients,
  }

}

export default useClients;

