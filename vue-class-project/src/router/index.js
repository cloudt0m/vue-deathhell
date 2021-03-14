import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Test from '../views/Test.vue';
import NotFound from '../views/NotFound.vue';
import Composition from '../views/Composition.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test/:userId',
    name: 'Test',
    component: Test,
  },
  {
    path: '/composition',
    name: Composition,
    component: Composition,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('../views/Vuex.vue'),
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('../views/Axios.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
