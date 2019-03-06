<template>
  <section>
    <button name='back'>Back</button>
    <button name='next' @click="handleNext">Next</button>
    <button name='restart'>Restart</button>
    <div>step: {{ $store.state.step }}</div>
  </section>
</template>

<script>
export default {
  name: 'StepMenu',
  methods: {
    handleNext (e) {
      this.$store.commit('handleNext')
    }
  }
}
</script>
