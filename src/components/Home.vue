<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <Step1 v-if="step() === 1"/>
    <Step2 v-if="step() === 2"/>
    <StepMenu/>
  </div>
</template>

<script>
import Step1 from './Step1'
import Step2 from './Step2'
import StepMenu from './StepMenu'
import input from '../assets/input'

export default {
  name: 'Home',
  components: {
    Step1,
    Step2,
    StepMenu
  },
  data () {
    return {
      title: input.title
    }
  },
  methods: {
    step () {
      return this.$store.state.step
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
