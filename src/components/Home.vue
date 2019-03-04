<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <Step1/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Step1 from './Step1'

export default {
  name: 'Home',
  components: {
    Step1
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement'
  ])
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
