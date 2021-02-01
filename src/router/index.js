import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Detail from '../views/Detail.vue'
import Landing from '../views/Landing.vue'
import AdminHome from '../views/admin/Home.vue'
import Employees from '../views/admin/Employees.vue'
import Menu from '../views/admin/Menu.vue'
import Stock from '../views/admin/Stock.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import QrPage from '../views/admin/QrPage.vue'

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
        path: '/menu',
        name: 'Home',
        component: Home
    },
    {
        path: '/admin',
        name: 'AdminHome',
        component: AdminHome
    },
    {
        path: '/admin/employees',
        name: 'Employees',
        component: Employees
    },
    {
        path: '/admin/menu',
        name: 'Menu',
        component: Menu
    },
    {
        path: '/admin/stok',
        name: 'Stock',
        component: Stock
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/admin/qr',
        name: 'Qr',
        component: QrPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
