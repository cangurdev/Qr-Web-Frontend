<template>
  <div>
    <Sidebar/>
    <h2 class="text-right text-2xl my-4 w-96 text-white">Siparişler</h2>
    <table class="table-fixed mx-72 w-1/3">
      <thead class="text-white">
      <tr class="flex mb-4 flex justify-between">
        <th class="px-8 w-1/3">Sipariş No</th>
        <th class="px-8 w-1/3">Masa Numarası</th>
        <th class="px-8 w-1/3">Sipariş Tipi</th>
        <th class="px-8 w-1/3">Süre</th>
      </tr>
      </thead>
      <hr>
      <tbody class="text-white w-64">
      <div v-for="item in items.reverse()" v-bind:key="item.id">
        <OrderList :item="item"/>
      </div>
      </tbody>
    </table>
  </div>
</template>

<script>
import Sidebar from '../../components/admin/Sidebar.vue';
import {db} from "../../db";
import OrderList from "../../components/admin/OrderList";

export default {
  name: "Orders",
  components: {
    OrderList,
    Sidebar,
  },
  data() {
    return {
      items: [],
    };
  },
  firestore: {
    items: db.collection("Orders").orderBy('time'),
  },
}
</script>

<style scoped>

</style>