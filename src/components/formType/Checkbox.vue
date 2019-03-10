<template>
  <ul>
    <li v-for="item in options" :key="item.id">
      <input
        type="checkbox"
        v-bind:id="item.id"
        v-bind:value="item.text"
        @input="updateCheckbox"
      />
      <label v-bind:for="item.id">{{ item.text }}</label>
    </li>
  </ul>
</template>

<script>
import input from '../../assets/input'

export default {
  name: 'Checkbox',
  data () {
    return {
      options: input.items[0].options
    }
  },
  methods: {
    updateCheckbox (e) {
      this.$store.commit('updateCheckbox', e.target)
    }
  }
}
</script>
