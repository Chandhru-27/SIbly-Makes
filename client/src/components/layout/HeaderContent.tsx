import { Menu } from "lucide-react";
import { gsap } from "../../lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


const HeaderContent = () => {
  const viewPortWidth = window.innerWidth;
  let size: number = 28;

  if (viewPortWidth <= 380) {
    size = 18;
  } else if (viewPortWidth > 380 && viewPortWidth < 768) {
    size = 22;
  } else if (viewPortWidth > 768 && viewPortWidth <= 1920) {
    size = 28;
  } else if (viewPortWidth > 1920) {
    size = 38;
  }

  const navRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.2,
          ease: "power3.out",
        },
      });
      tl.from(".nav-elements > *", {
        x: -120,
        opacity: 0,
      }).from(
        ".hambutton",
        {
          x: 120,
          opacity: 0,
        },
        "-=0.8"
      );
    },
    { scope: navRef }
  );

  return (
    <header className="w-full flex">
      <nav
        ref={navRef}
        className="text-white opacity-70 nav-elements px-[clamp(1.875rem,0.75rem+5vw,8.75rem)] flex gap-20 w-full  justify-between items-center"
      >
        <a
          href="#home"
          className="biz-udmincho-regular nav-elements text-[clamp(1.3375rem,0.5284rem+1.8182vw,3.4375rem)] flex xl:gap-10 gap-6  items-center cursor-pointer"
        >
          <div data-logo-residence>
            <img
              src="/assets/logo.webp"
              data-logo-source
              className="w-[clamp(2rem,1.5909rem+1.8182vw,4.5rem)] logo h-[clamp(2rem,1.5909rem+1.8182vw,4.5rem)] mt-1"
            />
          </div>
          <span className="leading-tight">
            <span className="tracking-wide glow-text">Sibly</span>{" "}
            <span className="text-[#7599C4] tracking-wider">Makes</span>
          </span>
        </a>
        <div className="lg:space-x-15 mt-2 2xl:space-x-35 text-[clamp(0.625rem,0.4716rem+0.6818vw,1.5625rem)] poppins-regular4">
          <>
            <button className="hambutton">
              <Menu color="#ffffff" size={size} strokeWidth={4} />
            </button>
          </>

          {/* <>
            <a
              href="#home"
              rel="nopener noreference"
              className="cursor-pointer pointer-events-auto hidden lg:inline poiret-one-regular"
            >
              <span className="tracking-[2px]">Home</span> ❋
            </a>
            <a
              href="#collections"
              className="cursor-pointer pointer-events-auto hidden lg:inline poiret-one-regular"
            >
              <span className="tracking-[2px]">Collections</span> ❋
            </a>
            <a
              href="#contact"
              rel="nopener noreference"
              className="cursor-pointer pointer-events-auto hidden lg:inline poiret-one-regular"
            >
              <span className="tracking-[2px]">Contact us</span> ❋
            </a>
          </> */}
        </div>
      </nav>
    </header>
  );
};

export default HeaderContent;
