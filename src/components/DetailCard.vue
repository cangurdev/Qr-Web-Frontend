<template>
  <div>
    <router-link :to="'/menu/'+this.$route.params.id">
      <div
        class="div-color rounded-full h-12 w-12 p-3 absolute right-8 top-16"
      >
        <icon-base viewBox="0 0 64 64" height="24" width="24"
          ><icon-close
        /></icon-base>
      </div>
    </router-link>
    <div class="max-w-md place-self-center mx-4 my-16">
      <img
        class="h-72 w-72 m-auto flex-shrink-0 rounded-lg"
        :src="item.image"
        alt="image"
      />
      <div>
        <p class="text-white text-2xl my-2">{{ item.name }}</p>
      </div>
      <div class="items-center">
        <p class="text-gray-500">
          {{ item.ingredients }}
        </p>
      </div>
      <div class="flex pb-1 justify-center mt-4 mb-8">
        <icon-base height="14" width="14" class="mt-1"
          ><icon-price
        /></icon-base>
        <p class="text-white text-base ml-1">{{ item.price }} TL</p>
      </div>
      <button
        v-on:click="addCart()"
        class="px-8 py-1 text-base text-white bg-purple-600 rounded-lg hover:text-white focus:outline-none"
        :class="this.style"
      >
        {{ this.message }}
      </button>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconPrice from "./icons/IconPrice";
import IconClose from "./icons/IconClose";
import { mutations } from "../store";

export default {
  name: "DetailCard",
  components: {
    IconBase,
    IconPrice,
    IconClose,
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
      mutations.addCart({ item: this.item, piece: 1 });
      mutations.increasePrice(this.item.price);
      mutations.increaseCount();
      this.style =
        "transition duration-300 ease-in-out hover:bg-green-600 transform hover:scale-110";
      this.message = "Eklendi";
      setTimeout(() => {
        this.message = "Sepete Ekle";
        this.style = "transition duration-300 ease-in-out";
      }, 600);
    },
  },
};
</script>
