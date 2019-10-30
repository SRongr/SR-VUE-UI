<template>
  <div>
    <h5>基础样式</h5>
    <Input></Input>
    <h5>可清空</h5>
    <Input clearable></Input>
    <h5>不可编辑</h5>
    <Input disabled></Input>
    <h5>readonly</h5>
    <Input readonly ></Input>
    <br>

    <Input 
      clearable 
      v-model="model" 
      @onClear="handleClear" 
      @onFocus="handleFocues" 
      style="width: 300px"
      placeholder="控制台查看事件" 
      @onChange="handleChange"/>
    
  </div>
</template>

<script>
import UI from '../main'
export default {
  data () {
    return {
      model: ''
    }
  },
  methods: {
    handleFocues (e) {
      console.log('focus', e)
      console.log(this.model)
    },
    handleChange (e) {
      console.log('change', e)
      console.log(this.model)
    },
    handleInput (e) {
      console.log('input', e)
      console.log(this.model)
    },
    handleClear (e) {
      console.log('clear', e)
      console.log(this.model)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
