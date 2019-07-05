import Vue from 'vue'
//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/components/common/Login.vue'),
    hidden: true
  },
  {
    path: '/home',
    component: () => import('@/components/common/Home.vue'),
    hidden: true
  },
  { path: '*', redirect: '/' } //防输错或者没找到页面路由错误，跳转到首页
]

const router = new VueRouter({
  routes,
  mode: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' ? 'history' : 'hash'
})

Vue.config.productionTip = false

export default router