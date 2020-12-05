<template>
  <div class="max-w-md place-self-center m-4">
    <img
      class="h-72 w-72 m-auto flex-shrink-0 rounded-lg"
      :src="item.image"
      alt="image"
    />
    <div>
      <p class="text-white text-lg my-2">{{ item.name }}</p>
    </div>
    <div class="items-center">
      <p class="text-gray-500 card-font-size">
        {{ item.ingredients }}
      </p>
    </div>
    <div class="flex pb-1 justify-center my-8">
      <icon-base height="14" width="14"><icon-price /></icon-base>
      <p class="text-white text-xs">{{ item.price }} TL</p>
    </div>
    <button
      v-on:click="addCart()"
      class="px-8 py-1 card-font-size text-white bg-purple-600 rounded-lg hover:text-white focus:outline-none"
    >
      Sepete Ekle
    </button>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconPrice from "./icons/IconPrice";
export default {
  name: "DetailCard",
  components: {
    IconBase,
    IconPrice,
  },
  props: {
    item: Object,
  },
};
</script>

<style>
</style>