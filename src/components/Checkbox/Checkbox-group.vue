<template>
  <div class="kui-checkbox-gourp">
    <slot></slot>
  </div>
</template>
<script>
/**
 * @param {string|number} value Button 绑定的值
 * @param {string} type 是多选 Checkbox 还是多选 Button 注意大小写
 */

import { findComponentsDownward } from "../../mixins/utils/assist";
export default {
  name: "CheckboxGroup",
  data() {
    return {
      childrens: []
    };
  },
  props: {
    value: {
      type: Array
    },
    type: {
      type: String,
      default: "Checkbox",
      validator(value) {
        return value === "Checkbox" || value === "Button";
      }
    }
  },
  computed: {
    data() {
      return {
        childrens: findComponentsDownward(this, "Checkbox")
      };
    }
  },
  mounted() {
    this.updateChild();
  },
  methods: {
    change(label) {
      const have = this.value.indexOf(label);
      if (have >= 0) {
        this.value.splice(have, 1);
      } else {
        this.value.push(label);
      }
      this.$emit("input", this.value);
      this.$emit("onChange", this.value);
      this.updateChild();
    },
    updateChild() {
      this.childrens = findComponentsDownward(this, this.type);
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.model = this.value.indexOf(child.label) >= 0;
        });
      }
    }
  }
};
</script>
<style lang="less" src="./index.less"></style>
