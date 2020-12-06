<template>
  <div class="justify-between flex align-middle py-2 mx-4 max-w-md">
    <div class="div-color rounded-full h-12 w-12 p-3 justify-self-center">
      <icon-base
        height="24"
        width="24"
        icon-name="menu"
        iconColor="white"
        viewBox="0 0 16.933 16.933"
        ><icon-menu
      /></icon-base>
    </div>
    <router-link to="/">
      <p class="pt-4 text-white text-2xl">Cafe 236</p>
    </router-link>
    <div v-if="page === 'menu' || page === 'detail'">
      <router-link to="/cart">
        <div class="div-color rounded-full justify-center h-12 w-12 p-2">
          <icon-base height="32" width="32" icon-name="basket" iconColor="white"
            ><icon-basket
          /></icon-base>
        </div>
      </router-link>
    </div>
    <div v-if="page === 'cart'" @click="removeAll()">
      <button class="focus:outline-none">
        <div class="div-color rounded-full justify-center h-12 w-12 p-2">
          <icon-base
            height="32"
            width="32"
            icon-name="thrash"
            iconColor="white"
            viewBox="0 0 512 512"
            ><icon-trash
          /></icon-base>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconBasket from "./icons/IconBasket";
import IconMenu from "./icons/IconMenu";
import IconTrash from "./icons/IconTrash";
import { mutations } from "../store";

export default {
  name: "Navbar",
  components: {
    IconBase,
    IconBasket,
    IconMenu,
    IconTrash,
  },
  props: {
    page: String,
  },
  methods: {
    removeAll() {
      mutations.removeAllCart();
    },
  },
};
</script>

<style>
.div-color {
  background-color: #292e3c;
}
</style>