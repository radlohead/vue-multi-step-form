import Vue from 'vue'
import Vuex from 'vuex'
import input from '../assets/input'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    step: 1,
    form: {
      id: input.formId,
      items: []
    }
  },
  mutations
})

export default store
