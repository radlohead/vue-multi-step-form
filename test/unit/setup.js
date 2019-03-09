import Vue from 'vue'

Vue.config.productionTip = false

export let alertMessage = null;

window.alert = (message) => {
  alertMessage = message
  console.log(message)
}