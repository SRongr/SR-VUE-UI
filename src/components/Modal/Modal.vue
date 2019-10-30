<template>
  <div>
    <div class="kui-modal-mask"></div>
    <div class="kui-modal-wrap">
      <div class="kui-modal" :style="styles">
        <div class="kui-modal-content">
          <div class="kui-modal-body">
            <div class="kui-modal-confirm">
              <div class="kui-modal-head"><slot name="head"></slot></div>
              <div class="kui-modal-body"><slot name="body"></slot></div>
              <div class="kui-modal-footer"><slot name="footer"></slot></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
/**
* @param {number} width modal 宽度
*/
export default {
  name: "Modal",
  props: {
    width: {
      type: Number,
      default: 500
    }
  },
  computed: {
    styles () {
      const style = {}
      if (this.width) {
        style['width'] = `${this.width}px`
      }
      return style
    }
  },
  data () {
    return {
    }
  }
}

</script>
<style lang="less" scoped src="./index.less">
</style>
