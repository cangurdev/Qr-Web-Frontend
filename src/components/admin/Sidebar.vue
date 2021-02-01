<template>
  <div class="w-64 h-screen background mt-8 sm:mt-0 fixed left-0">
    <div class="flex items-center justify-center mt-10">
      <p>Cafe 236</p>
    </div>

    <nav class="mt-10">
      <a class="flex items-center py-2 bg-gray-700 text-gray-100 border-r-4 border-gray-100" href="#">
        <icon-base height="24" width="64" viewBox="0 0 24 24">
          <icon-hand
          />
        </icon-base>
        <span class="font-medium">Siparişler</span>
      </a>

      <a class="flex items-center mt-5 py-2 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100"
         href="#">
        <icon-base height="24" width="64" viewBox="0 0 24 24">
          <icon-qr
          />
        </icon-base>
        <span class="font-medium">QR Oluştur</span>
      </a>

      <a class="flex items-center mt-5 py-2 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100"
         href="/admin/employees">
        <icon-base height="24" width="64" viewBox="0 0 20 20">
          <icon-person
          />
        </icon-base>

        <span class="font-medium">Çalışanlar</span>
      </a>

      <a class="flex items-center mt-5 py-2 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100"
         href="/admin/stok">
        <icon-base height="24" width="64" viewBox="0 0 24 24">
          <icon-box
          />
        </icon-base>

        <span class=" font-medium">Stok Durumları</span>
      </a>
      <a class="flex items-center mt-5 py-2 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100"
         href="/admin/menu">
        <icon-base height="24" width="64" viewBox="0 0 24 24">
          <icon-menu-box
          />
        </icon-base>

        <span class="font-medium">Menu</span>
      </a>
    </nav>

    <div class="absolute bottom-0 my-4">
      <a class="flex items-center py-2 px-8 text-gray-600 hover:text-gray-500" href="#">
        <span class="mx-4 font-medium">Can baba</span>
      </a>
    </div>
  </div>

</template>

<script>
import IconBase from "../IconBase.vue";
import IconPerson from "../icons/IconPerson.vue";
import IconHand from "../icons/IconHand.vue";
import IconMenuBox from "../icons/IconMenuBox.vue";
import IconQr from "../icons/IconQr.vue";
import IconBox from "../icons/IconBox.vue";

export default {
  name: "sideBar",
  components: {
    IconBase,
    IconPerson,
    IconHand,
    IconMenuBox,
    IconQr,
    IconBox,
  }
}
</script>

<style scoped>
.background {
  background-color: #2B4547;
  height: 100vh;

}
</style>