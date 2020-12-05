<template>
  <div class="flex justify-between max-w-md m-4 items-end pb-2">
    <div class="flex">
      <icon-base height="20" width="20" iconColor="white" class="mt-1"
        ><icon-price
      /></icon-base>
      <p class="text-white price-font-size ml-0.5">{{ price }} TL</p>
    </div>
    <button
      class="px-3 py-1 text-base text-white bg-purple-600 rounded-lg hover:text-white focus:outline-none"
    >
      Sipariş Ver
    </button>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconPrice from "./icons/IconPrice";
import { store } from "../store";

export default {
  name: "Order",
  components: {
    IconPrice,
    IconBase,
  },
  computed: {
    price() {
      return store.price;
    },
  },
};
</script>

<style>
.price-font-size {
  font-size: 20px;
}
</style>