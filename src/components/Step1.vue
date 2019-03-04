<template>
  <checkbox-container
      :items="cleanStyleList"
      @updateItems="updateCleanStyleList"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CheckboxContainer from './CheckboxContainer'

export default {
  name: 'Step1',
  components: {
    CheckboxContainer
  },
  computed: {
    ...mapState([
      'cleanStyleList'
    ])
  },
  methods: {
    ...mapActions([
      'updateCleanStyleList'
    ])
  }
}
</script>
