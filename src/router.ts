import { createRouter, createWebHashHistory } from 'vue-router'
import store from './store'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login.vue'),
      name: 'login',
      meta: {
        hiddenGlobalHeaderAndFooter: true
      }
    },
    {
      path: '/register',
      component: () => import('@/views/Register.vue'),
      name: 'register'
    },
    {
      path: '/index',
      component: () => import('@/views/Home.vue'),
      name: 'index'
    },
    {
      path: '/column/detail/:columnId',
      component: () => import('@/views/ColumnDetail.vue'),
      name: 'columndetail'
    },
    {
      path: '/post/create',
      component: () => import('@/views/CreatePost.vue'),
      name: 'postcreate',
      meta: {
        requriedLogin: true
      }
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

// 拦截一些路由跳转
router.beforeEach((to, from, next) => {
  const { token } = store.state
  if (to.name !== 'login' && to.meta.requriedLogin && !token) {
    // 有些页面未登录不能看, 如创建文章
    next('/login')
  } else if (to.name === 'login' && token) {
    // 登录成功不得访问登录页面
    next('/index')
  } else {
    next()
  }
})

export default router
