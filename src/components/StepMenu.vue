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

<style>
  @import '../css/components/StepMenu.css';
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'StepMenu',
  computed: {
    ...mapGetters([
      'firstStep',
      'lastStep',
      'secondToLastStep'
    ])
  },
  methods: {
    ...mapActions([
      'handleNext',
      'handleBack',
      'handleRestart'
    ])
  }
}
</script>
