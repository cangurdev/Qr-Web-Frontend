<template>
  <div>
    <img :src="image" class="absolute left-0 z-10" width="50%"/>
    <div class="absolute right-32 ml-64 min-h-screen flex flex-col justify-center sm:py-12">
      <div class="relative sm:max-w-xl sm:mx-auto">
        <p class="text-left text-3xl text-white my-2">Hoş Geldiniz</p>
        <div class="relative w-96 bg-white mx-8 md:mx-0 shadow rounded-lg sm:py -4 px-12">
          <div class="max-w-md mx-auto">
            <div class="leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="flex flex-col">
                <label class="leading-loose text-left">Kafe İsmi</label>
                <input type="text"
                       class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                       placeholder="Kafe ismi">
              </div>
              <div class="flex flex-col">
                <label class="leading-loose text-left">Email</label>
                <input type="text"
                       class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                       placeholder="Email">
              </div>
              <div class="flex flex-col">
                <label class="leading-loose text-left">Şifre</label>
                <input type="text"
                       class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                       placeholder="Şifre">
              </div>
            </div>
            <div class="pt-4 flex items-center space-x-4 my-4">
              <button
                  class="bg-color flex justify-center items-center w-full text-white px-4 py-3 rounded-lg focus:outline-none">
                Kayıt Ol
              </button>
            </div>
            <div class="mt-8 text-sm flex flex-col">
              <p class="text-center">Bir Hesabın Var Mı? <a class="text-red-800" href="/login">Giriş Yapın</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cafe from "../assets/cafe.png"

export default {
  name: "Register",
  data() {
    return {
      image: cafe
    };
  },
}
</script>

<style scoped>

</style>