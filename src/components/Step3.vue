<template>
  <section>
    <h2>{{ title }}</h2>
    <InputText/>
  </section>
</template>

<script>
import input from '../assets/input'
import InputText from './formType/Text'

export default {
  name: 'Step3',
  components: {
    InputText
  },
  data () {
    return {
      title: input.items[2].title
    }
  }
}
</script>
