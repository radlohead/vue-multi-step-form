import { RADIO, SELECTBOX, FORM_TYPE_NAME } from './actions'
import {
  handleException,
  formTypeId,
  formTypeIndex,
  formIdDuplication,
  stepIncrement,
  currentDuplicateItemsRemove,
  duplicateItemsStepAll
} from './functions'

export default {
  handleNext (state) {
    if (stepIncrement(state)) return null
    else handleException(state)
  },
  handleBack (state) {
    state.step -= 1
    currentDuplicateItemsRemove(state)
    duplicateItemsStepAll(state)
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

    formIdDuplication(state, FORM_TYPE_NAME[RADIO])

    state.form.items.push({
      id: Number(items.id),
      answer: items.value
    })
  },
  updateText (state, items) {
    const deleteBlankValue = items.value.replace(/\s/g, '')
    let count = 0

    if (!deleteBlankValue.length) items.value = deleteBlankValue
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
  }
}
