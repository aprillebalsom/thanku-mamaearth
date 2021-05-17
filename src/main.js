import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// importing font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faRainbow } from '@fortawesome/free-solid-svg-icons';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faEtsy } from "@fortawesome/free-brands-svg-icons";

library.add(faRainbow);
library.add(faRecycle);
library.add(faInstagram);
library.add(faFacebookF);
library.add(faPinterest);
library.add(faEtsy);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
