<template>
  <div class="m-4 flex space-y-2 max-w-md h-32 rounded-lg shadow-md card-body">
    <img
      class="block w-28 sm:mx-0 flex-shrink-0 rounded-tl-lg rounded-bl-lg"
      :src="item.image"
      alt="image"
    />
    <div class="grid grid-rows-2 ml-4 place-self-center">
      <div>
        <p class="text-white">{{ item.name }}</p>
      </div>
      <div class="flex items-end pb-2">
        <div class="flex pb-1">
          <icon-base height="14" width="14" iconColor="#793CFF"
            ><icon-price
          /></icon-base>
          <p class="text-white card-font-color ml-0.5 text-xs">
            {{ item.price }} TL
          </p>
        </div>
      </div>
    </div>
    <div class="place-self-center ml-9">
      <button v-on:click="add()" class="focus:outline-none">
        <icon-base height="16" width="24" iconColor="white" viewBox="0 0 16 16"
          ><icon-plus
        /></icon-base>
      </button>

      <p class="mt-3 text-white">{{ this.piece }}</p>
      <button v-on:click="remove()" class="focus:outline-none">
        <icon-base
          class="mt-1"
          height="20"
          width="24"
          iconColor="white"
          viewBox="0 0 16 16"
          ><icon-minus
        /></icon-base>
      </button>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconPrice from "./icons/IconPrice";
import IconMinus from "./icons/IconMinus";
import IconPlus from "./icons/IconPlus";
import { mutations } from "../store";

export default {
  name: "CartCard",
  components: {
    IconPrice,
    IconBase,
    IconMinus,
    IconPlus,
  },
  props: {
    item: Object,
  },
  data: function () {
    return {
      piece: 1,
    };
  },
  methods: {
    add() {
      this.piece += 1;
      mutations.increasePrice(this.item.price);
    },
    remove() {
      if (this.piece > 1) {
        this.piece -= 1;
        mutations.decreasePrice(this.item.price);
      } else if (this.piece == 1) {
        mutations.removeCart(this.item);
        mutations.decreasePrice(this.item.price);
      }
    },
  },
};
</script>

<style>
.card-body {
  background-color: #292e3c;
}
.card-font-color {
  color: #793cff;
}
</style>