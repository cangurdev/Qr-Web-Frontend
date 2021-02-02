<template>
  <div class="w-96 mx-auto mt-36">
    <Sidebar/>
    <icon-base height="150" width="150" viewBox="0 0 24 24" class="mx-28">
      <icon-qr></icon-qr>
    </icon-base>
    <input type="number" min="1" placeholder="Masa Sayısını Giriniz"
           class="p-2 border bg-gray-200 focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
    >
    <button v-on:click="printCode()"
            class="bg-color w-32 mt-4 flex justify-center items-center w-full text-white px-4 py-3 rounded-lg focus:outline-none">
      Oluştur
    </button>
    <div id="section-to-print">
      <div class="flex">
        <div class="flex-col">
          <p>Masa 1</p>
          <vue-qrcode value="https://qr-menu-mobile.web.app/menu" :options="{ width: 150 }"></vue-qrcode>
        </div>
        <div class="flex-col">
          <p>Masa 2</p>
          <vue-qrcode value="https://qr-menu-mobile.web.app/menu" :options="{ width: 200 }"></vue-qrcode>
        </div>
        <div class="flex-col">
          <p>Masa 3</p>
          <vue-qrcode value="https://qr-menu-mobile.web.app/menu" :options="{ width: 200 }"></vue-qrcode>
        </div>
      </div>
      <div class="flex">
        <vue-qrcode value="https://qr-menu-mobile.web.app/menu" :options="{ width: 200 }"></vue-qrcode>
        <vue-qrcode value="https://qr-menu-mobile.web.app/menu" :options="{ width: 200 }"></vue-qrcode>
        <vue-qrcode value="https://qr-menu-mobile.web.app/menu" :options="{ width: 200 }"></vue-qrcode>
      </div>
      <div class="flex">
        <vue-qrcode value="https://qr-menu-mobile.web.app/menu" :options="{ width: 200 }"></vue-qrcode>
        <vue-qrcode value="https://qr-menu-mobile.web.app/menu" :options="{ width: 200 }"></vue-qrcode>
        <vue-qrcode value="https://qr-menu-mobile.web.app/menu" :options="{ width: 200 }"></vue-qrcode>
      </div>
    </div>

  </div>
</template>
<script>
import IconBase from "../../components/IconBase.vue";
import IconQr from "../../components/icons/IconQr";
import Sidebar from '../../components/admin/Sidebar.vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';

export default {
  name: "QrPage",
  components: {
    IconBase,
    IconQr,
    Sidebar,
    VueQrcode,
  },
  methods: {
    printCode() {
      window.print();
    }
  }
}
</script>

<style scoped>
@media print {
  body * {
    visibility: hidden;
  }

  #section-to-print, #section-to-print * {
    visibility: visible;
  }

  #section-to-print {
    position: absolute;
    left: 0;
    top: 0;
  }
}

#section-to-print {
  visibility: hidden;
}
</style>