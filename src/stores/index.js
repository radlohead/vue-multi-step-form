import Vue from 'vue'
import Vuex from 'vuex'
import input from '../assets/input'

Vue.use(Vuex)

const formOptionsId = () => {
  let optionsId = []
  for (const obj of Array.from(input.items)) {
    for (const i of obj.options.keys()) {
      optionsId.push({
        itemId: obj.itemId,
        id: obj.options[i].id
      })
    }
  }
  optionsId.push({
    itemId: 3,
    id: undefined
  })
  return optionsId
}

const handleException = (state) => {
  let currentId = null
  for (const a of state.form.items) currentId = a.id
  for (const obj of formOptionsId()) {
    if (obj.itemId === state.step && obj.id !== currentId) {
      switch (state.step) {
        case 1:
          alert('청소 스타일을 체크해 주세요.')
          break
        case 2:
          alert('청소 시간을 체크해 주세요')
          break
        case 3:
          alert('원하는 청소 스타일을 추가로 입력해 주세요')
          break
        case 4:
          alert('네번째 질문을 선택해 주세요')
          break
      }
      console.log('exception', state.step, obj.id, currentId)
      return
    }
  }
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
      let currentId = null
      const cleanTimeTextArr = input.items[1].options.map(v => v.text)
      for (const a of state.form.items) currentId = a.id
      for (const obj of formOptionsId()) {
        if (obj.itemId === state.step && obj.id === currentId) {
          if (state.step === 2) {
            const cleanTimeFilter = state.form.items.map(v => cleanTimeTextArr.some(a => a === v.answer))
            if (!cleanTimeFilter[cleanTimeFilter.length - 1]) return
          }
          state.step = obj.itemId + 1
          return
        }
      }
      handleException(state)
      // console.log('handleNext', JSON.parse(JSON.stringify(state.form)), state.step, currentId)
    },
    handleBack (state) {
      state.step -= 1
      console.log('handleBack', state.step, formOptionsId())
    },
    handleRestart (state) {
      state.form.items = []
      state.step = 1
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
      for (const i of state.form.items.keys()) {
        if (state.form.items[i].id >= 4 && state.form.items[i].id <= 5) {
          state.form.items.splice(i, 1)
        }
      }
      let exceptionText = []
      for (const a of input.items) {
        if (a.itemId === 2) {
          for (const i of a.options.keys()) exceptionText.push(a.options[i].text)
        }
      }
      const findText = Array.from(state.form.items).find((v, i) => {
        if (state.form.items[i]) {
          for (const obj of exceptionText) return obj === v.answer
        }
      })
      const findIndex = state.form.items.findIndex(v => v === findText)
      if (findIndex > -1) state.form.items.splice(findIndex, 1)
      state.form.items.push({
        id: Number(items.id),
        answer: items.value
      })
      console.log('updateRadio', JSON.parse(JSON.stringify(state.form.items)), findIndex)
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
