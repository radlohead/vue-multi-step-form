<template>
  <div class="home">
    <h1 class="home__title">{{ homeTitle() }}</h1>
    <section class="main">
      <Step1 v-if="step() === 1"/>
      <Step2 v-if="step() === 2"/>
      <Step3 v-if="step() === 3"/>
      <Step4 v-if="step() === 4"/>
      <Complete v-if="step() === 5"/>
    </section>
    <StepMenu/>
  </div>
</template>

<style>
  @import '../css/components/Home.css';
</style>

<script>
import { mapGetters } from 'vuex'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Complete from './Complete'
import StepMenu from './StepMenu'

export default {
  name: 'Home',
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Complete,
    StepMenu
  },
  methods: {
    ...mapGetters([
      'homeTitle',
      'step'
    ])
  }
}
</script>
