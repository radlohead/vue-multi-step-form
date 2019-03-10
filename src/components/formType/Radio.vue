<template>
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
</template>

<script>
import input from '../../assets/input'

export default {
  name: 'Radio',
  data () {
    return {
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
