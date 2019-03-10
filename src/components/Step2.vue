<template>
  <section>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="item in options" :key="item.id">
        <input
          type="radio"
          name="time"
          v-bind:id="item.id"
          v-bind:value="item.text"
          @input="updateRadio"
        />
        <label v-bind:for="item.id">{{ item.text }}</label>
      </li>
    </ul>
  </section>
</template>

<script>
import input from '../assets/input'

export default {
  name: 'Step2',
  data () {
    return {
      title: input.items[1].title,
      options: input.items[1].options
    }
  },
  methods: {
    updateRadio (e) {
      this.$store.commit('updateRadio', e.target)
    }
  }
}
</script>
