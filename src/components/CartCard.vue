<template>
  <div class="m-4 flex relative max-w-md space-y-2 h-32 rounded-lg shadow-md card-body lg:w-screen">
    <img
        class="block w-36 sm:mx-0 flex-shrink-0 rounded-tl-lg rounded-bl-lg"
        :src="item.item.image"
        alt="image"
    />
    <div class="grid grid-rows-2 ml-4 place-self-center">
      <div>
        <p class="text-white text-left">{{ item.item.name }}</p>
      </div>
      <div class="flex pb-2">
        <div class="flex pb-1">
          <icon-base height="14" width="14" iconColor="#793CFF"
          >
            <icon-price
            />
          </icon-base>
          <p class="text-white card-font-color ml-0.5 text-xs">
            {{ item.item.price }} TL
          </p>
        </div>
      </div>
    </div>
    <div class="absolute top-4 right-5">
      <button v-on:click="add()" class="focus:outline-none">
        <icon-base height="16" width="24" iconColor="white" viewBox="0 0 16 16"
        >
          <icon-plus
          />
        </icon-base>
      </button>
      <p class="mt-3 text-white">{{ item.piece }}</p>
      <button v-on:click="remove()" class="focus:outline-none">
        <icon-base
            class="mt-2"
            height="20"
            width="24"
            iconColor="white"
            viewBox="0 0 16 16"
        >
          <icon-minus
          />
        </icon-base>
      </button>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconPrice from "./icons/IconPrice";
import IconMinus from "./icons/IconMinus";
import IconPlus from "./icons/IconPlus";
import {mutations} from "../store";

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
  methods: {
    add() {
      mutations.increasePiece(this.item.item.name);
      mutations.increasePrice(this.item.item.price);
      mutations.increaseCount();
    },
    remove() {
      if (this.item.piece > 1) {
        mutations.decreasePiece(this.item.item.name);
        mutations.decreasePrice(this.item.item.price);
        mutations.decreaseCount();
      } else if (this.item.piece == 1) {
        mutations.removeCart(this.item.item.name);
        mutations.decreasePrice(this.item.item.price);
        mutations.decreaseCount();
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