import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../pages/Main.vue'
import Impressum from '../pages/Impressum.vue'
import Datenschutz from '../pages/Datenschutz.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Home',
    component: Main
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: Datenschutz
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 50,
        behavior: 'smooth',
      }
    } else return {
      top: 0,
      behavior: 'smooth',
    }
  }
})

export default router
