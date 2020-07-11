export const state = () => ({
  search: '',
  searches: [],
})

export const getters = {
  count: (state) => {
    return state.searches.length
  },
  exists: (state) => (_term) => {
    return state.searches.some((term) => term === _term)
  },
  findIndex: (state) => (_term) => {
    return state.searches.findIndex((term) => term === _term)
  },
  searches: (state) => {
    return state.searches
  },
}

export const mutations = {
  add: (state, term) => {
    state.searches.push(term)
  },
  clear: (state) => {
    state.searches = []
  },
  search: (state, term) => {
    state.search = term
  },
}

export const actions = {
  add({ commit, getters }, term) {
    const index = getters.findIndex(term)
    if (index === -1) {
      commit('add', term)
    }
  },
  clear({ commit }) {
    commit('clear')
  },
  search({ commit }, term) {
    commit('search', term)
  },
}
