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
      },
    });
  }, []);

  return (
    <section className="relative">
      {/* Title */}
      <div className="flex gap-2 w-full px-[clamp(1.5rem,0.5182rem+4.3636vw,7.5rem)] mt-6 h-fit">
        <div className="w-0.5 bg-[#7599C4]"></div>
        <p className="text-white poppins-bold text-[clamp(2.5rem,1.8864rem+2.7273vw,6.25rem)] leading-none">
          Collections
        </p>
      </div>

      {/* Horizontal Scroll Desktop */}
      <div data-label-horizontalSection className="lg:block hidden">
        <div data-label-horizontalPin className="overflow-hidden flex">
          <div
            data-label-horizontalTrack
            className="flex w-max gap-10 pl-[30vw] pr-[10vw] pt-[10vh] relative"
          >
            <div data-label-panel className="glass-card">
              {/* Image */}
              <div className="w-[90%] h-[90%] mt-5 overflow-hidden">
                <img
                  src="/assets/collections/Keychains.webp"
                  className="gorw h-full w-full"
                />
              </div>
            </div>

            <div data-label-panel className="glass-card">
              {/* Image */}
              <div className="w-[90%] h-[90%] mt-5 relative overflow-hidden">
                <img
                  src="/assets/collections/Keychains.webp"
                  className="gorw h-full w-full"
                />
              </div>
            </div>

            <div data-label-panel className="glass-card">
              {/* Image */}
              <div className="w-[90%] h-[90%] mt-5 relative overflow-hidden">
                <img
                  src="/assets/collections/Keychains.webp"
                  className="gorw h-full w-full"
                />
              </div>
            </div>

            <div data-label-panel className="glass-card">
              {/* Image */}
              <div className="w-[90%] h-[90%] mt-5 relative overflow-hidden">
                <img
                  src="/assets/collections/Keychains.webp"
                  className="gorw h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Desktop */}


      {/* Horizontal Scroll Mobile */}
      <div className="lg:hidden flex justify-center ">
        <div className="flex flex-col justify-center w-max gap-40 pt-[5vh]">
          <div className="glass-card-mobile">
            <div className="w-[90%] h-[90%] flex justify-center my-4 relative overflow-hidden">
              <img
                src="/assets/collections/Keychains.webp"
                className="gorw h-full w-full"
              />
            </div>
          </div>

          <div className="glass-card-mobile">
            <div className="w-[90%] h-[90%]flex justify-center my-4 relative overflow-hidden">
              <img
                src="/assets/collections/Keychains.webp"
                className="gorw h-full w-full"
              />
            </div>
          </div>

          <div className="glass-card-mobile">
            <div className="w-[90%] h-[90%]flex justify-center my-4 relative overflow-hidden">
              <img
                src="/assets/collections/Keychains.webp"
                className="gorw h-full w-full"
              />
            </div>
          </div>

          <div className="glass-card-mobile">
            <div className="w-[90%] h-[90%]flex justify-center my-4 relative overflow-hidden">
              <img
                src="/assets/collections/Keychains.webp"
                className="gorw h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="flex justify-center lg:mt-60 mt-30">
        <p className="text-[clamp(1.5625rem,0.5909rem+4.3182vw,7.5rem)] text-white text-center poppins-bold leading-none">
          <p className="flex gap-2 justify-center">
            <span className="biz-udmincho-regular text-[#7599C4] tracking-tighter">
              DESIGNED
            </span>{" "}
            TO BE PERSONAL,<br></br>
          </p>
          <p className="flex gap-2 justify-center">
            <span className="biz-udmincho-regular tracking-tighter text-[#7599C4]">
              CRAFTED
            </span>{" "}
            TO BE YOURS. LET'S <br></br>
          </p>
          <p className="flex gap-2 justify-center">
            <span className="biz-udmincho-regular tracking-tighter text-[#7599C4]">
              CUSTOMIZE
            </span>
            <span>ONE JUST FOR YOU</span>
          </p>
        </p>
      </div>
    </section>
  );
};

export default Collections;
