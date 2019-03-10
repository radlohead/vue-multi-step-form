<template>
  <section>
    <h2>{{ title }}</h2>
    <Selectbox/>
  </section>
</template>

<script>
import input from '../assets/input'
import Selectbox from './formType/Selectbox'

export default {
  name: 'Step4',
  components: {
    Selectbox
  },
  data () {
    return {
      title: input.items[3].title
    }
  }
}
</script>
