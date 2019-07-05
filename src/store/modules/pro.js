const state = {
  proId: {}
}

const mutations = {
  SET_Detail_id: (state, role) => {
    state.proId = role

  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}