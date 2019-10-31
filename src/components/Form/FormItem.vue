<template>
  <div class="sr-form-item">
    <label class="sr-form-item-label" :style="labelStyle"
      ><span v-if="isRequired" class="sr-form-item-label-require">*</span
      ><slot name="label">{{ label }} :</slot></label
    >
    <div class="sr-form-item-content">
      <slot></slot>
      <transition name="fade">
        <span class="item-error" v-if="validateMessage">{{
          validateMessage
        }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
import Emitter from "../../mixins/utils/emitter.js";
export default {
  name: "FormItem",
  mixins: [Emitter],
  data() {
    return {
      isRequired: false,
      validateState: "",
      validateMessage: ""
    };
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    labelWidth: {
      type: Number,
      default: 0
    },
    prop: {
      type: String
    },
    rules: {
      type: [Object, Array]
    }
  },
  inject: ["form"],
  watch: {
    rules() {
      this.setRules();
    }
  },
  computed: {
    labelStyle() {
      const style = {};
      const labelWidth = this.labelWidth
        ? this.labelWidth
        : this.form.labelWidth;
      style.width = labelWidth + "px";
      return style;
    },
    fieldValue() {
      const model = this.form.model;
      if (!model || !this.prop) {
        return;
      }
      let path = this.prop;
      if (path.indexOf(":") !== -1) {
        path = path.replace(/:/, ".");
      }
      return this.getPropByPath(model, path).v;
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch("Form", "on-form-item-add", this);
      Object.defineProperty(this, "initialValue", {
        value: this.fieldValue
      });
      this.setRules();
    }
  },
  methods: {
    setRules() {
      let rules = this.getRules();
      if (rules.length && this.required) {
        return;
      } else if (rules.length) {
        rules.some(rule => {
          this.isRequired = rule.required;
          return rule.required;
        });
      } else if (this.required) {
        this.isRequired = this.required;
      }
      // formItem 中Input blur， change 的时候 触发函数
      this.$off("on-form-blur", this.onFieldBlur);
      this.$off("on-form-change", this.onFieldChange);
      this.$on("on-form-blur", this.onFieldBlur);
      this.$on("on-form-change", this.onFieldChange);
    },
    getRules() {
      let formRules = this.form.rules;
      const selfRules = this.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return [].concat(selfRules || formRules || []);
    },
    onFieldBlur() {
      this.validate("blur");
    },
    onFieldChange() {
      this.validate("change");
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      );
    },
    validate(trigger, callback = function() {}) {
      // debugger
      let rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) {
        if (!this.required) {
          callback();
          return true;
        } else {
          rules = [{ required: true }];
        }
      }

      this.validateState = "validating";

      let descriptor = {};
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);
      let model = {};

      model[this.prop] = this.fieldValue;
      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? "success" : "error";
        this.validateMessage = errors ? errors[0].message : "";
        callback(this.validateMessage);
      });
    },
    getPropByPath(obj, path) {
      let tempObj = obj;
      path = path.replace(/\[(\w+)\]/g, ".$1");
      path = path.replace(/^\./, "");
      let keyArr = path.split(".");
      let i = 0;
      for (let len = keyArr.length; i < len - 1; ++i) {
        let key = keyArr[i];
        if (key in tempObj) {
          tempObj = tempObj[key];
        } else {
          throw new Error("please add prop");
        }
      }
      return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj[keyArr[i]]
      };
    }
  }
};
</script>

<style lang="less" src="./index.less"></style>
