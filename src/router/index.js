import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:() => import ('../views/Home.vue')
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component:() => import ('../views/Forgot.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component:() => import ('../views/Logout.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component:() => import ('../views/Register.vue')
  },
  {
    path: '/mitienda',
    name: 'Mitienda',
    component:() => import ('../views/Mitienda.vue')
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component:() => import ('../views/Perfil.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import ('../views/Login.vue')
  },
  {
    path: '/banner',
    name: 'Banner',
    component: () => import ('../views/Banner.vue')
  },
  {
    path: '/url',
    name: 'Url',
    component: () => import ('../views/Url.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import ('../views/Productos.vue')
  },
  {
    path: '/:id',
    name: 'Tienda',
    component: () => import ('../views/Tienda.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
