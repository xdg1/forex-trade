import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import Aszf from '../components/Aszf.vue';
import Adatk from '../components/Adatk.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/aszf',
    name: 'Aszf',
    component: Aszf,
  },
  {
    path: '/adatk',
    name: 'Adatk',
    component: Adatk,
  },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;