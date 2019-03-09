import input from '../assets/input'
import { CHECKBOX, RADIO, TEXT, SELECTBOX, formTypeName, formOptionsNotId } from './constants'

export const optionsNotId = (optionsId, arrNum) => {
  for (const num of arrNum) {
    optionsId.push({
      itemId: num,
      id: undefined
    })
  }
  return optionsId
}

export const formOptionsId = () => {
  let optionsId = []

  for (const obj of Array.from(input.items)) {
    for (const i of obj.options.keys()) {
      optionsId.push({
        itemId: obj.itemId,
        id: obj.options[i].id
      })
    }
  }
  optionsNotId(optionsId, formOptionsNotId)
  return optionsId
}

export const handleException = (state) => {
  let currentId = null

  for (const a of state.form.items) currentId = a.id
  for (const obj of formOptionsId()) {
    if (obj.itemId === state.step && obj.id !== currentId) {
      switch (state.step) {
        case formTypeName[CHECKBOX]:
          alert('청소 스타일을 체크해 주세요.')
          break
        case formTypeName[RADIO]:
          alert('청소 시간을 체크해 주세요')
          break
        case formTypeName[TEXT]:
          alert('원하는 청소 스타일을 추가로 입력해 주세요')
          break
        case formTypeName[SELECTBOX]:
          alert('네번째 질문을 선택해 주세요')
          break
      }
      console.log('exception', state.step, obj.id, currentId)
      return
    }
  }
}

export const handleSubmit = (state) => {
  const submitStep = input.items[input.items.length - 1].itemId + 1

  if (state.step === submitStep) {
    setTimeout(() => {
      console.log(JSON.parse(JSON.stringify(state.form)))
      alert('작성한 폼이 제출되었습니다.')
    }, 700)
  }
}

export const answerCheck = (state, formTypeNum, answerCheckIndex) => {
  const cleanTimeTextArr = input.items[answerCheckIndex].options.map(v => v.text)
  const cleanTimeFilter = state.form.items.some(v => cleanTimeTextArr.some(a => a === v.answer))

  if (state.step !== formTypeNum) return false
  return !cleanTimeFilter
}

export const formTypeId = () => {
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

export const formTypeIndex = (typeName) => {
  const findIndex = formTypeId().findIndex(v => v.formType === formTypeName[typeName])
  console.log('formTypeindex', findIndex)
  return findIndex
}

export const formIdDuplication = (state, formTypeName) => {
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

export const stepIncrement = (state) => {
  let currentId = null

  for (const a of state.form.items) currentId = a.id
  for (const obj of formOptionsId()) {
    if (obj.itemId === state.step && obj.id === currentId) {
      if (answerCheck(state, formTypeName[RADIO], formTypeName[RADIO] - 1)) return
      state.step = obj.itemId + 1
      handleSubmit(state)
      return true
    }
    console.log('handleNext', JSON.parse(JSON.stringify(state.form.items)))
  }
}

export const duplicateItems = (state, formTypeName) => {
  const step = formTypeId()[formTypeIndex(formTypeName)].text
  const duplicateItems = step
    .map(v => state.form.items.find(a => v === a.answer ? a : null))
    .filter(v => { if (v) return v })
  const items = state.form.items.map(v => duplicateItems.filter(a => v.answer === a.answer)).flat()
  const deleteDuplicateItems = items.map(v => state.form.items.filter(a => v.answer !== a.answer)).flat()
  state.form.items = deleteDuplicateItems
  console.log('duplicateItems', JSON.parse(JSON.stringify(deleteDuplicateItems)))
}

export const duplicateTextItems = (state) => {
  const findIndex = state.form.items.findIndex(v => !v.id ? v : null)
  state.form.items.splice(findIndex, 1)
  console.log('duplicateTextItems', JSON.parse(JSON.stringify(state.form.items)), findIndex)
}

export const duplicateItemsStep = {
  CHECKBOX: (state) => {
    if (state.step === formTypeName[CHECKBOX]) duplicateItems(state, CHECKBOX)
  },
  RADIO: (state) => {
    if (state.step === formTypeName[RADIO]) duplicateItems(state, RADIO)
  },
  TEXT: (state) => {
    if (state.step === formTypeName[TEXT]) duplicateTextItems(state)
  },
  SELECTBOX: (state) => {
    if (state.step === formTypeName[SELECTBOX]) duplicateItems(state, SELECTBOX)
  }
}

export const duplicateItemsStepAll = (state) => {
  duplicateItemsStep[CHECKBOX](state)
  duplicateItemsStep[RADIO](state)
  duplicateItemsStep[TEXT](state)
  duplicateItemsStep[SELECTBOX](state)
}
