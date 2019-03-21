export default {
  updateCheckbox ({ commit }, state) {
    commit('updateCheckbox', state)
  },
  updateRadio ({ commit }, state) {
    commit('updateRadio', state)
  },
  updateText ({ commit }, state) {
    commit('updateText', state)
  },
  updateSelect ({ commit }, state) {
    commit('updateSelect', state)
  },
  handleNext ({ commit }) {
    commit('handleNext')
  },
  handleBack ({ commit }) {
    commit('handleBack')
  },
  handleRestart ({ commit }) {
    commit('handleRestart')
  }
}
