<template>
  <section>
    <h2>{{ title }}</h2>
    <input
      type="text"
      @input="updateCleanStyleText"
    />
  </section>
</template>

<script>
import input from '../assets/input'

export default {
  name: 'Step3',
  data () {
    return {
      title: input.items[2].title
    }
  },
  methods: {
    updateCleanStyleText (e) {
      this.$store.commit('updateCleanStyleText', e.target)
    }
  }
}
</script>
