import Vue from 'vue'
import App from '@/App.vue'
import ELEMENT from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router'
import storge from '@/assembly/storage'   //获取浏览器localStorage存储
import cookie from '@/assembly/cookie'   //获取浏览器cookie存储
import request from '@/utils/request'
Vue.use(ELEMENT);

import axios from 'axios'
import qs from 'qs'

import '../static/css/index.css'
import '../static/css/indexArt.css'
import '../static/css/process.css'
import '../static/css/statedetail.css'


import { getToken, postToken } from "@/assembly/token";
import * as filters from './filters'



//注册所有的全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

Vue.prototype.$storge = storge //注册全局浏览器localStorage存储方法
Vue.prototype.$cookie = cookie //注册全局浏览器cookie存储方法
Vue.prototype.$axios = axios
Vue.prototype.$request = request
Vue.prototype.$qs = qs
Vue.prototype.$getToken = getToken
Vue.prototype.$postToken = postToken

var bus = new Vue();
Vue.prototype.bus = bus;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
