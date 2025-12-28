import Flip from "gsap/dist/Flip";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SharedLogoAnimator() {
  useGSAP(() => {
    const logo = document.querySelector("[data-logo-source]");
    const residence = document.querySelector("[data-logo-residence]");
    const target = document.querySelector("[data-logo-target]");

    if (!residence || !logo || !target) {
      console.log("No object found");
      return;
    }

    logo.parentNode !== residence && residence.appendChild(logo)

    ScrollTrigger.create({
      trigger: target,
      start: "top bottom",
      end: "top center", 
      onEnter: () => {
        const state = Flip.getState(logo);
        target.appendChild(logo);
        Flip.from(state, {
          duration: 1,
          ease: "power1.out",
        });
      },
      onLeaveBack: () => {
        const state = Flip.getState(logo);
        residence.appendChild(logo);
        Flip.from(state, {
          duration: 1,
          ease: "power2.out",
        });
      },
    });
  }, []);

  return null;
}
