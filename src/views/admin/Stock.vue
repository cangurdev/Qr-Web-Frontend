<template>
  <div>
    <Sidebar/>
    <button v-on:click="toggleModal" class="w-32 p-2 rounded-lg bg-color text-white absolute right-16 my-16">Ürün Ekle
    </button>
    <table class="table-fixed absolute left-80 table-size mt-32">
      <thead class="text-white">
      <tr class="flex mb-4 flex justify-between">
        <th class="px-8 w-1/3">Ürün</th>
        <th class="px-8 w-1/3">Kategori</th>
        <th class="px-8 w-1/3">Marka</th>
        <th class="px-8 w-1/3">Miktar</th>
      </tr>
      </thead>
      <hr>
      <tbody class="text-white w-64">
      <div v-for="item in stocks" v-bind:key="item.id">
        <StockList :item="item"/>
      </div>
      </tbody>
    </table>
    <AddStockModal/>
  </div>
</template>

<script>
import Sidebar from '../../components/admin/Sidebar.vue';
import StockList from '../../components/admin/StockList.vue';
import {db} from "../../db";
import AddStockModal from "../../components/admin/AddStockModal";
import {mutations} from "../../store";

export default {
  name: "Stock",
  components: {
    AddStockModal,
    Sidebar,
    StockList,
  },
  data() {
    return {
      stocks: [],
    };
  },
  firestore: {
    stocks: db.collection("Stock"),
  },
  methods: {
    toggleModal: function () {
      mutations.show();
    }
  },
}
</script>

<style scoped>
.table-size {
  width: 72rem;
}
</style>