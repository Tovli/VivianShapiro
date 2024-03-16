<template>
    <footer class="bg-dark text-light mt-5">
      <div class="container py-4">
        <div class="row">
          <div class="col text-center">
            <p>&copy; {{ currentYear }} Vivian's Tribute Site. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  
  export default defineComponent({
    name: 'MainFooter',
    setup() {
      // Use a computed property to dynamically get the current year
      const currentYear = computed(() => new Date().getFullYear());
  
      return { currentYear };
    },
  });
  </script>
  
  <style scoped>
  footer {
    background-color: #343a40 !important; /* Dark */
    color: #fff; /* Light text */
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  </style>
  