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
  },
  homeTitle (state) {
    return state.input.title
  },
  step1Title (state) {
    return state.input.items[0].title
  },
  step2Title (state) {
    return state.input.items[1].title
  },
  step3Title (state) {
    return state.input.items[2].title
  },
  step4Title (state) {
    return state.input.items[3].title
  }
}
