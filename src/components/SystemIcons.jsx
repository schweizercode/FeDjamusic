import makeFAIcon from "utils/makeFAIcon";
import {
  clubsFestivals,
  Cooperate,
  party,
} from '../components.';

import {
  faPhone,
  faEnvelope,
  faPlus,
  faBars,
  faTimes,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
  faMediumM,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// import {
//   clubsFestivals,
//   Cooperate,
//   party
// } from './'


export const PhoneIcon = makeFAIcon(faPhone);
export const EnvelopIcon = makeFAIcon(faEnvelope);
export const PlusIcon = makeFAIcon(faPlus);
export const BarsIcon = makeFAIcon(faBars);
export const GithubIcon = makeFAIcon(faGithubAlt);
export const MediumIcon = makeFAIcon(faMediumM);
export const CloseIcon = makeFAIcon(faTimes);
export const LanguageIcon = makeFAIcon(faGlobe);

export const TwitterIcon = makeFAIcon(faTwitter);
export const InstagramIcon = makeFAIcon(faInstagram);
export const FacebookIcon = makeFAIcon(faFacebookF);
export const LinkedinIcon = makeFAIcon(faLinkedinIn);

export * from "config/CustomIcons";
