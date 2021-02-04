<template>
  <div
      class="sticky top-0 nav-bg justify-between flex align-middle py-2 mx-4 max-w-md z-20"
  >
    <router-link :to="{path:'/menu/'+this.$route.params.id}">
      <p class="pt-4 text-white text-2xl">Cafe 236</p>
    </router-link>
    <div v-if="page === 'menu' || page === 'detail'">
      <router-link :to="{path:'/cart/'+this.$route.params.id}">
        <div
            class="absolute text-white div-color rounded-full h-4 w-4 text-xs item-center"
        >
          {{ this.count }}
        </div>
        <div class="div-color rounded-full justify-center h-12 w-12 p-2">
          <icon-base height="32" width="32" icon-name="basket" iconColor="white"
          >
            <icon-basket
            />
          </icon-base>
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
          >
            <icon-trash
            />
          </icon-base>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconBasket from "./icons/IconBasket";
import IconTrash from "./icons/IconTrash";
import {mutations, store} from "../store";

export default {
  name: "Navbar",
  components: {
    IconBase,
    IconBasket,
    IconTrash,
  },
  props: {
    page: String,
  },
  computed: {
    count() {
      return store.count;
    },
  },
  methods: {
    removeAll() {
      mutations.clearCart();
    },
  },
};
</script>

<style>
.div-color {
  background-color: #292e3c;
}

.nav-bg {
  background-color: #1e2026;
}
</style>