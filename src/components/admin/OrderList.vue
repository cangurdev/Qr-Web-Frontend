<template>
  <tr class="flex w-full my-4 flex justify-between">
    <td class="px-8 w-1/3"> 1 </td>
    <td class="px-8 w-1/3"> {{ item.tableNumber }}</td>
    <td class="px-8 w-1/3"> {{ item.orderType }}</td>
    <td class="px-8 w-1/3"> {{ timeSince(item.time)}}</td>
  </tr>
</template>

<script>
export default {
  name: "OrderList",
  props: {
    item: Object,
  },
  methods:{
    timeSince(date) {

  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " Sene Önce";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " Ay Önce";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " Gün";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " Saat Önce";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " Dakika Önce";
  }
  return Math.floor(seconds) + " Saniye Önce";
}
  }
}
</script>

<style scoped>

</style>