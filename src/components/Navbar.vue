<template>
  <div class="justify-between flex align-middle py-2 mx-4">
    <div class="div-color rounded-full h-12 w-12 p-3 justify-self-center">
      <icon-base height="48" width="48" icon-name="menu" iconColor="white"
        ><icon-menu
      /></icon-base>
    </div>
    <router-link to="/">
      <p class="pt-4 text-white text-2xl">Cafe 236</p>
    </router-link>
    <router-link to="/cart">
      <div class="div-color rounded-full justify-center h-12 w-12 p-2">
        <icon-base height="32" width="32" icon-name="basket" iconColor="white"
          ><icon-basket
        /></icon-base>
      </div>
    </router-link>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconBasket from "./icons/IconBasket";
import IconMenu from "./icons/IconMenu";
export default {
  name: "Navbar",
  components: {
    IconBase,
    IconBasket,
    IconMenu,
  },
};
</script>

<style>
.div-color {
  background-color: #292e3c;
}
</style>