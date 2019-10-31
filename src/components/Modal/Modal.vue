<template>
  <div>
    <div class="kui-modal-mask" v-if="value"></div>
    <div class="kui-modal-wrap" v-if="value">
      <div class="kui-modal" :style="styles">
        <div class="kui-modal-content">
          <div class="kui-modal-body">
            <div class="kui-modal-confirm">
              <div class="kui-modal-head">
                <slot name="head">{{ title }}</slot>
              </div>
              <div class="kui-modal-body">
                <slot name="body">{{ content }}</slot>
              </div>
              <div class="kui-modal-footer">
                <slot name="footer">
                  <Button type="primary" @click="handleMaskClick">确定</Button>
                </slot>
              </div>
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
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 500
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  },
  computed: {
    styles() {
      const style = {};
      if (this.width) {
        style["width"] = `${this.width}px`;
      }
      return style;
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleMaskClick() {
      this.$emit("input", false);
    }
  }
};
</script>
<style lang="less" scoped src="./index.less"></style>
