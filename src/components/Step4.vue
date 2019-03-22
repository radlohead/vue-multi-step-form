<template>
  <section>
    <h2>{{ step4Title() }}</h2>
    <Selectbox/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Selectbox from './formType/Selectbox'

export default {
  name: 'Step4',
  components: {
    Selectbox
  },
  methods: {
    ...mapGetters([
      'step4Title'
    ])
  }
}
</script>
