import Vue from 'vue'
import Vuex from 'vuex'
import input from '../assets/input'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    step: 1,
    form: {
      id: input.formId,
      items: []
    }
  },
  mutations: {
    handleNext (state) {
      let cleanStyleListArrState = []
      for (const a of state.cleanStyleList) cleanStyleListArrState.push(a.checked)
      cleanStyleListArrState.some(v => v) ? state.step = 2 : state.step = 1
    },
    updateMessage (state, items) {
      if (items.checked) {
        state.form.items.push({
          id: Number(items.id),
          answer: items.value
        })
      } else {
        for (const index of state.form.items.keys()) {
          state.form.items.splice(index, 1)
        }
      }
      console.log('updateMessage', JSON.parse(JSON.stringify(state.form)), items.id, items.value, items.checked)
    }
  },
  actions: {
    handleNext ({commit}, items) {
      commit('handleNext', items)
    },
    updateMessage (state, items) {
      console.log('updateMessage', JSON.parse(JSON.stringify(state.form)), items)
    }
  }
})

export default store
