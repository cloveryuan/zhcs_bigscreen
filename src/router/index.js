import Vue from 'vue'
import VueRouter from 'vue-router'
// import First from '../views/first/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'first',
    component: () =>
      import(/* webpackChunkName: "first" */ '../views/first/index.vue')
  },
  {
    path: '/second',
    name: 'Second',
    component: () =>
      import(/* webpackChunkName: "second" */ '../views/second/index.vue')
  },
  {
    path: '/three',
    name: 'Three',
    component: () =>
      import(/* webpackChunkName: "three" */ '../views/three/index.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
