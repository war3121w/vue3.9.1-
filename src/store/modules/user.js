import Cookies from 'js-cookie'

const state = {
  permissionRoles: {}
}

const mutations = {
  SET_USER_ROLES: (state, role) => {
    state.permissionRoles = role
  },
  BACK_TO_LOGIN: () => {
    Cookies.remove("mobile");
    localStorage.clear();
  }
}

const actions = {
  //回到登录
  backToLogin({ commit }) {
    return new Promise((resolve, reject) => {
      commit('BACK_TO_LOGIN')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}