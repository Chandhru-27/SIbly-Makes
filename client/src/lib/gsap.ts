import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Flip from "gsap/dist/Flip";

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

export { gsap };
