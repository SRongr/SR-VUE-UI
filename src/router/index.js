import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import indexPage from '../views/index.vue'
import Button from '../views/Button.vue'
import Checkbox from '../views/Checkbox.vue'
import Input from "../views/Input.vue"
import Icon from '../views/Icon.vue'
import Toast from '../views/Toast.vue'
import Modal from "../views/Modal.vue";
import Form from '../views/Form.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: indexPage
  },
  {
    path: "/button",
    name: "button",
    component: Button
  },
  {
    path: "/checkbox",
    name: "checkbox",
    component: Checkbox
  },
  {
    path: "/input",
    name: "input",
    component: Input
  },
  {
    path: "/icon",
    name: "icon",
    component: Icon
  },
  {
    path: "/toast",
    name: "toast",
    component: Toast
  },
  {
    path: "/modal",
    name: "modal",
    component: Modal
  },
  {
    path: "/form",
    name: "form",
    component: Form
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
