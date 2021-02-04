<template>
  <div>
    <Sidebar/>
    <button v-on:click="toggleModal" class="w-32 p-2 rounded-lg bg-color text-white absolute right-16 my-16">Ürün Ekle
    </button>
    <table class="table-fixed absolute left-80 table-size mt-32">
      <thead class="text-white">
      <tr class="flex mb-4 flex justify-between">
        <th class="px-8 w-48">Ürün</th>
        <th class="px-8 w-48">Kategori</th>
        <th class="px-8 w-48">Fiyat</th>
        <th class="px-8 w-48">Satış Adeti</th>
        <th class="px-8 w-48">İçindekiler</th>
        <th class="px-8 w-48">Düzenle</th>
      </tr>
      </thead>
      <hr>
      <tbody class="text-white w-64">
      <div v-for="category in categories" v-bind:key="category.id">
        <div v-for="item in category" v-bind:key="item.id">
          <MenuList :item="item"/>
        </div>
      </div>
      </tbody>
    </table>
    <Modal :categories="categories"/>
  </div>
</template>

<script>
import Sidebar from '../../components/admin/Sidebar.vue';
import MenuList from '../../components/admin/MenuList.vue';
import Modal from '../../components/admin/Modal.vue';
import {db} from "../../db";
import {mutations} from "../../store";

export default {
  name: "Menu",
  components: {
    Sidebar,
    MenuList,
    Modal
  },
  data() {
    return {
      categories: [],
    };
  },
  firestore: {
    categories: db.collection("Menu"),
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

.bg-color {
  background-color: #2B4547;;
}
</style>