<template>
    <div class="home">
      <div class="container py-5">
        <h1 class="text-center mb-4">Welcome to Vivian's Tribute Site</h1>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <p>
              This website is a tribute to Vivian Taylor Shapiro, a beloved mother, grandmother, friend, sister, and aunt. Here, we celebrate her life, share memories, and honor her legacy.
            </p>
            <p>
              Vivian's vibrant spirit and passion for life touched everyone she knew. This space allows us to come together to remember the joy she brought into our lives and to keep her memory alive.
            </p>
            <div class="text-center mt-4">
              <router-link to="/about-vivian" class="btn btn-primary">Learn More About Vivian</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'HomePage',
  });
  </script>
  
  <style scoped>
  /* Custom styles for the Home component */
  .home {
    
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  
  .home::before {
    content: '';
    position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-attachment: fixed;
    background-image: url('~@/assets/images/HomeBackground.png');
  background-size: cover; /* Cover the entire page */
  background-position: center; /* Center the background image */
  
  opacity: 0.5;
  }
  h1 {
    color: #007bff; /* Use a variable or class from your main.scss for consistency */
  }
  </style>
  