import { boot } from 'quasar/wrappers'
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
const timeline = gsap.timeline({
  defaults:{
     duration: 2,
      // ease: "elastic"
  }

})

// export default ({ app, router, store }) => {
// }

export { gsap , timeline}
