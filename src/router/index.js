import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Detail from '../views/Detail.vue'
import Landing from '../views/Landing.vue'
import AdminHome from '../views/admin/Home.vue'
import Employees from '../views/admin/Employees.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: "Sepet"
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path:'/menu',
    name:'Home',
    component: Home
  },
  {
    path:'/admin',
    name:'AdminHome',
    component: AdminHome
  },
  {
    path: '/admin/employees',
    name: 'Employees',
    component: Employees
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
