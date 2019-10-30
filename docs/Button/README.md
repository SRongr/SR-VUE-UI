## Button



#### demo

<ButtonDemo1></ButtonDemo1>





``` html 
<template>
  <div>
    <Button type="default" to="/examples/toast">嘿嘿</Button>
    <Button :select="true" type="default" to="/examples/toast">嘿嘿</Button>
    <Button disabled  type="dashed">嘿嘿</Button>
    <Button type="text">嘿嘿</Button>
    <Button type="primary" loading>嘿嘿</Button>
    <Button type="info">嘿嘿</Button>
    <Button size="small" type="success">嘿嘿</Button>
    <Button type="warning">嘿嘿</Button>
    <Button type="error">嘿嘿</Button>
    <Button type="primary" ghost>嘿嘿</Button>
    <Button square type="primary">嘿嘿</Button>
    <Button disabled type="primary">嘿嘿</Button>
    <Button type="default" ghost>嘿嘿</Button>
  </div>
</template>
```

| prop | desc | type | default|
| - | -| - | - |
| type | 类型,可选值 `default,primary,dashed,text,info,success,warning,error` | String | default |
| size | 大小,可选值 `'small', 'large', 'default'` | String | default | 
| loading | 加载状态  | Boolean | false|
| type | 类型,可选类型 `default,primary,dashed,text,info,success,warning,error` | String | default |
| ghost | 幽灵框, | Boolean | false |
| target | 作为a标签的时候跳转类型 可选类型 `_blank,_parent,_self,_top` | String | _self|
| ghost | 不可点击 | Boolean | false |
| selet | 是否设置为被选中状态 | Boolean | false |
| square | 方形 | Boolean | false |
