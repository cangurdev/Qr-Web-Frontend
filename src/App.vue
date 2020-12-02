<template>
  <div id="app">
    <Navbar />
    <SearchBar />
    <CategoryCard />
    <div v-for="item in items" v-bind:key="item">
      <Card :item="item" />
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import CategoryCard from "./components/CategoryCard.vue";
import SearchBar from "./components/SearchBar.vue";
import Navbar from "./components/Navbar.vue";

import { db } from "./db";

export default {
  name: "App",
  components: {
    Card,
    CategoryCard,
    SearchBar,
    Navbar,
  },
  data() {
    return {
      items: [],
    };
  },

  firestore: {
    items: db.collection("hamburger"),
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #1e2026;
  padding-bottom: 10px;
}
</style>
