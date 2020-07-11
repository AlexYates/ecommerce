export const state = () => ({
  wide: false,
})

export const getters = {
  wide: (state) => {
    return state.wide
  },
}

export const mutations = {
  isWide: (state) => {
    state.wide = true
  },
  isNarrow: (state) => {
    state.wide = false
  },
}

export const actions = {
  isWide({ commit }) {
    commit('isWide')
  },
  isNarrow({ commit }) {
    commit('isNarrow')
  },
}
