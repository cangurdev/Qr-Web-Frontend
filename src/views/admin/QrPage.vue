<template>
  <div class="w-96 absolute left-96">
    <Sidebar/>
    <icon-base height="200" width="200">
      <icon-qr></icon-qr>
    </icon-base>
    <input type="text" placeholder="Masa Sayısını Giriniz"
           class="py-2 border bg-gray-200 focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
    >
    <button
        class="bg-color w-32 mt-4 flex justify-center items-center w-full text-white px-4 py-3 rounded-lg focus:outline-none">
      Oluştur
    </button>
  </div>
</template>
<script>
import IconBase from "../../components/IconBase.vue";
import IconQr from "../../components/icons/IconQr";
import Sidebar from '../../components/admin/Sidebar.vue';

export default {
  name: "QrPage",
  components: {
    IconBase,
    IconQr,
    Sidebar,
  }
}
</script>

<style scoped>

</style>