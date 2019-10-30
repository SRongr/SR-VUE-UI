import Toast from './Toast2.vue'
import noticeWrap from '../notification/index'
import Vue from 'vue'
let seed = 1
const ToastConstructor = Vue.extend(Toast)

const show = (options, type) => {
  options = options || {}
  options = Object.assign(options, {
    type
  })
  const instance = new ToastConstructor({
    data: options
  })
  instance.id = 'toast_' + seed++
  instance.vm = instance.$mount()
  noticeWrap.vm.$el.appendChild(instance.vm.$el)
  instance.vm.show = true
}
const toastInstance = {
  name: 'Toast',
  success (options) {
    return show(options, 'success')
  },
  warning (options) {
    return show(options, 'warning')
  }
}

export default toastInstance
