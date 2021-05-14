import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// importing font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faEtsy } from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram);
library.add(faFacebookF);
library.add(faPinterest);
library.add(faEtsy);


// library.add(faCoffee)

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
