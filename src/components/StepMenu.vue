<template>
  <section>
    <button
      name='back'
      :disabled="$store.state.step === 1 || $store.state.step === 5"
      @click="handleBack"
    >Back</button>
    <button
      name='next'
      :disabled="$store.state.step === 5"
      @click="handleNext"
    >{{ (this.$store.state.step !== 4 && this.$store.state.step !== 5) ? 'Next' : 'Submit' }}</button>
    <button
      name='restart'
      :disabled="$store.state.step !== 5"
      @click="handleRestart"
    >Restart</button>
  </section>
</template>

<script>
export default {
  name: 'StepMenu',
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
