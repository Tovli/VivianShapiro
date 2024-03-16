<template>
  <div id="app">
    <!-- Navbar Component -->
    <MainNavbar />

    <!-- Router View -->
    <!-- This component dynamically changes based on the route. -->
    <router-view />


  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainNavbar from './components/MainNavbar.vue';

 
export default defineComponent({
  name: 'App',
  components: {
    MainNavbar
  }
});
</script>

<style>
/* Global styles */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Ensures the footer is pushed to the bottom of the page */
main {
  flex-grow: 1;
}

</style>
