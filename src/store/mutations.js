import { CHECKBOX, RADIO, TEXT, SELECTBOX, formTypeName } from './constant'
import { handleException, formTypeId, formTypeIndex, formIdDuplication, stepIncrement, duplicateItems, duplicateTextItems } from './function'

export const mutations = {
  handleNext (state) {
    if (stepIncrement(state)) return
    else handleException(state)
    console.log('handleNext', JSON.parse(JSON.stringify(state.form.items)))
  },
  handleBack (state) {
    state.step -= 1
    if (state.step === 1) duplicateItems(state, CHECKBOX)
    else if (state.step === 2) duplicateItems(state, RADIO)
    else if (state.step === 3) duplicateTextItems(state, TEXT)
    else if (state.step === 4) duplicateItems(state, SELECTBOX)
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
    const idArr = formTypeId()[formTypeIndex(RADIO)].id
    const firstId = idArr[1]
    const lastId = idArr[idArr.length - 1]

    for (const i of state.form.items.keys()) {
      if (state.form.items[i].id >= firstId && state.form.items[i].id <= lastId) {
        state.form.items.splice(i, 1)
      }
    }

    formIdDuplication(state, formTypeName[RADIO])
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
    const idArr = formTypeId()[formTypeIndex(SELECTBOX)].id
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
