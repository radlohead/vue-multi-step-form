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
          <option
            v-for="item in options"
            v-bind:id="item.id"
            :key="item.id"
          >{{ item.text }}</option>
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
      title: input.items[3].title,
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
