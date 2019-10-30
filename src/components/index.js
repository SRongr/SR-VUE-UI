import Button from './Button/index'
import Icon from './Icon/index'
import Checkbox from './Checkbox/index'
import Input from './Input/index'
import Toast from './Toast/index'
import Modal from './Modal/index'
import Form from './Form/index'
const components = {
  Button,
  Icon,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  Input,
  Toast,
  Modal,
  Form,
  FormItem: Form.Item
}

const install = Vue => {
  console.log(Object.values(components))
  Object.values(components).forEach((com) => {
    Vue.component(com.name, com)
  })
  Vue.prototype.$Toast = Toast
}

export default install
