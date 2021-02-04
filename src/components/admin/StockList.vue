<template>
  <tr class="flex w-full my-4 flex justify-between">
    <td class="px-8 w-48">{{ item.product }}</td>
    <td class="px-8 w-48">{{ item.category }}</td>
    <td class="px-8 w-48">{{ item.brand }}</td>
    <td class="px-8 w-48">{{ item.quantity }}</td>
    <button class="w-48 px-8 bg-color rounded-lg h-8 text-sm" v-on:click="toggleModal">Düzenle</button>
  </tr>
</template>

<script>
import {mutations} from "../../store";

export default {
  name: "StockList",
  props: {
    item: Object,
  },
  methods: {
    async toggleModal() {
      const stockItems = {
        product: this.item.product,
        category: this.item.category,
        brand: this.item.brand,
        quantity: this.item.quantity,
        id: this.item.id,
      }
      await mutations.editStock(stockItems)
      mutations.show();
    }
  }
}
</script>

<style scoped>

</style>