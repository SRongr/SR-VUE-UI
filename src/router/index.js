import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import indexPage from '../views/index.vue'
import Button from '../views/Button.vue'
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
