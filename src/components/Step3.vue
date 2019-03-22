<template>
  <section>
    <h2>{{ step3Title() }}</h2>
    <InputText/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import InputText from './formType/Text'

export default {
  name: 'Step3',
  components: {
    InputText
  },
  methods: {
    ...mapGetters([
      'step3Title'
    ])
  }
}
</script>
