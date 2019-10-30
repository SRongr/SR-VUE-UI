## Checkbox


#### demo 
<CheckboxDemo1></CheckboxDemo1>

``` html
<template>
  <div>
    <CheckboxGroup v-model="checkButtonGroupList" @onChange="handleCheckChange" type="Button">
      <Button v-for="(item, index) in tags" :key="index" :select="item.select" :label="item.value">{{item.label}}</Button>
    </CheckboxGroup>

    <Checkbox v-model="check" :label="checkBox.label" @onChange="handleCheckChange">随便写点啥</Checkbox>

    <Checkbox-group v-model="checkCheckboxGroupList" @onChange="handleChange">
      <Checkbox v-for="(item, index) in tags" :label="item.value" :key="index">{{item.label}}</Checkbox>
    </Checkbox-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      check: false,
      tags: [
        { label: '水星', value: '1' },
        { label: '金星', value: '2' },
        { label: '地球', value: '3' },
        { label: '火星', value: '4' },
        { label: '木星', value: '5' }
      ],

      selectList: [],
      checkBox: {value: 12, label: '哈哈'},
      selct: '',
      checkButtonGroupList: ['1', '3'],
      checkCheckboxGroupList: ['1', '3']
    }
  },
  methods: {
    handleCheckChange (e) {
      console.log(e)
      console.log('model', this.checkButtonGroupList)
    },
    handleChange (e) {
      console.log(e)
      console.log('model', this.checkButtonGroupList)
    }
  }
}
</script>
```

#### Checkbox Props
| prop | desc | type | default|
| - | -| - | - |
| label | 绑定的值 | String/Number | - |
| isTrue | 是否被选中  | Boolean | false |

#### Checkbox Events

| eventName | desc | 返回值 |
| - | -| - |
| onChange | 选中/取消触发 | event |

#### checkboxGroup Props

| prop | desc | type | default|
| - | -| - | - |
| value | 绑定的值 | Array | - |
| type | 多选类型 可选值`Button, Checkbox`  | Checkbox | false |
#### checkboxGroup Events
| eventName | desc | 返回值 |
| - | -| - |
| onChange | 选中/取消触发 | event |