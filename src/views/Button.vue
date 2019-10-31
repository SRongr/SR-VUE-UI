<template>
  <!-- <Button>231</Button> -->
  <div>
    <Button type="default" to="/examples/toast">嘿嘿</Button>
    <Button :select="true" type="default" to="/examples/toast">嘿嘿</Button>
    <!-- <Button size="large" type="primary" icon="warning" @click="handleClick">嘿嘿</Button> -->
    <Button disabled type="dashed">嘿嘿</Button>
    <Button type="text">嘿嘿</Button>
    <Button type="primary" loading>嘿嘿</Button>
    <Button type="info">嘿嘿</Button>
    <Button size="small" type="success">嘿嘿</Button>
    <Button type="warning">嘿嘿</Button>
    <Button type="error">嘿嘿</Button>
    <Button type="primary" ghost>嘿嘿</Button>
    <Button type="primary">嘿嘿</Button>
    <Button disabled type="primary">嘿嘿</Button>
    <Button type="default" ghost>嘿嘿232</Button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(e) {
      console.log(e);
    }
  }
};
</script>
