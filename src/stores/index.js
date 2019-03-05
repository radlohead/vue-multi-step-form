import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1,
    cleanStyleList: [
      {id: 1, label: '스팀청소', checked: false},
      {id: 2, label: '진공청소기로 청소', checked: false},
      {id: 3, label: '쓰레기 비우기', checked: false}
    ]
  },
  mutations: {
    handleNext (state) {
      let cleanStyleListArrState = []
      for (const a of state.cleanStyleList) cleanStyleListArrState.push(a.checked)
      cleanStyleListArrState.some(v => v) ? state.step = 2 : state.step = 1
    },
    updateCleanStyleList (state, items) {
      state.cleanStyleList = items
    }
  },
  actions: {
    handleNext ({commit}, items) {
      commit('handleNext', items)
    },
    updateCleanStyleList ({commit}, items) {
      commit('updateCleanStyleList', items)
    }
  }
})
