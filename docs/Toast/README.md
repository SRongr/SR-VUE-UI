## Toast


#### demo

<ToastDemo1></ToastDemo1>

``` html
<template>
  <div>
    <Button @click="handleClick('warning')">warning</Button>
    <Button @click="handleClick('success')">success</Button>
    <br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true,
    }
  },
  methods: {
    handleClick (type) {
      this.$Toast[type]({
        content: `这是这是自定义内容${type}`
      })
    }
  }
}
</script>

```
#### Toast instance API
通过直接调用方法使用组件
- this.$Toast.success(config)
- this.$Toast.warning(config)

##### config 属性
| prop | desc | type | default|
| - | -| - | - |
| deration | 展示时间 | Number | 2 |
| content | 内容 | String | - | 
| width | 提示宽度 | Number | 500|
