<template>
  <section>
    <h2>{{ title }}</h2>
    <Radio/>
  </section>
</template>

<script>
import input from '../assets/input'
import Radio from './formType/Radio'

export default {
  name: 'Step2',
  components: {
    Radio
  },
  data () {
    return {
      title: input.items[1].title
    }
  }
}
</script>
