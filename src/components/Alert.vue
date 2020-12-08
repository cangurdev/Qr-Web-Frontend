<template>
  <div v-if="show === true" class="fixed top-16 w-48 m-auto left-0 right-0">
    <div
      class="flex items-center p-3 shadow-md rounded-lg"
      :style="status ? bgGreen : bgRed"
    >
      <div class="text-white text-center m-auto">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: String,
    show: Boolean,
    status: Boolean,
  },
  data: function () {
    return {
      bgRed: {
        backgroundColor: "#E62424",
      },
      bgGreen: {
        backgroundColor: "green",
      },
    };
  },
};
</script>