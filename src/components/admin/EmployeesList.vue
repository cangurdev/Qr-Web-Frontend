<template>
    <tr class="flex w-full my-4 flex justify-between">
      <td class="px-8 w-1/3"> {{ item.fullName }}</td>
      <td class="px-8 w-1/3"> {{ item.title }}</td>
      <td class="px-8 w-1/3">5001112222</td>
    </tr>
</template>

<script>
export default {
  name: "Employees",
  props: {
    item: Object,
  },
}
</script>

<style>

</style>