import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";

const Collections = () => {
  useGSAP(() => {
    const section = document.querySelector(
      "[data-label-horizontalSection]"
    ) as HTMLElement;

    const pin = document.querySelector(
      "[data-label-horizontalPin]"
    ) as HTMLElement;

    const track = document.querySelector(
      "[data-label-horizontalTrack]"
    ) as HTMLElement;

    const panels = gsap.utils.toArray("[data-label-panel]") as HTMLElement[];

    const totalScroll = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: () => -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top+=40",
        end: () => `+=${totalScroll}`,
        scrub: true,
        pin: pin,
        anticipatePin: 1,
        snap: 1 / (panels.length - 1),
      },
    });
  }, []);

  return (
    <section className="relative">
      {/* Title */}
      <div className="flex gap-2 w-full px-15 mt-6 h-fit">
        <div className="w-0.5 bg-[#7599C4]"></div>
        <p className="text-white poppins-bold text-[60px] leading-none">
          Collections
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div data-label-horizontalSection className="">
        <div
          data-label-horizontalPin
          className="min-h-screen overflow-hidden flex"
        >
          <div
            data-label-horizontalTrack
            className="flex w-max gap-10 px-[30vw] pt-[15vh]"
          >
            <div data-label-panel className="w-[400px] h-[400px] bg-red-500" />
            <div data-label-panel className="w-[400px] h-[400px] bg-blue-500" />
            <div
              data-label-panel
              className="w-[400px] h-[400px] bg-green-500"
            />
            <div
              data-label-panel
              className="w-[400px] h-[400px] bg-yellow-500"
            />
            <div data-label-panel className="w-[400px] h-[400px] bg-red-500" />
            <div data-label-panel className="w-[400px] h-[400px] bg-blue-500" />
            <div
              data-label-panel
              className="w-[400px] h-[400px] bg-green-500"
            />
            <div
              data-label-panel
              className="w-[400px] h-[400px] bg-yellow-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
