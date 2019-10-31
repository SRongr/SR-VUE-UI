<template>
  <div>
    <CheckboxGroup
      v-model="checkButtonGroupList"
      @onChange="handleCheckChange"
      type="Button"
    >
      <Button
        v-for="(item, index) in tags"
        :key="index"
        :select="item.select"
        :label="item.value"
        >{{ item.label }}</Button
      >
    </CheckboxGroup>

    <Checkbox
      v-model="check"
      :label="checkBox.label"
      @onChange="handleCheckChange"
      >随便写点啥</Checkbox
    >

    <Checkbox-group v-model="checkCheckboxGroupList" @onChange="handleChange">
      <Checkbox
        v-for="(item, index) in tags"
        :label="item.value"
        :key="index"
        >{{ item.label }}</Checkbox
      >
    </Checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: false,
      tags: [
        { label: "水星", value: "1" },
        { label: "金星", value: "2" },
        { label: "地球", value: "3" },
        { label: "火星", value: "4" },
        { label: "木星", value: "5" }
      ],

      selectList: [],
      checkBox: { value: 12, label: "哈哈" },
      selct: "",
      checkButtonGroupList: ["1", "3"],
      checkCheckboxGroupList: ["1", "3"]
    };
  },
  methods: {
    handleCheckChange(e) {
      console.log(e);
      console.log("model", this.checkButtonGroupList);
    },
    handleChange(e) {
      console.log(e);
      console.log("model", this.checkButtonGroupList);
    }
  }
};
</script>

<style lang="less" scoped></style>
