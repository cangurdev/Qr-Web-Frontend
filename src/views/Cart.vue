<template>
  <div class="pb-4">
    <Navbar page="cart" />
    <div v-for="item in items" v-bind:key="item">
      <CartCard :item="item" />
    </div>
    <Order />
    <Fab />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CartCard from "../components/CartCard.vue";
import Fab from "../components/Fab.vue";
import Order from "../components/Order.vue";
import { store } from "../store";

export default {
  name: "Cart",
  title: "Sepet",
  components: {
    Navbar,
    CartCard,
    Fab,
    Order,
  },
  computed: {
    items() {
      return store.items;
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  background-color: #1e2026;
}
</style>