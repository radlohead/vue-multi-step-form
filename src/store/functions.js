import input from '../assets/input'
import {
  CHECKBOX,
  RADIO,
  SELECTBOX,
  FORM_TYPE_NAME,
  STEP1,
  STEP2,
  STEP3,
  STEP4,
  FORM_ITEM_ID,
  stepExceptionAlertMessage
} from './constants'

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
  optionsNotId(optionsId, optionsBlankItemId())
  return optionsId
}

export const handleException = (state) => {
  for (const obj of formOptionsId()) {
    if (obj.itemId === state.step) {
      stepExceptionAlertAll(state.step)
      return
    }
  }
}

export const handleSubmit = (state) => {
  const submitStep = input.items.length + 1

  if (state.step === submitStep) {
    setTimeout(() => {
      console.log(JSON.parse(JSON.stringify(state.form.items)))
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
    for (const option of Array.from(obj.options)) {
      optionsId.push(option.id)
      optionsText.push(option.text)
    }
    result.push({
      formType: obj.formType,
      id: optionsId,
      text: optionsText
    })
  }
  return result
}

export const formTypeIndex = (typeName) => {
  const findIndex = formTypeId().findIndex(v => v.formType === FORM_TYPE_NAME[typeName])
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

  for (const obj of state.form.items) currentId = obj.id
  for (const obj of formOptionsId()) {
    if (obj.itemId === state.step && obj.id === currentId) {
      if (answerCheck(state, FORM_ITEM_ID[STEP2], FORM_ITEM_ID[STEP1])) return
      state.step = obj.itemId + 1
      handleSubmit(state)
      return true
    }
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
}

export const duplicateTextItems = (state) => {
  const findIndex = state.form.items.findIndex(v => !v.id ? v : null)
  state.form.items.splice(findIndex, 1)
}

export const duplicateItemsStep = {
  STEP1: (state) => {
    if (state.step === FORM_ITEM_ID[STEP1]) duplicateItems(state, CHECKBOX)
  },
  STEP2: (state) => {
    if (state.step === FORM_ITEM_ID[STEP2]) duplicateItems(state, RADIO)
  },
  STEP3: (state) => {
    if (state.step === FORM_ITEM_ID[STEP3]) duplicateTextItems(state)
  },
  STEP4: (state) => {
    if (state.step === FORM_ITEM_ID[STEP4]) duplicateItems(state, SELECTBOX)
  }
}

export const duplicateItemsStepAll = (state) => {
  duplicateItemsStep[STEP1](state)
  duplicateItemsStep[STEP2](state)
  duplicateItemsStep[STEP3](state)
  duplicateItemsStep[STEP4](state)
}

export const stepExceptionAlert = {
  STEP1: (step) => {
    if (step === FORM_ITEM_ID[STEP1]) alert(stepExceptionAlertMessage.CHECKBOX)
  },
  STEP2: (step) => {
    if (step === FORM_ITEM_ID[STEP2]) alert(stepExceptionAlertMessage.RADIO)
  },
  STEP3: (step) => {
    if (step === FORM_ITEM_ID[STEP3]) alert(stepExceptionAlertMessage.TEXT)
  },
  STEP4: (step) => {
    if (step === FORM_ITEM_ID[STEP4]) alert(stepExceptionAlertMessage.SELECTBOX)
  }
}

export const stepExceptionAlertAll = (step) => {
  stepExceptionAlert[STEP1](step)
  stepExceptionAlert[STEP2](step)
  stepExceptionAlert[STEP3](step)
  stepExceptionAlert[STEP4](step)
}

export const optionsBlankItemId = () => {
  let optionsBlankItemId = []
  for (const obj of Array.from(input.items)) {
    if (!obj.options.length) optionsBlankItemId.push(obj.itemId)
  }
  return optionsBlankItemId
}
