import Button from './Button'
// import '../mixins/style/theme.less'
const components = {
  Button
}

const install = Vue => {
  console.log(Object.values(components))
  Object.values(components).forEach((com) => {
    Vue.component(com.name, com)
  })
}

export default install