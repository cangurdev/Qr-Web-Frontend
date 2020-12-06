<template>
  <div>
    <router-link to="/">
      <div
        class="div-color rounded-full h-12 w-12 p-3 fixed right-8 top-16"
        @click="close()"
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
        <p class="text-white text-lg my-2">{{ item.name }}</p>
      </div>
      <div class="items-center">
        <p class="text-gray-500 card-font-size">
          {{ item.ingredients }}
        </p>
      </div>
      <div class="flex pb-1 justify-center my-8">
        <icon-base height="14" width="14" class="mt-1"
          ><icon-price
        /></icon-base>
        <p class="text-white text-base ml-1">{{ item.price }} TL</p>
      </div>
      <button
        v-on:click="addCart()"
        class="px-8 py-1 text-base text-white bg-purple-600 rounded-lg hover:text-white focus:outline-none"
      >
        Sepete Ekle
      </button>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconPrice from "./icons/IconPrice";
import IconClose from "./icons/IconClose";
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
};
</script>

<style>
</style>