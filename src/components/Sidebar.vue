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
         href="#">
        <icon-base height="24" width="64" viewBox="0 0 24 24">
          <icon-box
          />
        </icon-base>

        <span class=" font-medium">Stok Durumları</span>
      </a>
      <a class="flex items-center mt-5 py-2 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100"
         href="#">
        <icon-base height="24" width="64" viewBox="0 0 24 24">
          <icon-capital
          />
        </icon-base>

        <span class="ont-medium">Sermaye</span>
      </a>
      <a class="flex items-center mt-5 py-2 text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100"
         href="#">
        <icon-base height="24" width="64" viewBox="0 0 24 24">
          <icon-menu-box
          />
        </icon-base>

        <span class="font-medium">Menu</span>
      </a>
    </nav>

    <div class="absolute bottom-0 my-4">
      <a class="flex items-center py-2 px-8 text-gray-600 hover:text-gray-500" href="#">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10 7C9.63113 7 9.3076 7.19922 9.13318 7.50073C8.85664 7.97879 8.24491 8.14215 7.76685 7.86561C7.28879 7.58906 7.12543 6.97733 7.40197 6.49927C7.91918 5.60518 8.88833 5 10 5C11.6569 5 13 6.34315 13 8C13 9.30622 12.1652 10.4175 11 10.8293V11C11 11.5523 10.5523 12 10 12C9.44773 12 9.00001 11.5523 9.00001 11V10C9.00001 9.44772 9.44773 9 10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z"
                fill="currentColor"/>
        </svg>

        <span class="mx-4 font-medium">Can baba</span>
      </a>
    </div>
  </div>

</template>

<script>
import IconBase from "./IconBase.vue";
import IconPerson from "./icons/IconPerson.vue";
import IconHand from "./icons/IconHand.vue";
import IconMenuBox from "./icons/IconMenuBox.vue";
import IconQr from "./icons/IconQr.vue";
import IconCapital from "./icons/IconCapital.vue";
import IconBox from "./icons/IconBox.vue";

export default {
  name: "sideBar",
  components: {
    IconBase,
    IconPerson,
    IconHand,
    IconMenuBox,
    IconQr,
    IconCapital,
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