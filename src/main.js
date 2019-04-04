import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as flipimages } from "stencil-flipimages/dist/loader";

import Ionic from "@ionic/vue";
import "@ionic/core/css/ionic.bundle.css";

Vue.config.ignoredElements = [/jeep-\w*/];
Vue.use(Ionic);
flipimages(window);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
