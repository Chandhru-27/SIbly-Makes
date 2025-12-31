import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { useRef } from "react";
import SplitType from "split-type";

const Collections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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

    const paragraph = containerRef.current?.querySelector("p");

    if (paragraph) {
      const text = new SplitType(paragraph, {
        types: "lines",
        tagName: "span",
        lineClass: "line-reveal-container",
      });

      gsap.fromTo(
        text.lines,
        {
          "--reveal": 1,
        },
        {
          "--reveal": 0,
          duration: 0.6,
          stagger: 0.18,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top 100%`,
          },
        }
      );
    }

    gsap.from(containerRef.current, {
      x: -140,
      opacity: 0,
      stagger: 0.1,
      delay: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: `top 90%`,
      },
    });

    const mobileImages = gsap.utils.toArray<HTMLElement>("[data-image-mobile]");

    mobileImages.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative">
      {/* Title */}
      <div className="flex gap-2 w-full px-[clamp(1.5rem,0.5182rem+4.3636vw,7.5rem)] mt-6 h-fit">
        <div className="w-0.5 bg-[#7599C4] "></div>
        <p className="text-white poppins-bold text-[clamp(2.5rem,1.8864rem+2.7273vw,6.25rem)] leading-none">
          Collections
        </p>
      </div>

      {/* Horizontal Scroll Desktop */}
      <div data-label-horizontalSection className="lg:block hidden">
        <div data-label-horizontalPin className="overflow-hidden flex">
          <div
            data-label-horizontalTrack
            className="flex w-max gap-10 pl-[20vw] pr-[10vw] pt-[10vh] relative"
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

      {/* Horizontal Scroll Mobile */}
      <div className="lg:hidden flex justify-center ">
        <div className="flex flex-col justify-center w-max gap-10 pt-[5vh]">
          <div data-image-mobile className="glass-card-mobile">
            <div className="w-[90%] h-[90%] flex justify-center my-4 relative overflow-hidden">
              <img
                src="/assets/collections/Keychains.webp"
                className="gorw h-full w-full"
              />
            </div>
          </div>

          <div className="glass-card-mobile">
            <div
              data-image-mobile
              className="w-[90%] h-[90%]flex justify-center my-4 relative overflow-hidden"
            >
              <img
                src="/assets/collections/Keychains.webp"
                className="gorw h-full w-full"
              />
            </div>
          </div>

          <div className="glass-card-mobile">
            <div
              data-image-mobile
              className="w-[90%] h-[90%]flex justify-center my-4 relative overflow-hidden"
            >
              <img
                src="/assets/collections/Keychains.webp"
                className="gorw h-full w-full"
              />
            </div>
          </div>

          <div className="glass-card-mobile">
            <div
              data-image-mobile
              className="w-[90%] h-[90%]flex justify-center my-4 relative overflow-hidden"
            >
              <img
                src="/assets/collections/Keychains.webp"
                className="gorw h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div
        ref={containerRef}
        className="flex justify-center py-5 max-xl:mt-30 lg:mt-25 mt-15"
      >
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

      <div>
        <div className="container">
          {/* <p>🌸</p>
          <p>🌸</p>
          <p>🌸</p>
          <p>🌸</p>
          <p>🌸</p>
          <p>🌸</p>
          <p>🌸</p> */}
        </div>
      </div>
    </section>
  );
};

export default Collections;
