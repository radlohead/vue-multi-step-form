<template>
  <section>
    <h2>{{ title }}</h2>
    <ul>
      <li>
        <label for="3">30분</label>
        <input
          type="radio"
          id="3"
          name="time"
          value="30분"
          @input="updateRadio"
        />
      </li>
      <li>
        <label for="4">1시간</label>
        <input
          type="radio"
          id="4"
          name="time"
          value="1시간"
          @input="updateRadio"
        />
      </li>
      <li>
        <label for="5">2시간</label>
        <input
          type="radio"
          id="5"
          name="time"
          value="2시간"
          @input="updateRadio"
        />
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
      title: input.items[1].title
    }
  },
  methods: {
    updateRadio (e) {
      this.$store.commit('updateRadio', e.target)
    }
  }
}
</script>
