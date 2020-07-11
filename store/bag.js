export const state = () => ({
  uuids: [],
})

export const getters = {
  count: (state) => {
    return state.uuids.length
  },
  exists: (state) => (_uuid) => {
    return state.uuids.some((uuid) => uuid === _uuid)
  },
  findIndex: (state) => (_uuid) => {
    return state.uuids.findIndex((uuid) => uuid === _uuid)
  },
  uuids: (state) => {
    return state.uuids
  },
}

export const mutations = {
  add: (state, uuid) => {
    state.uuids.push(uuid)
  },
  remove: (state, index) => {
    state.uuids.splice(index, 1)
  },
}

export const actions = {
  toggle({ commit, getters }, uuid) {
    const index = getters.findIndex(uuid)
    if (index === -1) {
      commit('add', uuid)
    } else {
      commit('remove', index)
    }
  },
}
