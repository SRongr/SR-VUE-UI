<template>
  <form :autocomplete="autocomplete">
    <slot></slot>
  </form>
</template>

<script>
import { oneOf } from "../../mixins/utils/assist";
export default {
  name: "Form",
  data() {
    return {
      fields: []
    };
  },
  props: {
    model: {
      type: Object
    },
    autocomplete: {
      type: String,
      alidator(value) {
        return oneOf(value, ["on", "off"]);
      },
      default: "off"
    },
    rules: {
      type: Object,
      default() {
        return {};
      }
    },
    labelWidth: {
      type: Number,
      default: 60
    }
  },
  provide() {
    return { form: this };
  },
  created() {
    this.$on("on-form-item-add", field => {
      if (field) this.fields.push(field);
      return false;
    });
  },
  methods: {
    validate(callback) {
      return new Promise(resolve => {
        let valid = true;
        let count = 0;
        this.fields.forEach(field => {
          field.validate("", errors => {
            if (errors) {
              valid = false;
            }
            if (++count === this.fields.length) {
              // all finish
              resolve(valid);
              if (typeof callback === "function") {
                callback(valid);
              }
            }
          });
        });
      });
    }
  }
};
</script>
<style lang="less" src="./index.less"></style>
