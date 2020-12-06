<template>
  <div class="text-white max-w-md flex bg-black m-4 rounded-lg items-center">
    <icon-base height="42" width="72" viewBox="0 0 24 24" class="mx-3">
      <icon-search
    /></icon-base>
    <input
      name="search"
      placeholder="Find food or beverage"
      class="bg-black w-screen rounded-lg text-sm focus:outline-none"
    />
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconSearch from "./icons/IconSearch";
export default {
  name: "SearchBar",
  components: {
    IconSearch,
    IconBase,
  },
};
</script>

<style>
</style>