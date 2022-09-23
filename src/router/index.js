import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: () => import('@/views/main/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/classify',
        component: () => import('@/views/classify/index.vue')
      },
      {
        path: '/cart',
        component: () => import('@/views/cart/index.vue')
      },
      {
        path: '/mine',
        component: () => import('@/views/mine/index.vue')
      }
    ]
  },
  {
    path: '/detail/:id',
    name: 'about',
    component: () => import('@/views/details/index.vue')
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
