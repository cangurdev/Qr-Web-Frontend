<template>
  <div class="">
    <div class="dropdown inline-block fixed bottom-2 right-2">
      <button
        class="bg-black text-gray-700 font-semibold p-4 rounded-full inline-flex focus:outline-none"
        v-on:click="onClick()"
      >
        <span class="mr-1">
          <icon-base width="32" height="32" viewBox="0 0 24 24">
            <icon-waiter />
          </icon-base>
        </span>
      </button>
      <ul
        class="dropdown-menu absolute hidden text-white bottom-full right-1"
        :style="clicked ? filterStyle : null"
      >
        <li class="flex my-2">
          <p
            class="rounded-full bg-black py-2 mx-2 text-xs place-self-center w-24"
          >
            Hesap İste
          </p>
          <button
            class="rounded-full bg-black hover:bg-gray-400 p-4 block whitespace-no-wrap focus:outline-none"
          >
            <icon-base width="32" height="32" viewBox="0 0 48 48">
              <icon-bill />
            </icon-base>
          </button>
        </li>
        <li class="flex my-2">
          <p
            class="rounded-full bg-black px-0.5 py-2 mx-2 text-xs place-self-center w-24"
          >
            Garson Çağır
          </p>
          <button
            class="rounded-full bg-black hover:bg-gray-400 p-4 block whitespace-no-wrap focus:outline-none"
          >
            <icon-base width="32" height="32" viewBox="0 0 24 24">
              <icon-hand />
            </icon-base>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconWaiter from "./icons/IconWaiter";
import IconBill from "./icons/IconBill";
import IconHand from "./icons/IconHand";

export default {
  name: "Fab",
  components: {
    IconBase,
    IconWaiter,
    IconBill,
    IconHand,
  },
  data: function () {
    return {
      clicked: false,
      filterStyle: {
        display: "block",
      },
    };
  },
  methods: {
    onClick() {
      this.clicked = !this.clicked;
    },
  },
};
</script>
