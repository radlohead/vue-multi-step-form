<template>
  <section>
    <h2>{{ title }}</h2>
    <Checkbox/>
  </section>
</template>

<script>
import input from '../assets/input'
import Checkbox from './formType/Checkbox'

export default {
  name: 'Step1',
  components: {
    Checkbox
  },
  data () {
    return {
      title: input.items[0].title
    }
  }
}
</script>
