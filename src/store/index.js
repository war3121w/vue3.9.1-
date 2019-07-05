import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import pro from './modules/pro'

Vue.use(Vuex)
// if (process.env.NODE_ENV === 'development') {
//   Vue.use(Vuex)
// }
const store = new Vuex.Store({
  modules: {
    user, pro
  },
  getters
})

export default store