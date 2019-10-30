# sr-vue-ui

### 安装 
```
npm install sr-vue-ui --save
```
### 在 main.js 中引入
```
import SRUI from 'sr-vue-ui'
import 'sr-vue-ui/lib/sr-vue-ui.css'

Vue.use(SRUI)
```
### 使用
```html
<template>
  <div>
    <Button type="primary">SRUI</Button>
  </div>
</template>
```

### Notice!!!
- 文档目前只能启项目查看，具体看下面要求

## 查看项目
#### 安装依赖
```
npm install
```

### 启动
```
npm run serve
```

### 构建
```
npm run build
```

### 查看文档
- 文档采用 vuepress 搭建
```
npm run docs:dev
// 默认localhost: 8080端口，如果被占用则自动向上累加
```
---
### 待完善