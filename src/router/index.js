import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detailarticle',
    name: 'DetailArticle',
    props: true,
    component: () => import('../views/DetailArticle.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
