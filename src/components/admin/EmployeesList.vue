<template>
  <tr class="flex w-full my-4 flex justify-between">
    <td class="px-8 w-1/3">{{ employee.fullName }}</td>
    <td class="px-8 w-1/3">{{ employee.title }}</td>
    <td class="px-8 w-1/3">{{ employee.phoneNumber }}</td>
  </tr>
</template>

<script>
export default {
  name: "Employees",
  props: {
    employee: Object,
  },
}
</script>

<style>

</style>