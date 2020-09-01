import "~/assets/globalStyle.scss";
import Menu from "~/layouts/Menu.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faSteam,
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTwitter, faLinkedin, faFacebook, faGithub, faSteam, faAngleDown);

export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.component("Menu", Menu);
  Vue.component("font-awesome-icon", FontAwesomeIcon);
  appOptions.i18n.setLocaleMessage("pt-br", require("./i18n/ptBR.json"));
  appOptions.i18n.setLocaleMessage("en-eu", require("./i18n/enEU.json"));
}
