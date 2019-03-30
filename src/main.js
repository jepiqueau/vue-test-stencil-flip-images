import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as flipimages } from "stencil-flipimages/dist/loader";

import Ionic from "@ionic/vue";

Vue.config.ignoredElements = [/jeep-\w*/];
Vue.config.ignoredElements = [/ion-\w*/];
Vue.use(Ionic);
flipimages(window);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

