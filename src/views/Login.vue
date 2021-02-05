<template>
  <div class="w-full">
    <img :src="image" class="absolute left-0 z-10" width="50%"/>
    <div class="absolute right-32 ml-96 min-h-screen flex flex-col justify-center sm:py-12">
      <div class="relative sm:max-w-xl sm:mx-auto">
        <p class="text-left text-3xl text-white my-2">Hoş Geldiniz</p>
        <div class="relative w-96 bg-white mx-8 md:mx-0 shadow rounded-lg px-12 py-4">
          <div>
            <div class="text-gray-700 sm:text-lg sm:leading-7">
              <div class="flex flex-col">
                <label class="leading-loose text-left">Email</label>
                <input type="text" v-model="email"
                       class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                       placeholder="Email">
              </div>
              <div class="flex flex-col my-4">
                <label class="leading-loose text-left">Şifre</label>
                <input type="password" v-model="password"
                       class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                       placeholder="Şifre">
              </div>
              <p class="text-right text-xs">Şifremi unuttum</p>
            </div>
            <div class="pt-4 flex items-center space-x-4 my-4">
              <button v-on:click="submit"
                      class="bg-color flex justify-center items-center w-full text-white px-4 py-3 rounded-lg focus:outline-none">
                Giriş Yap
              </button>
            </div>
            <div class="mt-8 text-sm flex flex-col">
              <p class="text-center">Hesabın Yok Mu? <a class="text-red-800" href="/register">Kayıt Olun</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cafe from "../assets/cafe.png"
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      image: cafe,
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.replace({name: "Admin"});
          })
          .catch(err => {
            this.error = err.message;
          });
    }
  }
}
</script>

<style>
.bg-color {
  background-color: #2B4547;
}
</style>