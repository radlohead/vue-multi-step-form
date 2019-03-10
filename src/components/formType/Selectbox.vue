<template>
  <select
    name="selectbox"
    selected="selected"
    @change="updateSelect"
  >
    <option disabled selected="selected">질문을 선택해 주세요</option>
    <option
      v-for="item in options"
      v-bind:id="item.id"
      :key="item.id"
    >{{ item.text }}</option>
  </select>
</template>

<script>
import input from '../../assets/input'

export default {
  name: 'Selectbox',
  data () {
    return {
      options: input.items[3].options
    }
  },
  methods: {
    updateSelect (e) {
      this.$store.commit('updateSelect', e.target)
    }
  }
}
</script>
