<template>
  <div class="kui-input-wrap">
    <slot name="suffix"></slot>
    <!-- <Icon v-if="clearable" class="kui-input-icon" type="close" /> -->
    <div class="kui-input-icon" v-if="clearable">
      <Icon type="close" @click="handleClear"/>
    </div>
    <input
      :autocomplete="autocomplete"
      ref="input"
      :class="inputClasses"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :maxlength="maxlength"
      :value="currentValue"
      :type="type"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange"
      @keyup.enter="handleEnter"
      @keyup="handleKeyup"
      @keypress="handleKeypress"
      @keydown="handleKeydown"
    />
   <slot name="prefix"></slot>
  </div>
</template>
<script>
import { oneOf } from '../../mixins/utils/assist'
import Emitter from '../../mixins/utils/emitter.js'
const prefixCls = 'kui-input'
export default {
  name: 'Input',
  mixins: [ Emitter ],
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
      currentValue: this.value,
      prefixCls: prefixCls,
      slotReady: false,
      showPrefix: false,
      showSuffix: false
    }
  },
  watch: {
    value (val) {
      this.setCurrentValue(val)
    }
  },
  props: {
    type: {
      validator (value) {
        return oneOf(value, [
          'text',
          'textarea',
          'password',
          'url',
          'email',
          'date',
          'number',
          'tel'
        ])
      },
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default () {
        return !this.$IVIEW || this.$IVIEW.size === ''
          ? 'default'
          : this.$IVIEW.size
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputClasses () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ]
    }
  },
  methods: {
    handleEnter (event) {
      this.$emit('onEnter', event)
    },
    handleKeydown (event) {
      this.$emit('onKeydown', event)
    },
    handleKeypress (event) {
      this.$emit('onKeypress', event)
    },
    handleKeyup (event) {
      this.$emit('onKeyup', event)
    },
    handleFocus (event) {
      this.$emit('onFocus', event)
    },
    handleBlur (event) {
      this.$emit('onBlur', event)
      this.dispatch('FormItem', 'on-form-blur', this.value)
    },
    handleInput (event) {
      let value = event.target.value
      this.$emit('input', value)
      this.dispatch('FormItem', 'on-form-change', event)
      this.$emit('onChange', value)
    },
    handleChange (event) {
      this.$emit('onChange', event)
    },
    handleClear () {
      const e = { target: { value: '' } }
      this.$emit('input', '')
      this.setCurrentValue('')
      this.$emit('onChange', e)
      this.$emit('onClear')
    },
    setCurrentValue (value) {
      if (value === this.currentValue) {
        return
      }
      this.currentValue = value
    }
  }
}
</script>
<style lang="less" scoped src="./index.less">

</style>
