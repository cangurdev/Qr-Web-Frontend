<template>
  <div class="w-32 h-32 m-4 card-image bg-center bg-cover rounded-md">
    <p class="text-white font-medium text-2xl pt-24 font-bold shadow-lg">
      Pizza
    </p>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    name: String,
  },
};
</script>

<style>
.card-image {
  background-image: url("https://im.haberturk.com/2020/02/05/ver1580901103/2573748_1200x627.jpg");
  text-shadow: 2px 2px black;
}
</style>