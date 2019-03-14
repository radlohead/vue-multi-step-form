import Vue from 'vue'
import Vuex from 'vuex'
import input from '../assets/input'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    input: input,
    step: 1,
    form: {
      id: input.formId,
      items: []
    }
  },
  getters: {
    firstStep (state) {
      return state.input.items[0].itemId
    },
    lastStep (state) {
      return state.input.items[state.input.items.length - 1].itemId + 1
    },
    secondToLastStep (state) {
      return state.input.items[state.input.items.length - 1].itemId
    }
  },
  mutations
})

export default store
