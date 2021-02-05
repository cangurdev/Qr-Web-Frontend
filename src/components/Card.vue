<template>
  <div
      class="m-4 space-y-2 flex max-w-md h-32 rounded-lg shadow-md card-body z-10"
  >
    <router-link :to="{ path: '/'+this.$route.params.id+'/detail', query: { q: item } }">
      <div class="w-36">
        <img
            class="h-32 rounded-tl-lg rounded-bl-lg"
            :src="item.image"
            alt="image"
        /></div
      >
    </router-link>
    <div class="text-center mx-3 w-screen grid">
      <div>
        <p class="text-white h-6">{{ item.name }}</p>
      </div>
      <div class="flex self-center m-auto h-12">
        <p class="text-gray-500 card-font-size flex self-center">
          {{ item.ingredients }}
        </p>
      </div>

      <div class="flex justify-around pb-1">
        <div class="flex self-center">
          <icon-base height="14" width="14" iconColor="white"
          >
            <icon-price
            />
          </icon-base>
          <p class="text-white card-font-size ml-0.5">{{ item.price }} TL</p>
        </div>
        <button
            v-on:click="addCart()"
            class="self-center w-20 py-1 card-font-size text-white bg-purple-600 rounded-lg hover:text-white focus:outline-none"
            :class="this.style"
        >
          {{ this.message }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconPrice from "./icons/IconPrice";
import {mutations} from "../store";

export default {
  name: "Card",
  components: {
    IconPrice,
    IconBase,
  },
  props: {
    item: Object,
  },
  data: function () {
    return {
      message: "Sepete Ekle",
      style: "",
    };
  },
  methods: {
    addCart() {
      mutations.addCart({item: this.item, piece: 1});
      mutations.increasePrice(this.item.price);
      mutations.increaseCount();
      this.style =
          "transition duration-300 ease-in-out hover:bg-green-600 transform hover:scale-110";
      this.message = "  Eklendi ";
      setTimeout(() => {
        this.message = "Sepete Ekle";
        this.style = "transition duration-300 ease-in-out";
      }, 600);
    },
  },
};
</script>

<style>
.card-body {
  background-color: #292e3c;
}

.card-font-size {
  font-size: 10px;
}
</style>