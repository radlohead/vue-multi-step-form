export default {
  firstStep (state) {
    return state.input.items[0].itemId
  },
  lastStep (state) {
    return state.input.items[state.input.items.length - 1].itemId + 1
  },
  secondToLastStep (state) {
    return state.input.items[state.input.items.length - 1].itemId
  },
  step (state) {
    return state.step
  }
}
