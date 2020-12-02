<template>
  <div class="m-4 flex space-y-2 max-w-md rounded-lg shadow-md card-body">
    <img
      class="block h-32 w-36 sm:mx-0 flex-shrink-0 rounded-tl-lg rounded-bl-lg"
      :src="item.image"
      alt="image"
    />
    <div class="text-center space-y-2 px-2">
      <div class="space-y-0.5 pb-2">
        <p class="text-xl font-medium text-white">{{ item.name }}</p>
        <p class="text-gray-500 text-sm font-normal">{{ item.ingredients }}</p>
      </div>
      <div class="flex justify-around md:mx-3 lg:mx-8">
        <p class="text-white text-xs font-semibold">{{ item.price }} TL</p>
        <button
          class="px-3 py-1 text-xs text-white bg-purple-600 font-semibold rounded-lg hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: Object,
  },
};
</script>

<style>
.card-body {
  background-color: #292e3c;
}
</style>