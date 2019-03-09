import Vue from 'vue'
import Vuex from 'vuex'
import input from '../assets/input'

Vue.use(Vuex)

const optionsNotId = (optionsId, arrNum) => {
  for (const num of arrNum) {
    optionsId.push({
      itemId: num,
      id: undefined
    })
  }
  return optionsId
}

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
  optionsNotId(optionsId, [3])
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

const formTypeName = {
  checkbox: 1,
  radio: 2,
  text: 3,
  selectbox: 4
}

const handleSubmit = (state) => {
  const submitStep = input.items[input.items.length - 1].itemId + 1

  if (state.step === submitStep) {
    setTimeout(() => {
      console.log(JSON.parse(JSON.stringify(state.form)))
      alert('작성한 폼이 제출되었습니다.')
    }, 700)
  }
}

const answerCheck = (state, formTypeNum, answerCheckIndex) => {
  const cleanTimeTextArr = input.items[answerCheckIndex].options.map(v => v.text)
  const cleanTimeFilter = state.form.items.some(v => cleanTimeTextArr.some(a => a === v.answer))

  if (state.step !== formTypeNum) return false
  return !cleanTimeFilter
}

const formTypeId = () => {
  let result = []
  for (const obj of Array.from(input.items)) {
    let optionsId = []
    let optionsText = []
    for (const a of Array.from(obj.options)) {
      optionsId.push(a.id)
      optionsText.push(a.text)
    }
    result.push({
      formType: obj.formType,
      id: optionsId,
      text: optionsText
    })
  }
  console.log('formTypeId', result)
  return result
}

const formTypeIndex = (typeName) => {
  const findIndex = formTypeId().findIndex(v => v.formType === formTypeName[typeName])
  console.log('formTypeindex', findIndex)
  return findIndex
}

const formIdDuplication = (state, formTypeName) => {
  let exceptionText = []
  for (const obj of input.items) {
    if (obj.itemId === formTypeName) {
      for (const i of obj.options.keys()) exceptionText.push(obj.options[i].text)
    }
  }
  const findText = Array.from(state.form.items).find((v, i) => {
    if (state.form.items[i]) {
      for (const obj of exceptionText) return obj === v.answer
    }
  })
  const findIndex = state.form.items.findIndex(v => v === findText)
  if (findIndex > -1) state.form.items.splice(findIndex, 1)
  return state
}

const stepIncrement = (state) => {
  let currentId = null

  for (const a of state.form.items) currentId = a.id
  for (const obj of formOptionsId()) {
    if (obj.itemId === state.step && obj.id === currentId) {
      if (answerCheck(state, formTypeName['radio'], 1)) return
      state.step = obj.itemId + 1
      handleSubmit(state)
      return true
    }
    console.log('handleNext', JSON.parse(JSON.stringify(state.form.items)))
  }
}

const duplicateItems = (state, formTypeName) => {
  const step = formTypeId()[formTypeIndex(formTypeName)].text
  const duplicateItems = step
    .map(v => state.form.items.find(a => v === a.answer ? a : null))
    .filter(v => { if (v) return v })
  const items = state.form.items.map(v => duplicateItems.filter(a => v.answer === a.answer)).flat()
  const deleteDuplicateItems = items.map(v => state.form.items.filter(a => v.answer !== a.answer)).flat()
  state.form.items = deleteDuplicateItems
  console.log('duplicateItems', JSON.parse(JSON.stringify(deleteDuplicateItems)))
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
      if (stepIncrement(state)) return
      else handleException(state)
      console.log('handleNext', JSON.parse(JSON.stringify(state.form.items)))
    },
    handleBack (state) {
      state.step -= 1
      if (state.step === 1) duplicateItems(state, 'checkbox')
      else if (state.step === 2) duplicateItems(state, 'radio')
      else if (state.step === 3) duplicateItems(state, 'text')
      else if (state.step === 4) duplicateItems(state, 'selectbox')
      console.log('handleBack', JSON.parse(JSON.stringify(state.form)), state.step)
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
      const idArr = formTypeId()[formTypeIndex('radio')].id
      const firstId = idArr[1]
      const lastId = idArr[idArr.length - 1]

      for (const i of state.form.items.keys()) {
        if (state.form.items[i].id >= firstId && state.form.items[i].id <= lastId) {
          state.form.items.splice(i, 1)
        }
      }

      formIdDuplication(state, formTypeName['radio'])
      state.form.items.push({
        id: Number(items.id),
        answer: items.value
      })
      console.log('updateRadio', JSON.parse(JSON.stringify(state.form.items)))
    },
    updateCleanStyleText (state, items) {
      // const valueLength = items.value.replace(/\s/g, '')
      let count = 0

      // if (!valueLength) return
      for (const obj of state.form.items) {
        if (obj.id) ++count
        if (state.form.items.length === count) state.form.items.push({ answer: items.value })
      }
      for (const i of state.form.items.keys()) {
        if (state.form.items[i].id === undefined) state.form.items[i].answer = items.value
        if (state.form.items[i].id === undefined && !state.form.items[i].answer) {
          state.form.items.splice(i, 1)
        }
      }
      console.log('updateCleanStyleText', JSON.parse(JSON.stringify(state.form.items)), items.id, items.value)
    },
    updateSelect (state, items) {
      const idArr = formTypeId()[formTypeIndex('selectbox')].id
      const firstId = idArr[0]
      const lastId = idArr[idArr.length - 1]
      const selectId = Number(items.options[items.options.selectedIndex].id)
      const selectText = items.options[items.options.selectedIndex].text

      for (const i of state.form.items.keys()) {
        if (Number(state.form.items[i].id) >= firstId && Number(state.form.items[i].id) <= lastId) {
          state.form.items.splice(i, 1)
        }
      }
      state.form.items.push({
        id: selectId,
        answer: selectText
      })
      console.log('updateSelect', JSON.parse(JSON.stringify(state.form.items)))
    }
  }
})

export default store
