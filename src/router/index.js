import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router