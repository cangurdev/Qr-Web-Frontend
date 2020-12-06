<template>
  <div class="m-4 flex space-y-2 max-w-md h-32 rounded-lg shadow-md card-body">
    <router-link :to="{ path: 'Detail', query: { af: item } }">
      <img
        class="block h-32 w-36 sm:mx-0 flex-shrink-0 rounded-tl-lg rounded-bl-lg"
        :src="item.image"
        alt="image"
      />
    </router-link>

    <div class="text-center grid grid-rows-3 mx-4">
      <div>
        <p class="text-white">{{ item.name }}</p>
      </div>
      <div class="items-center">
        <p class="text-gray-500 card-font-size">
          {{ item.ingredients }}
        </p>
      </div>

      <div class="flex justify-around md:mx-3 lg:mx-8 items-end pb-2">
        <div class="flex pb-1">
          <icon-base height="14" width="14" iconColor="white"
            ><icon-price
          /></icon-base>
          <p class="text-white card-font-size ml-0.5">{{ item.price }} TL</p>
        </div>
        <button
          v-on:click="addCart()"
          class="px-3 py-1 card-font-size text-white bg-purple-600 rounded-lg hover:text-white focus:outline-none"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconPrice from "./icons/IconPrice";
import { mutations } from "../store";

export default {
  name: "Card",
  components: {
    IconPrice,
    IconBase,
  },
  props: {
    item: Object,
  },
  methods: {
    addCart() {
      mutations.addCart({ item: this.item, piece: 1 });
      mutations.increasePrice(this.item.price);
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