<template>
  <section>
    <h2>{{ title }}</h2>
    <input
      type="text"
      @input="updateText"
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
    updateText (e) {
      this.$store.commit('updateText', e.target)
    }
  }
}
</script>
