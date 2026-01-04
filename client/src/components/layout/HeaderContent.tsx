import { Menu } from "lucide-react";
import { gsap } from "../../lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import Sidebar from "../ui/Sidebar";

const HeaderContent = () => {
  const viewPortWidth = window.innerWidth;
  let size: number = 28;

  if (viewPortWidth <= 380) {
    size = 16;
  } else if (viewPortWidth > 380 && viewPortWidth < 768) {
    size = 20;
  } else if (viewPortWidth > 768 && viewPortWidth <= 1920) {
    size = 28;
  } else if (viewPortWidth > 1920) {
    size = 38;
  }

  const navLinks = [
    { linkName: "Home", linkTo: "#home", linkNumber: "01" },
    { linkName: "Editorial", linkTo: "#editorial", linkNumber: "02" },
    { linkName: "Collections", linkTo: "#collections", linkNumber: "03" },
    { linkName: "Contact Us", linkTo: "#contact", linkNumber: "04" },
  ];

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

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex z-999 fixed">
      <nav
        ref={navRef}
        className="text-[#faf7f7] nav-elements flex gap-20 w-full justify-between items-center"
      >
        <div
          className="biz-udmincho-regular nav-elements text-[clamp(1.1375rem,0.1584rem+1.6182vw,3.2375rem)] pl-[clamp(0.675rem,0.25rem+3vw,8.75rem)] flex xl:gap-6 gap-3 items-center  cursor-pointer"
        >
          <div data-logo-residence>
            <img
              src="/assets/logo.webp"
              data-logo-source
              className="w-[clamp(1rem,1.0909rem+1.4182vw,4.5rem)] logo h-[clamp(1rem,1.0909rem+1.4182vw,4.5rem)] mt-1"
            />
          </div>
          <span className="leading-tight z-99 mt-1">
            <span className="tracking-wide ">Sibly</span>{" "}
            <span className="text-[#7599C4] tracking-wider">Makes</span>
          </span>
        </div>
        <div className="flex mt-2 pr-[clamp(1.275rem,0.25rem+3vw,8.75rem)]">
          <button
            className="hambutton mx-auto pointer-events-auto cursor-pointer"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Menu color="#ffffff" size={size} strokeWidth={2} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed top-0 right-0 h-screen z-9999 overflow-hidden">
          <Sidebar navLinks={navLinks} open={open} setOpen={setOpen} />
        </div>
      )}
    </header>
  );
};

export default HeaderContent;
