<template>
  <div class="text-white max-w-md flex bg-black m-4 rounded-lg items-center z-10">
    <icon-base height="24" width="64" viewBox="0 0 24 24" class="mx-1" opacity="0.5">
      <icon-search
      />
    </icon-base>
    <input
        name="search"
        placeholder="Find food or beverage"
        class="bg-black h-10 w-screen rounded-lg text-sm focus:outline-none"
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