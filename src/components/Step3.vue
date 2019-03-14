<template>
  <section>
    <h2>{{ title }}</h2>
    <InputText/>
  </section>
</template>

<script>
import InputText from './formType/Text'

export default {
  name: 'Step3',
  components: {
    InputText
  },
  data () {
    return {
      title: this.$store.state.input.items[2].title
    }
  }
}
</script>
