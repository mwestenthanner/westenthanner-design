import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../pages/Main.vue'
import Impressum from '../pages/Impressum.vue'
import Datenschutz from '../pages/Datenschutz.vue'
import SingleProject from '../pages/SingleProject.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'home',
    component: Main
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: Impressum
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: Datenschutz
  },
  {
    path: '/project/:projectName',
    name: 'project',
    component: SingleProject
  }
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
