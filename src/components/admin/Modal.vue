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
              Yeni Ürün
            </h3>
            <button
                class="text-3xl text-red-500 outline-none focus:outline-none"
                v-on:click="toggleModal()">
              X
            </button>
          </div>
          <!--body-->
          <div class="p-6">
            <div class="flex-col">
              <input v-model="name" type="text"
                     class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-96 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                     placeholder="Ürün ismi">
            </div>
            <div class="flex-col my-2">
              <select v-model="category" type="text"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-64 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">"
                <option value="" disabled selected>Kategori</option>
                <option v-for="category in categories" v-bind:value="category.id" v-bind:key="category.id">
                  {{ category.id }}
                </option>
              </select>
              <button class="bg-color ml-8 text-white text-xs rounded-lg p-2" v-on:click="toggleAddCategory">+ Yeni
                Kategori
              </button>
            </div>
            <div class="flex-col my-2">
              <input v-model="price" type="text"
                     class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-96 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                     placeholder="Fiyat">
            </div>
            <div class="flex-col my-2">
              <textarea v-model="ingredients" type="textarea"
                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-96 h-32 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="İçindekiler"></textarea>
            </div>
            <div class="flex-col">
              Ürün Görseli: <input type="file" placeholder="Görsel" @change="file">
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
    <AddCategoryModal/>
  </div>
</template>

<script>
import {mutations, show} from "../../store";

import {db} from "../../db";
import firebase from "firebase";
import AddCategoryModal from "./AddCategoryModal";

export default {
  name: "Modal",
  components: {AddCategoryModal},
  props: {
    categories: Array
  },
  methods: {
    file(event) {
      this.image = event.target.files[0];
    },
    toggleModal: function () {
      mutations.show();
    },
    toggleAddCategory() {
      mutations.showAddCategory();
    },
    async addItem() {
      //Adding image to storage
      await firebase.storage().ref(`images/${this.name}`).put(this.image);

      //Getting image url
      const url = await firebase.storage().ref(`images/${this.name}`).getDownloadURL();

      //Adding item to Firestore
      await db.collection("Menu").doc(this.category).update(
          this.name, {
            image: url,
            ingredients: this.ingredients,
            name: this.name,
            price: parseInt(this.price),
            count: 0,
            category: this.category,
          })
      this.clearFields();
      this.toggleModal();
    },
    clearFields() {
      this.name = "";
      this.ingredients = "";
      this.price = "";
      this.category = "";
    }
  },
  computed: {
    showModal() {
      return show.isTrue;
    }
  },
  data: function () {
    return {
      name: "",
      ingredients: "",
      price: "",
      category: "",
      categoryName: "",
    };
  },
}
</script>

<style scoped>

</style>