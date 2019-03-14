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
export default {
  name: 'Radio',
  data () {
    return {
      options: this.$store.state.input.items[1].options
    }
  },
  methods: {
    updateRadio (e) {
      this.$store.commit('updateRadio', e.target)
    }
  }
}
</script>
