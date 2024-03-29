<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Vivian's Tribute</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about-vivian">About Vivian</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/friends-share">Friends Share</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/gallery">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/memories">Memories</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/impact">Impact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/share-memory">Share a Memory</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'MainNavbar',
  });
  </script>
  
  <style scoped>
  /* Add any additional styling you want for your navbar here */
  </style>
  