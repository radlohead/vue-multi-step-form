<template>
  <section>
    <h2>{{ title }}</h2>
    <ul>
      <li>
        <input
          type="checkbox"
          id="1"
          value="스팀청소"
          @input="updateCheckbox"
        />
        <label for="1">스팀청소</label>
      </li>
      <li>
        <input
          type="checkbox"
          id="2"
          value="진공청소기로 청소"
          @input="updateCheckbox"
        />
        <label for="2">진공청소기로 청소</label>
      </li>
      <li>
        <input
          type="checkbox"
          id="3"
          value="쓰레기 비우기"
          @input="updateCheckbox"
        />
        <label for="3">쓰레기 비우기</label>
      </li>
    </ul>
  </section>
</template>

<script>
import input from '../assets/input'

export default {
  name: 'Step1',
  data () {
    return {
      title: input.items[0].title
    }
  },
  methods: {
    updateCheckbox (e) {
      this.$store.commit('updateCheckbox', e.target)
    }
  }
}
</script>
