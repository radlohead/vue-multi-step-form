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
    {{ lastItemIndex }}
  </section>
</template>

<style>
  @import '../css/components/StepMenu.css';
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StepMenu',
  computed: {
    ...mapGetters([
      'firstItemId',
      'lastStep',
      'secondToLastStep'
    ])
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
