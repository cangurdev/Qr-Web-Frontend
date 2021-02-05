<template>
  <div>
    <Alert :message="message" :show="clicked" :status="status"/>
    <div class="flex justify-between max-w-md m-4 items-end pb-2">
      <div class="flex">
        <icon-base height="20" width="20" iconColor="white" class="mt-1"
        >
          <icon-price
          />
        </icon-base>
        <p class="text-white price-font-size ml-0.5">{{ price }} TL</p>
      </div>
      <button
          @click="order()"
          class="px-3 py-1 text-base text-white bg-purple-600 rounded-lg hover:text-white focus:outline-none"
      >
        Sipariş Ver
      </button>
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconPrice from "./icons/IconPrice";
import {store, mutations} from "../store";
import Alert from "./Alert";
import {db} from "../db";

export default {
  name: "Order",
  components: {
    IconPrice,
    IconBase,
    Alert,
  },
  computed: {
    price() {
      return store.price;
    },
  },
  data: function () {
    return {
      clicked: false,
      message: "",
      status: true,
    };
  },
  methods: {
    order() {
      if (this.price > 0) {
        this.increaseCount();
        db.collection("Orders")
            .add({
              orderType: "Yeni Sipariş!",
              tableNumber: this.$route.params.id,
              time: Date.now(),
              order: {
                price: parseInt(store.price),
                count: store.count,
                itemList: store.items,
              },
              status: "Beklemede",
            })
            .then(() => (this.message = "Sipariş Verildi"), mutations.clearCart())
            .catch(() => {
              this.message = "Sipariş Verilemedi";
              this.status = false;
            });
      } else {
        this.message = "Sepetiniz Boş";
        this.status = false;
      }
      this.clicked = true;
      setTimeout(() => {
        this.clicked = false;
      }, 2000);
    },
    async increaseCount() {
      let list = store.items;
      for (let i = 0; i < list.length; i++) {
        const ref = db.collection("Menu").doc(list[i].item.category);
        const doc = await ref.get();
        let items = doc.data();
        items[list[i].item.name].count += list[i].piece;

        await db.collection("Menu").doc(list[i].item.category).set(items);
      }
    }
  },
};
</script>

<style>
.price-font-size {
  font-size: 20px;
}
</style>