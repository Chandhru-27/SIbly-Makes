import { X } from "lucide-react";
import { gsap } from "../../lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      paused: true,
      onReverseComplete: () => setOpen(false),
    });

    const button = document.querySelector(".close-button");

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

    tl.play();
    timelineRef.current = tl;
  }, []);

  return (
    <div ref={containerRef} data-label-sidebarcontainer>
      <div
        data-label-firstlevel
        className="bg-blue-500 xl:w-140 2xl:w-260 w-screen h-screen relative first-layer"
      >
        <div
          data-label-secondlevel
          className="bg-pink-300 xl:w-140 2xl:w-260 w-screen h-screen absolute second-layer right-0"
        >
          <div
            data-label-thirdlevel
            className="bg-[#ffffffe5] xl:w-140 2xl:w-260 w-screen h-screen absolute third-layer right-0"
          >
            <div className="p-4">
              <button
                className="pointer-events-auto cursor-pointer close-button hover:text-[#1c5eaf] transition-all ease-in-out duration-200"
                onClick={() => timelineRef.current?.timeScale(2).reverse()}
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
                  <span className="nav-text text-[clamp(2.375rem,1.8432rem+2.3636vw,5.625rem)] poppins-medium inline-block origin-bottom">
                    <a
                      href={items.linkTo}
                      className="pointer-events-auto hover:text-[#3d73b6] transition-all ease-in-out duration-200 flex gap-1 cursor-pointer"
                      onClick={() => timelineRef.current?.timeScale(2).reverse()}
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
