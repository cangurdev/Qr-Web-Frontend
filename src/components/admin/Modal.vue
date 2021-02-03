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
              <input v-model="category" type="text"
                     class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-96 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                     placeholder="Kategori">
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
  </div>
</template>

<script>
import {mutations, show} from "../../store";
import {db} from "../../db";
import firebase from "firebase";

export default {
  name: "Modal",
  methods: {
    file(event) {
      this.image = event.target.files[0];
    },
    toggleModal: function () {
      mutations.show();
    },
    addItem() {
      //adding image to storage
      const storageRef = firebase.storage().ref(`images/${this.name}`).put(this.image);
      storageRef.on(`state_changed`, snapshot => {
            this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          }, error => {
            console.log(error.message)
          },
          () => {
            this.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              this.url = url;
            });
          }
      );
      //adding item to firestore
      db.collection("Menu").doc(this.category).update(
          this.name, {
            image: this.url,
            ingredients: this.ingredients,
            name: this.name,
            price: this.price,
          });
      this.clearFields();
    },
    clearFields() {
      this.name = "";
      this.ingredients = "";
      this.price = 0;
      this.category = "";
      this.url = "";
    }
  },
  computed: {
    showModal() {
      return show.isTrue;
    },
  },
  data: function () {
    return {
      name: "",
      ingredients: "",
      price: 0,
      category: "",
      url: "",
    };
  },
}
</script>

<style scoped>

</style>