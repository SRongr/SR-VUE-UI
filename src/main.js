import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import SRUI from "./components/index";
// fs.readSync('../dist/sr-ui.js', (datadta)=>{
//   console.log(datadta)
// })
// import SRUI from '../dist/sr-ui'
// import SRUI from '../dist/index'
import SRUI from '../dist/sr-vue-ui.common'

console.log(SRUI)
Vue.config.productionTip = false;
// Vue.use(SRUI);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
