<template>
  <div class="wrapper">
    <Navbar />
    <CartCard :item="hamburger" :id="12" />
    <Fab />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CartCard from "../components/CartCard.vue";
import Fab from "../components/Fab.vue";
export default {
  name: "Cart",
  components: {
    Navbar,
    CartCard,
    Fab,
  },
  data: function () {
    return {
      hamburger: {
        price: 12,
        name: "Mushroom Burger",
        ingredients: "ulan bees",
        image:
          "https://www.kevserinmutfagi.com/wp-content/uploads/2012/01/hamburger2-600x450.jpg",
      },
    };
  },
};
</script>

<style>
html,
body {
  height: 100%;
  background-color: #1e2026;
}
.wrapper {
  padding-bottom: 10px;
}
</style>