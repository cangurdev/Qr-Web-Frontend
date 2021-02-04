<template>
  <div>
    <div v-if="showAddCategory"
         class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5">
            <h3 class="text-3xl font-semibold">
              Yeni Kategori
            </h3>
            <button
                class="text-3xl text-red-500 outline-none focus:outline-none"
                v-on:click="toggleAddCategory">
              X
            </button>
          </div>
          <!--body-->
          <div class="p-6">
            <div class="flex-col">
              <input v-model="categoryName" type="text"
                     class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-96 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                     placeholder="Kategori ismi">
            </div>
          </div>
          <div class="mx-auto">
            <button
                class="bg-color text-white w-48 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button" style="transition: all .15s ease" v-on:click="addCategory">
              Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mutations, show} from "../../store";
import {db} from "../../db";

export default {
  name: "AddCategoryModal",
  computed: {
    showAddCategory() {
      return show.addCategory;
    }
  },
  methods: {
    toggleAddCategory() {
      mutations.showAddCategory();
    },
    addCategory() {
      db.collection("Menu").doc(this.categoryName).set({});
      this.categoryName = "";
      this.toggleAddCategory();
    }
  }
}
</script>

<style scoped>

</style>