<template>
  <div class="lg:absolute lg:left-96">
    <Navbar page="detail"/>
    <DetailCard :item="this.$route.query.q"/>
    <Fab/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Fab from "../components/Fab.vue";
import DetailCard from "../components/DetailCard.vue";

export default {
  name: "Detail",
  title() {
    return this.$route.query.q.name;
  },
  components: {Navbar, Fab, DetailCard},
};
</script>

<style>
</style>