export const state = () => ({
  active: false,
})

export const getters = {
  active: (state) => {
    return state.active
  },
}

export const mutations = {
  activate: (state) => {
    state.active = true
  },
  deactivate: (state) => {
    state.active = false
  },
}

export const actions = {
  toggle({ commit, getters }) {
    if (getters.active === true) {
      commit('deactivate')
    } else {
      commit('activate')
    }
  },
}
