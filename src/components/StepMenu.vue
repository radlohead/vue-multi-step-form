<template>
  <section class="step__menu">
    <button
      name='back'
      :disabled="$store.state.step === firstStep || $store.state.step === lastStep"
      @click="handleBack"
    >Back</button>
    <button
      name='next'
      :disabled="$store.state.step === lastStep"
      @click="handleNext"
    >{{ (this.$store.state.step !== secondToLastStep && this.$store.state.step !== lastStep) ? 'Next' : 'Submit' }}</button>
    <button
      name='restart'
      :disabled="$store.state.step !== lastStep"
      @click="handleRestart"
    >Restart</button>
  </section>
</template>

<script>
import input from '../assets/input'
import '../css/components/StepMenu.css'

export default {
  name: 'StepMenu',
  data () {
    return {
      firstStep: input.items[0].itemId,
      lastStep: input.items[input.items.length - 1].itemId + 1,
      secondToLastStep: input.items[input.items.length - 1].itemId
    }
  },
  methods: {
    handleNext (e) {
      this.$store.commit('handleNext')
    },
    handleBack (e) {
      this.$store.commit('handleBack')
    },
    handleRestart (e) {
      this.$store.commit('handleRestart')
    }
  }
}
</script>
