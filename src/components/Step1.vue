<template>
  <section>
    <label for="1">스팀청소</label>
    <input
      type="checkbox"
      id="1"
      value="스팀청소"
      :checked="checked"
      @input="updateMessage"
    />
    <label for="2">진공청소기로 청소</label>
    <input
      type="checkbox"
      id="2"
      value="진공청소기로 청소"
      :checked="checked"
      @input="updateMessage"
    />
  </section>
</template>

<script>
export default {
  name: 'Step1',
  model: {
    prop: 'checked'
  },
  props: {
    checked: Boolean
  },
  methods: {
    updateMessage (e) {
      this.$store.commit('updateMessage', e.target)
    }
  }
}
</script>
