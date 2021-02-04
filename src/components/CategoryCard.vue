<template>
  <div class="w-32 h-32 m-4 card-image bg-center bg-cover rounded-md">
    <img class="z-0 w-32 h-32 card-image bg-center rounded-md" :src="this.category[Object.keys(this.category)[0]].image" />
    <p class="z-50 text-white font-medium text-2xl font-bold -m-8 shadow-lg">
      {{ category.id }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    category: Object,
  },
  data() {
    return {
      styleObject: {
        backgroundImage: this.category[Object.keys(this.category)[0]].image,
      }
    };
  }
};
</script>

<style>
.card-image {
  text-shadow: 2px 2px black;
}
</style>