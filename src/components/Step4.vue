<template>
  <section>
    <h2>{{ title }}</h2>
    <ul>
      <li>
        <select
          name="selectbox"
          selected="selected"
          @change="updateSelect"
        >
          <option disabled selected="selected">질문을 선택해 주세요</option>
          <option id="6">React 좋아하시나요?</option>
          <option id="7">Vue 좋아하시나요?</option>
          <option id="8">React VS Vue 과연 승자는?</option>
        </select>
      </li>
    </ul>
  </section>
</template>

<script>
import input from '../assets/input'

export default {
  name: 'Step4',
  data () {
    return {
      title: input.items[3].title
    }
  },
  methods: {
    updateSelect (e) {
      this.$store.commit('updateSelect', e.target)
    }
  }
}
</script>
