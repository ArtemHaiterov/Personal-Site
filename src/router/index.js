import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Portfolio from '@/views/Portfolio'
import Contact from '@/views/Contact'


const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
]

const router = new VueRouter({
  routes,
})

Vue.use(VueRouter)

export default router
