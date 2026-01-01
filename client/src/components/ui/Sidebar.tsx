import React from "react";
import { X } from "lucide-react";
import { gsap } from "../../lib/gsap";
import { useGSAP } from "@gsap/react";

interface NavLinkProps {
  linkName: string;
  linkTo: string;
  linkNumber: string;
}

interface SidebarProps {
  navLinks: NavLinkProps[];
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Sidebar = ({ navLinks, setOpen }: SidebarProps) => {
  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set([".first-layer", ".second-layer", ".third-layer"], {
      xPercent: 100,
    });

    tl.to(".first-layer", {
      xPercent: 0,
      duration: 0.45,
      ease: "power3.out",
    })
      .to(
        ".second-layer",
        {
          xPercent: 0,
          duration: 0.45,
          ease: "power3.out",
        },
        "<0.08"
      )
      .to(
        ".third-layer",
        {
          xPercent: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        "<0.06"
      )
      .from(
        ".nav-text",
        {
          rotateZ: 10,
          y: 120,
          opacity: 0.4,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
        },
        "<0.045"
      );
  }, []);

  return (
    <div data-label-sidebarcontainer>
      <div
        data-label-firstlevel
        className="bg-blue-500 xl:w-140 2xl:w-[30vw] w-screen h-screen relative first-layer"
      >
        <div
          data-label-secondlevel
          className="bg-pink-300 xl:w-140 2xl:w-[30vw] w-screen h-screen absolute second-layer right-0"
        >
          <div
            data-label-thirdlevel
            className="bg-[#ffffffe5] xl:w-140 2xl:w-[30vw] w-screen h-screen absolute third-layer right-0"
          >
            <div className="p-4">
              <button
                className="pointer-events-auto cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <X size={40} strokeWidth={2} />
              </button>
            </div>
            <div
              data-label-linkcontainer
              className="h-[50%] px-[2em] flex flex-col gap-4 pt-20 2xl:pt-40"
            >
              {navLinks.map((items, index) => (
                <span
                  key={index}
                  className="nav-item inline-block overflow-hidden uppercase tracking-tight leading-none perspective-midrange"
                >
                  <span className="nav-text xl:text-[65px] text-[40px] poppins-medium inline-block origin-bottom">
                    <a
                      href={items.linkTo}
                      className="pointer-events-auto flex gap-1 cursor-pointer" onClick={() => setOpen(false)}
                    >
                      {items.linkName}
                      <span className="nav-number text-[0.75rem] text-blue-700 underline">
                        {items.linkNumber}
                      </span>
                    </a>
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
