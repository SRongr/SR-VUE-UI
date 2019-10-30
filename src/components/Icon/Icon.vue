<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
  <!-- <span class="iconfont iconRectangleCopy_"></span> -->
</template>
<script>
const prefixCls = 'kui-icon'

/**
* @param {string} type icon 类型
* @param {string|number} size 大小
*/
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: [Number, String]
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: this.type !== ''
        }
      ]
    },
    styles () {
      let style = {}

      if (this.size) {
        // style['font-size'] = `${this.size}px`
        style['width'] = `${this.size}px`
        style['height'] = `${this.size}px`
      }

      return style
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="less" scoped src="./index.less"></style>
