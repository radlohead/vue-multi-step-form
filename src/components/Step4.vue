<template>
  <section>
    <h2>{{ title }}</h2>
    <Selectbox/>
  </section>
</template>

<script>
import store from '../store'
import Selectbox from './formType/Selectbox'

export default {
  name: 'Step4',
  components: {
    Selectbox
  },
  data () {
    return {
      title: store.state.input.items[3].title
    }
  }
}
</script>
