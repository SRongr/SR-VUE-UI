<template>
  <div class="kui-checkbox">
    <input class="kui-checkbox-input"  type="checkbox" @change="handleChange($event)" v-model="model"><slot>{{label}}</slot>
  </div>
</template>
<script>


/**
* @param {string} label 文字
* @param {boolean} isTrue 是否被选中
*/
import { findComponentUpward } from '../../mixins/utils/assist'

// const prefixCls = 'kui-btn'
export default {
  name: 'Checkbox',
  data () {
    return {
      model: this.isTrue
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    isTrue: {
      type: [Boolean],
      default: false
    }
  },
  methods: {
    handleChange () {
      const parent = findComponentUpward(this, 'CheckboxGroup')
      this.$emit('onChange', this.model)
      if (parent) {
        parent.change(this.label)
      }
    }
  }
}
</script>