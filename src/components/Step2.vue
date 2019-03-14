<template>
  <section>
    <h2>{{ title }}</h2>
    <Radio/>
  </section>
</template>

<script>
import Radio from './formType/Radio'

export default {
  name: 'Step2',
  components: {
    Radio
  },
  data () {
    return {
      title: this.$store.state.input.items[1].title
    }
  }
}
</script>
