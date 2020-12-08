<template>
  <div id="app">
    <Navbar page="menu" />
    <Fab />
    <SearchBar />
    <CategoryCard />
    <div v-for="item in items" v-bind:key="item">
      <Card :item="item" />
    </div>
  </div>
</template>

<script>
//import components
import Card from "../components/Card.vue";
import CategoryCard from "../components/CategoryCard.vue";
import SearchBar from "../components/SearchBar.vue";
import Navbar from "../components/Navbar.vue";
import Fab from "../components/Fab.vue";

import { db } from "../db";

export default {
  name: "App",
  title: "Menu",
  components: {
    Card,
    CategoryCard,
    SearchBar,
    Navbar,
    Fab,
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
  background-color: #1e2026;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 30px;
}
</style>