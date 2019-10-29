<template>
  <component
    :is="tagName"
    :class="classes"
    :disabled="disabled"
    @click="handleClickLink"
    :target="target"
  >
    <Icon v-if="icon" :type="icon" />
    <span><slot>{{label}}</slot></span>
  </component>
</template>
<script>

/**
* @param {string} type Button 类型
* @param {string|number} size 大小
* @param {boolean} isLoading 加载状态
* @param {string} to 跳转路由
* @param {boolean} ghost 幽灵框
* @param {string} target 默认 '_self'
* @param {bolean} disabled 置灰
* @param {bolean} select 被选中状态
* @param {bolean} square 方形
*/
import { oneOf, findComponentUpward } from '../../mixins/utils/assist'
import mixinsLink from '../../mixins/utils/link'

const prefixCls = 'kui-btn'

export default {
  name: 'Button',
  mixins: [ mixinsLink ],
  // components: { Icon },
  props: {
    type: {
      validator (value) {
        return oneOf(value, [
          'default',
          'primary',
          'dashed',
          'text',
          'info',
          'success',
          'warning',
          'error'
        ])
      },
      default: 'default'
    },
    target: {
      validator (value) {
        return oneOf(value, [
          '_blank',
          '_parent',
          '_self',
          '_top'
        ])
      },
      default: '_self'
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    loading: Boolean,
    disabled: Boolean,
    icon: {
      type: String,
      default: ''
    },
    ghost: {
      type: Boolean,
      default: false
    },
    select: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      model: this.select
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-${this.size}`]: this.size !== 'default',
          [`${prefixCls}-loading`]: this.loading != null && this.loading,
          [`${prefixCls}-ghost`]: this.ghost,
          [`${prefixCls}-current`]: this.model,
          [`${prefixCls}-square`]: this.square
        }
      ]
    },
    tagName () {
      return this.to ? 'a' : 'button'
    }
    // model () {
    //   return this.select
    // }
  },
  methods: {
    handleClickLink (event) {
      if (this.disabled) {
        return
      }
      let router = this.$router
      let current = this.$route
      if (this.to) {
        if (this.target === '_blank') {
          window.open(this.to)
        } else {
          const to = router.resolve(this.to, current).href
          window.location.href = to
        }
      }
      this.$emit('click', event)
      const parent = findComponentUpward(this, 'CheckboxGroup')
      if (parent) {
        parent.change(this.label)
      }
    }
  }
}
</script>
<style lang="less" scoped src="./index.less"></style>
