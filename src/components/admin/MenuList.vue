<template>

  <tr class="flex w-full my-4 flex justify-between">
    <td class="px-8 w-48">{{ item.name }}</td>
    <td class="px-8 w-48">{{ category.id }}</td>
    <td class="px-8 w-48">{{ item.price }}₺</td>
    <td class="px-8 w-48">112</td>
    <td class="px-2 w-48">{{ item.ingredients }}</td>
    <button class="w-48 px-8 bg-color rounded-lg h-8 text-sm">Düzenle</button>
  </tr>

</template>

<script>
export default {
  name: "MenuList",
  props: {
    item: Object,
    category: Object,
  },
}
</script>

<style>

</style>