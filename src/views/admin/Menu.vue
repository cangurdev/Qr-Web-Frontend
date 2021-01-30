<template>
<div>
<Sidebar />
<SearchBar />
<MenuList />
</div>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue';
import MenuList from '../../components/MenuList.vue';
import SearchBar from '../../components/SearchBar.vue';

export default {
  name: "Menu",
  components:{
    Sidebar,
    MenuList,
    SearchBar,
  }
}
</script>

<style scoped>

</style>