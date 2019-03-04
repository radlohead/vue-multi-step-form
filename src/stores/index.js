import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cleanStyleList: [
      {id: 1, label: '스팀청소', checked: false},
      {id: 2, label: '진공청소기로 청소', checked: false},
      {id: 3, label: '쓰레기 비우기', checked: false}
    ]
  },
  mutations: {
    updateCleanStyleList (state, items) {
      state.cleanStyleList = items
    }
  },
  actions: {
    updateCleanStyleList ({commit}, items) {
      commit('updateCleanStyleList', items)
    }
  }
})
