import notification from "./Notification.vue";
import Vue from "vue";

const NotificationConstructor = Vue.extend(notification);

const instance = new NotificationConstructor({});
instance.vm = instance.$mount();
document.body.appendChild(instance.vm.$el);
instance.vm.show = false;
export default instance;
