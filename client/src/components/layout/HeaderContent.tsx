import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { gsap } from "../../lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const HeaderContent = () => {
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
        className="text-white opacity-70 nav-elements px-[clamp(1.875rem,0.75rem+5vw,8.75rem)] py-8 flex gap-20 w-full lg:justify-normal justify-between items-center"
      >
        <Link
          to="/"
          
          className="biz-udmincho-regular nav-elements text-[clamp(1.3375rem,0.5284rem+1.8182vw,3.4375rem)] flex xl:gap-10 gap-6  items-center cursor-pointer"
        >
          <div data-logo-residence>
            <img
              src="/assets/logo.webp"
              data-logo-source
              className="w-[clamp(2rem,1.5909rem+1.8182vw,4.5rem)] logo h-[clamp(2rem,1.5909rem+1.8182vw,4.5rem)] z-[99999] mt-1"
            />
          </div>
          <span className="leading-tight">
            <span className="tracking-wide glow-text">Sibly</span>{" "}
            <span className="text-[#7599C4] tracking-wider">Makes</span>
            <img
              src="/assets/thread.webp"
              alt="thread"
              className="w-[clamp(7.5rem,4.0545rem+9.0909vw,20rem)] h-[clamp(0.75rem,0.4864rem+0.7273vw,1.75rem)]"
            />
          </span>
        </Link>
        <div className="lg:space-x-15 2xl:space-x-35 text-[clamp(0.625rem,0.4716rem+0.6818vw,1.5625rem)] poppins-regular4">
          <>
            <button className="lg:hidden hambutton">
              <Menu color="#ffffff" size={22} strokeWidth={3} />
            </button>
          </>
          <>
            <Link
              to="#"
              className="cursor-pointer hidden lg:inline poiret-one-regular"
            >
              <span className="tracking-[2px]">Collections</span> ❋
            </Link>
            <Link
              to="#"
              className="cursor-pointer hidden lg:inline poiret-one-regular"
            >
              <span className="tracking-[2px]">Contact us</span> ❋
            </Link>
          </>
        </div>
      </nav>
    </header>
  );
};

export default HeaderContent;
