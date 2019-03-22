<template>
  <section>
    <h2>{{ step1Title() }}</h2>
    <Checkbox/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Checkbox from './formType/Checkbox'

export default {
  name: 'Step1',
  components: {
    Checkbox
  },
  methods: {
    ...mapGetters([
      'step1Title'
    ])
  }
}
</script>
