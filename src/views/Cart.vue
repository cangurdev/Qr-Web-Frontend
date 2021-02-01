<template>
  <div class="pb-4 lg:absolute lg:left-96">
    <Navbar page="cart"/>
    <p v-if="items.length === 0" class="lg:w-96 m-4 text-white flex justify-center">Sepetiniz Boş</p>
    <div v-for="item in items" v-bind:key="item.id">
      <CartCard :item="item"/>
    </div>
    <Order/>
    <Fab/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CartCard from "../components/CartCard.vue";
import Fab from "../components/Fab.vue";
import Order from "../components/Order.vue";
import {store} from "../store";

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
</style>