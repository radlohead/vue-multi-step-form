import Vue from 'vue'
import Vuex from 'vuex'
import input from '../assets/input'

Vue.use(Vuex)

const formOptionsId = {
  1: 2,
  2: 2,
  3: 2,
  4: 3,
  5: 3,
  undefined: 4,
  6: 5,
  7: 5,
  8: 5
}

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
      const idList = []
      let currentId = null
      for (const a of state.form.items) idList.push(a.id)
      currentId = idList[idList.length - 1]
      if (!currentId && !idList.length) return
      state.step = formOptionsId[currentId]
      console.log('handleNext', JSON.parse(JSON.stringify(state.step)))
    },
    handleBack (state) {
      console.log('handleBack', state.step, input.items[0].options[0].id)
    },
    updateCheckbox (state, items) {
      if (items.checked) {
        state.form.items.push({
          id: Number(items.id),
          answer: items.value
        })
      } else {
        for (const i of state.form.items.keys()) {
          if (state.form.items[i].id === Number(items.id)) {
            state.form.items.splice(i, 1)
          }
        }
      }
      console.log('updateCheckbox', JSON.parse(JSON.stringify(state.form)), items.id, items.value, items.checked)
    },
    updateRadio (state, items) {
      if (items.checked) {
        for (const i of state.form.items.keys()) {
          if (state.form.items[i].id >= 4 && state.form.items[i].id <= 5) {
            state.form.items.splice(i, 1)
          }
        }
        state.form.items.push({
          id: Number(items.id),
          answer: items.value
        })
      }
      console.log('updateRadio', JSON.parse(JSON.stringify(state.form)), items.id, items.value, items.checked)
    },
    updateCleanStyleText (state, items) {
      let count = 0
      for (const a of state.form.items) {
        if (a.id) ++count
        if (state.form.items.length === count) state.form.items.push({ answer: items.value })
        console.log(state.form.items.length, count)
      }
      for (const i of state.form.items.keys()) {
        if (state.form.items[i].id === undefined) {
          state.form.items[i].answer = items.value
        }
        if (state.form.items[i].id === undefined && !state.form.items[i].answer) {
          state.form.items.splice(i, 1)
        }
      }
      console.log('updateCleanStyleText', JSON.parse(JSON.stringify(state.form.items)), items.id, items.value)
    },
    updateSelect (state, items) {
      for (const i of state.form.items.keys()) {
        if (Number(state.form.items[i].id) >= 6 && Number(state.form.items[i].id) <= 8) {
          state.form.items.splice(i, 1)
        }
      }
      state.form.items.push({
        id: Number(items.options[items.options.selectedIndex].id),
        text: items.options[items.options.selectedIndex].text
      })
      console.log('updateSelect', JSON.parse(JSON.stringify(state.form.items)), items.options[items.options.selectedIndex].text)
    }
  }
})

export default store
