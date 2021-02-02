<template>
  <div class="flex">
    <Sidebar/>
    <div class="flex-col">
      <h2 class="text-2xl my-4 text-white -ml-72">Siparişler</h2>
      <table class="table-fixed ml-72 table-size">
        <thead>
        <tr class="flex mb-4 flex justify-between text-black p-4 bg-white rounded-md">
          <th class="w-36">Sipariş No</th>
          <th class="w-36">Masa Numarası</th>
          <th class="w-36">Sipariş Tipi</th>
          <th class="w-36">Süre</th>
          <th class="w-36">Sipariş Durumu</th>
        </tr>
        </thead>
        <tbody class="text-white">
        <div v-for="item in items.reverse()" v-bind:key="item.id">
          <button class="w-full justify-between my-2 p-4 text-black bg-white rounded-md" v-on:click="selectOrder(item)">
            <OrderList :item="item"/>
          </button>
        </div>
        </tbody>
      </table>
    </div>
    <div class="flex-col ml-8 my-4">
      <h2 class="text-2xl text-white">Sipariş Detayı</h2>
      <div>
        <div class="text-black p-4 my-4 w-96 bg-white rounded-md">Sipariş No</div>
        <div class="text-black p-4 my-4 w-96 h-auto bg-white rounded-md">
          <div v-for="item in detail" v-bind:key="item.id">
            <OrderDetail :item="item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../../components/admin/Sidebar.vue';
import {db} from "../../db";
import OrderList from "../../components/admin/OrderList";
import OrderDetail from "../../components/admin/OrderDetail";

export default {
  name: "Orders",
  components: {
    OrderList,
    Sidebar,
    OrderDetail,
  },
  data() {
    return {
      items: [],
      detail: [],
    };
  },
  firestore: {
    items: db.collection("Orders").orderBy('time'),
  },
  methods: {
    selectOrder(order) {
      this.detail = order;
    }
  }
}
</script>

<style scoped>
.table-size {
  width: 45rem;
}
</style>