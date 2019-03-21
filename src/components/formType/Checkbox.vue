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
export default {
  name: 'Checkbox',
  data () {
    return {
      options: this.$store.state.input.items[0].options
    }
  },
  methods: {
    updateCheckbox (e) {
      this.$store.dispatch('updateCheckbox', e.target)
    }
  }
}
</script>
