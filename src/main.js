import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import components from './components/index'
import './mixins/style/index.less'
Vue.config.productionTip = false;

Vue.use(components)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
