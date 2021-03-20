import Vue from 'vue'
import VueRouter from 'vue-router'

import route from './route'
import routeA from './route-mofulaA'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...route,
    ...routeA
  ]
})

export default router
