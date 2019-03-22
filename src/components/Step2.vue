<template>
  <section>
    <h2>{{ step2Title() }}</h2>
    <Radio/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Radio from './formType/Radio'

export default {
  name: 'Step2',
  components: {
    Radio
  },
  methods: {
    ...mapGetters([
      'step2Title'
    ])
  }
}
</script>
