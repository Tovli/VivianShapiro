import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AboutVivian from './views/AboutVivian.vue';
// Import other pages similarly

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about-vivian', name: 'about-vivian', component: AboutVivian },
    // Define other routes similarly
  ],
});

export default router;
