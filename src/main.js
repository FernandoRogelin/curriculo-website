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

export default function(Vue, { router, head, isClient }) {
  Vue.component("Menu", Menu);
  Vue.component("font-awesome-icon", FontAwesomeIcon);
}
