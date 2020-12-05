<template>
  <div>
    <Navbar />
    <DetailCard :item="this.$route.query.af" />
    <Fab />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Fab from "../components/Fab.vue";
import DetailCard from "../components/DetailCard.vue";

export default {
  name: "Detail",
  components: { Navbar, Fab, DetailCard },
};
</script>

<style>
</style>