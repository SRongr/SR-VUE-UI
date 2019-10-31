<template>
  <div>
    <Button @click="handleClick('warning')">warning</Button>
    <Button @click="handleClick('success')">success</Button>
    <br />
    <br /><br /><br />
    <br />
    <br /><br /><br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      index: 1
    };
  },
  created() {},
  methods: {
    handleClick(type) {
      this.$Toast[type]({
        content: `这是${type}`
      });
    }
  }
};
</script>
<style lang="less" scoped>
div {
  text-align: left;
}
</style>
