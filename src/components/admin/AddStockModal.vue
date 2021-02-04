<template>
  <div>
    <div v-if="showModal"
         class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5">
            <h3 class="text-3xl font-semibold">
              Yeni Stok
            </h3>
            <button
                class="text-3xl text-red-500 outline-none focus:outline-none"
                v-on:click="closeModal">
              X
            </button>
          </div>
          <!--body-->
          <div class="p-6">
            <div class="flex-col">
              <input v-model="content.product" type="text"
                     class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-96 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                     placeholder="Ürün">
            </div>
            <div class="flex-col my-2">
              <input v-model="content.category" type="text"
                     class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-96 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                     placeholder="Kategori">
            </div>
            <div class="flex-col my-2">
              <input v-model="content.brand" type="text"
                     class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-96 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                     placeholder="Marka">
            </div>
            <div class="flex-col my-2">
              <input v-model="content.quantity" type="number"
                     class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-96 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                     placeholder="Miktar">
            </div>
          </div>
          <!--footer-->
          <div class="mx-auto">
            <button
                class="bg-color text-white w-48 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button" style="transition: all .15s ease" v-on:click="addItem()">
              Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import {mutations, show} from "../../store";
import {db} from "../../db";

export default {
  name: "AddStockModel",
  props: {
    content: Object,
  },
  methods: {
    closeModal() {
      console.log("asa" + this.content.id);
      mutations.show();
      mutations.clearStock();
    },
    toggleModal() {
      mutations.show();
    },
    addItem() {
      //adding item to firestore
      if (this.content.id !== undefined) {
        db.collection("Stock").doc(this.content.id).update(
            {
              brand: this.content.brand,
              category: this.content.category,
              product: this.content.product,
              quantity: parseInt(this.content.quantity),
            });
      } else {
        db.collection("Stock").add(
            {
              brand: this.content.brand,
              category: this.content.category,
              product: this.content.product,
              quantity: parseInt(this.content.quantity),
            });
      }
      this.closeModal();
    },
  },
  computed: {
    showModal() {
      return show.isTrue;
    },
  },
}
</script>

<style scoped>

</style>