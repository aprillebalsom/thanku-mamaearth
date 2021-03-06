import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; 

// importing marquee animation
// import MarqueeText from "vue-marquee-text-component";

// importing font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faRainbow } from "@fortawesome/free-solid-svg-icons";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faSeedling} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faEtsy } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faRainbow);
library.add(faRecycle);
library.add(faSeedling);
library.add(faInstagram);
library.add(faFacebookF);
library.add(faPinterest);
library.add(faEtsy);
library.add(faHome);
library.add(faArrowLeft);
library.add(faArrowRight);

Vue.component("font-awesome-icon", FontAwesomeIcon);
// Vue.component('marquee-text', MarqueeText)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
