<template>
  <input
    type="text"
    @input="updateText"
  />
</template>

<script>
export default {
  name: 'InputText',
  methods: {
    updateText (e) {
      this.$store.dispatch('updateText', e.target)
    }
  }
}
</script>
