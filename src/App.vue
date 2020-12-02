<template>
  <div id="app">
    <div v-for="item in items" v-bind:key="item">
      <Card :item="item" />
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import { db } from "./db";

export default {
  name: "App",
  components: {
    Card,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
