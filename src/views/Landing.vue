<template>
  <div class="text-black bg-white absolute left-0 w-screen">
    <img :src="bgImg" class="absolute right-0 top-0 z-10 h-screen" width="50%"/>

    <div class="flex absolute right-8 top-8 text-white z-20">
      <div class="flex mx-16">
        <p class="mx-4">Features</p>
        <p class="mx-4">Pricing</p>
      </div>
      <div class="flex mx-16">
        <a href="/register" class="mx-4">Sign Up</a>
        <a href="/login" class="mx-4">Login</a>
      </div>
    </div>
    <div class="flex h-screen w-full">
      <div class="my-auto mx-16 max-w-lg text-left">
        <p class="text-xl">Qr Menu for Cafes and Restaurants</p>
        <p class="text-6xl">Connecting your customers<br> without touch</p>
        <div class="flex text-white justify-around z-20 my-12">

          <button @click="openNew()" class="mx-2 focus:outline-none rounded-full py-2 px-4 menuButtonColor">Menu
            Preview
          </button>

          <router-link target="_blank" :to="{ name: 'AdminHome'}"
                       class="mx-2 focus:outline-none rounded-full py-2 px-4 adminButtonColor">Admin Preview
          </router-link>
        </div>
      </div>
      <div class="z-20 absolute right-20 top-40">
        <img :src="img" height="700" width="600"/>
      </div>
    </div>

  </div>
</template>

<script>
import devices from "../assets/Devices.png"
import background from "../assets/background.png"

export default {
  title: "Qr Menu",
  data() {
    return {
      img: devices,
      bgImg: background
    };
  },
  methods: {
    openNew() {
      window.open("/menu/1", 'targetWindow', 'width=448, height=700');
    }
  }
}
</script>

<style>
.menuButtonColor {
  background-image: linear-gradient(#2B4647, #328F93);
}

.adminButtonColor {
  background-image: linear-gradient(#530D7E, rgb(83, 13, 126, 0.6));

}
</style>