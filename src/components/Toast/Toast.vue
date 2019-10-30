<template>
    <div class="kui-toast-wrap">
      <div class="kui-toast" :style="styles">
        <div :class="classes">
          <div class="kui-toast-body">
            <div class="kui-toast-body-icon">
              <Icon :type="type" size="40"/>
            </div>
            <div class="kui-toast-body-text" v-html="content"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
/**
* @param {string} type 类型  success | warning
* @param {number} duration 展示时间
* @param {number} content 内容
* @param {number} width 宽度
*/
const prefixCls = 'kui-toast'
export default {
  props: {
  },
  data () {
    return {
      show: false,
      type: '',
      width: 272,
      duration: 2,
      content: ''
    }
  },
  computed: {
    styles () {
      const style = {}
      if (this.width) {
        style['width'] = `${this.width}px`
      }
      return style
    },
    classes () {
      return [
        `${prefixCls}-content`,
        {
          [`${prefixCls}-content-show`]: this.show,
          [`${prefixCls}-content-hidden`]: !this.show
        }
      ]
    }
  },
  created () {
    setTimeout(() => {
      this.close()
    }, this.duration * 1000)
  },
  methods: {
    close () {
      this.show = false
    }
  }
}
</script>
<style lang="less" scoped src="./index.less"></style>
