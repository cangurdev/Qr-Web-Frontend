<template>
  <div class="flex my-4 px-8">
    <div class="flex-col">
      <img :src="order.item.image" width="80" class="rounded-lg">
    </div>
    <div class="flex-col mx-4">
      <p>{{ order.piece }}x {{ order.item.name }}</p>
      <p class="text-left text-sm">{{ order.piece * parseFloat(order.item.price) }}₺</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDetail",
  props: {
    order: Object,
  },
}
</script>

<style scoped>

</style>