<template>
  <tr class="text-center">
    <td class="w-36">1</td>
    <td class="w-36">{{ item.tableNumber }}</td>
    <td class="w-36">{{ item.orderType }}</td>
    <td class="w-36">{{ timeSince(item.time) }}</td>
    <td class="w-36">{{ item.status }}</td>
  </tr>
</template>

<script>
export default {
  name: "OrderList",
  props: {
    item: Object,
  },
  methods: {
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
        return Math.floor(interval) + " Gün Önce";
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