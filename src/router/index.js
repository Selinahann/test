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
    name: 'main-tab',
    component: () => import('@/views/main/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home-tab',
        meta: {
          keepAlive: true,
          title: '首页'
        },
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/classify',
        name: 'classify-tab',
        meta: {
          keepAlive: true,
          title: '分类'
        },
        component: () => import('@/views/classify/index.vue')
      },
      {
        path: '/cart',
        name: 'cart-page',
        component: () => import('@/views/cart/index.vue'),
        meta: {
          isAuthenticated: true,
          title: '购物车'
        }
      },
      {
        path: '/mine',
        name: 'mine-page',
        component: () => import('@/views/mine/index.vue'),
        meta: {
          isAuthenticated: true,
          title: '个人中心'
        }
      },
      {
        path: '/test',
        name: 'test-use',
        component: () => import('@/views/test/index.vue')
      }
    ]
  },
  {
    path: '/detail/:id',
    name: 'about',
    component: () => import('@/views/details/index.vue'),
    meta: {
      title: '详情'
    }
  },
  {
    path: '/search',
    name: 'search-page',
    component: () => import('@/views/search/index.vue')
  },
  {
    path: '/login',
    name: 'login-page',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/map',
    name: 'map-page',
    meta: {
      title: '地图'
    },
    component: () => import('@/views/map/index.vue')
  },
  {
    path: '/geolocation',
    name: 'geolocation',
    meta: {
      title: '定位'
    },
    component: () => import('@/views/geolocation/index.vue')
  },
  {
    path: '/address',
    name: 'address-page',
    meta: {
      title: '选择地址'
    },
    component: () => import('@/views/address/index.vue')
  },
  {
    path: '/edit/address',
    name: 'edit-address',
    component: () => import('@/views/EditAddress/index.vue'),
    meta: {
      isAuthenticated: true,
      keepAlive: true,
      title: '新增地址'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuthenticated) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          callback: to.path
        }
      })
    }
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
