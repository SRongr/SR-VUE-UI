## Input

#### demo
<InputDemo1></InputDemo1>

```html
<template>
  <div>
    <h5>基础样式</h5>
    <Input></Input>
    <h5>可清空</h5>
    <Input clearable></Input>
    <h5>不可编辑</h5>
    <Input disabled></Input>
    <h5>readonly</h5>
    <Input readonly></Input>
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


```
#### Input Props
| prop | desc | type | default|
| - | -| - | - |
| type | 类型,参考原生Input | String | 'text' |
| value | 内容 | String/Number | '' | 
| size | 输入框大小，可选值`'small', 'large', 'default'`  | String | default|
| placeholder | 提示内容 | String | '' |
| maxlength | 幽灵框, | Boolean | false |
| disabled | 不可编辑 | Boolean | false |
| autocomplete | 记忆功能参考原生 | String | 'off' |
| clearable | 可否清空 | Boolean | false |
| readonly | 只读 | Boolean | false |

#### Input Events
| eventName | desc | 返回值 |
| - | -| - |
| onEnter | 回车 | event |
| onKeydown | 键入 | event |
| onKeypress | 键出 区别可查看[文档](https://blog.csdn.net/czh500/article/details/80329636) | event |
| onKeyup | 键出 | event |
| onFocus | 聚焦 | event |
| onBlur | 失焦 | event |
| onChange | 改变 | event |
| onClear | 清空 | event |