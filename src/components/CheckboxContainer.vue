<template>
  <ul>
    <checkbox
      label="All"
      v-model="checkAll"
    />
    <checkbox
      v-for="item in items"
      :key="item.id"
      :label="item.label"
      :checked="item.checked"
      @change="checked => {onChangeItem(item, checked)}"
    />
  </ul>
</template>

<script>
import Checkbox from './Checkbox'

export default {
  components: {
    Checkbox
  },
  props: {
    items: Array
  },
  methods: {
    onChangeItem (changeItem, checked) {
      const result = this.items.map(item => {
        const updateItem = Object.assign({}, item)
        if (updateItem.id === changeItem.id) {
          updateItem.checked = checked
        }
        return updateItem
      })
      this.$emit('updateItems', result)
    }
  },
  computed: {
    checkAll: {
      get () {
        return this.items.every(item => item.checked)
      },
      set (checked) {
        const result = this.items.map(item => {
          const updateItem = Object.assign({}, item)
          updateItem.checked = checked
          return updateItem
        })
        this.$emit('updateItems', result)
      }
    }
  }
}
</script>
