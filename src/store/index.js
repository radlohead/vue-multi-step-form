import Vue from 'vue'
import Vuex from 'vuex'
import input from '../assets/input'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

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
  getters,
  actions,
  mutations
})

export default store
