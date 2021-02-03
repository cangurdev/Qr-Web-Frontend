<template>
  <div>
    <Sidebar/>
    <table class="table-fixed mx-auto w-1/2 my-16">
      <thead class="text-white">
      <tr class="flex mb-4 flex justify-between">
        <th class="px-8 w-1/3">isim</th>
        <th class="px-8 w-1/3">Görev</th>
        <th class="px-8 w-1/3">Telefon</th>
      </tr>
      </thead>
      <hr>
      <tbody class="text-white w-64">
      <div v-for="employee in employees" v-bind:key="employee.id">
        <EmployeesList :employee="employee"/>
      </div>
      </tbody>
    </table>
  </div>
</template>

<script>
import Sidebar from '../../components/admin/Sidebar.vue';
import EmployeesList from '../../components/admin/EmployeesList.vue'
import {db} from "../../db";

export default {
  name: "Employees",
  components: {
    Sidebar,
    EmployeesList,
  },
  data() {
    return {
      employees: [],
    };
  },
  firestore: {
    employees: db.collection("Staff"),
  },
}
</script>

<style scoped>

</style>