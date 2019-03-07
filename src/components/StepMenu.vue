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
    >Next</button>
    <button
      name='restart'
      :disabled="$store.state.step !== 5"
    >Restart</button>
    <div>step: {{ $store.state.step }}</div>
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
    }
  }
}
</script>
