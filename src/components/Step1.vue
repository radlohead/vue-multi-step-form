<template>
  <section>
    <h2>{{ title }}</h2>
    <Checkbox/>
  </section>
</template>

<script>
import Checkbox from './formType/Checkbox'

export default {
  name: 'Step1',
  components: {
    Checkbox
  },
  data () {
    return {
      title: this.$store.state.input.items[0].title
    }
  }
}
</script>
