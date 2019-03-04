<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Step1/>
  </div>
</template>

<script>
import Step1 from './Step1'

export default {
  name: 'Home',
  components: {
    Step1
  },
  data () {
    return {
      msg: 'homework'
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
