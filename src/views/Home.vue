<template>
  <div id="home" class="lg:absolute lg:left-96 lg:w-full">
    <Navbar page="menu"/>
    <Fab/>
    <SearchBar/>
    <div class="flex">
      <div v-for="category in categories" v-bind:key="category.id">
        <CategoryCard :category="category"/>
      </div>
    </div>
    <div v-for="category in categories" v-bind:key="category.id">
      <div v-for="item in category" v-bind:key="item.id">
        <Card :item="item"/>
      </div>
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
import {mutations} from "../store";
import {db} from "../db";

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
      categories: [],
    };
  },
  mounted: function () {
    mutations.setStorage();
  },
  firestore: {
    categories: db.collection("Menu"),
  },
};
</script>

<style>
html,
body {
  height: 100%;
  background-color: #1e2026;
}

#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 30px;
  background-color: #1e2026;
}
</style>