import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AboutVivian from './views/AboutVivian.vue';
import Gallery from './views/Gallery.vue';
import Memories from './views/Memories.vue';
import Impact from './views/Impact.vue';
import ShareMemory from './views/ShareMemory.vue';
import FriendsShare from './views/FriendsShare.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about-vivian',
    name: 'AboutVivian',
    component: AboutVivian
  },
  {
    path: '/friends-share',
    name: 'FriendsShare',
    component: FriendsShare
  },
//   {
//     path: '/gallery',
//     name: 'Gallery',
//     component: Gallery
//   },
//   {
//     path: '/memories',
//     name: 'Memories',
//     component: Memories
//   },
//   {
//     path: '/impact',
//     name: 'Impact',
//     component: Impact
//   },
//   {
//     path: '/share-memory',
//     name: 'ShareMemory',
//     component: ShareMemory
//   },
  // If you have a 404 page or other routes, define them here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
