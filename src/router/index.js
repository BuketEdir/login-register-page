import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/doctor',
    name: 'doctor',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/Doctor.vue')
  },

  {
    path: '/article',
    name: 'article',

    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
