import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration
import './assets/style/main.scss';

createApp(App)
  .use(router) // Use the router
  .mount('#app');
