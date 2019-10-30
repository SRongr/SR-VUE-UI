<template>
  <div>
    <Button @click="handleClick('warning')">warning</Button>
    <Button @click="handleClick('success')">success</Button>
    <br>
  </div>
</template>

<script>
import UI from '../main'
export default {
  data () {
    return {
      show: true,
    }
  },
  created () {
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