<template>
  <div>
    <Sidebar/>
    <SearchBar/>
    <StockList/>
  </div>
</template>

<script>
import Sidebar from '../../components/admin/Sidebar.vue';
import StockList from '../../components/admin/StockList.vue';
import SearchBar from '../../components/SearchBar.vue';

export default {
  name: "Stock",
  components: {
    Sidebar,
    StockList,
    SearchBar,
  }
}
</script>

<style scoped>

</style>