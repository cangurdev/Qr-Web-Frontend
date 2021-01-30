<template>
<div>
<Sidebar />
<SearchBar />
<EmployeesList />
</div>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue';
import EmployeesList from '../../components/EmployeesList.vue'
import SearchBar from '../../components/SearchBar.vue';

export default {
  name: "Employees",
  components:{
    Sidebar,
    EmployeesList,
    SearchBar,
  }
}
</script>

<style scoped>

</style>