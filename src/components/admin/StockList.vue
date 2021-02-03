<template>
    <tr class="flex w-full my-4 flex justify-between">
      <td class="px-8 w-1/4">{{ item.product }}</td>
      <td class="px-8 w-1/4">{{ item.category }}</td>
      <td class="px-8 w-1/4">{{ item.brand }}</td>
      <td class="px-8 w-1/4">{{ item.quantity }}</td>
    </tr>

</template>

<script>
export default {
  name: "StockList",
  props: {
    item: Object,
  },
}
</script>

<style scoped>

</style>