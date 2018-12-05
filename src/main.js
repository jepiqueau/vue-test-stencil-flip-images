import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as flipimages } from "stencil-flipimages/dist/loader";

import Ionic from "@ionic/vue";

Vue.use(Ionic);
Vue.config.ignoredElements = [/jeep-\w*/];

flipimages(window);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
