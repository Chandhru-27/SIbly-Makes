import { useGSAP } from "@gsap/react";
import { gsap } from "../../lib/gsap";
import { useRef } from "react";
import SplitType from "split-type";

const Collections = () => {
  const collectionFactory = [
    {
      imageURL: "/assets/collections/carrybag.webp",
      imageCount: "01",
      imageCaption: "Crochet Bag",
    },
    {
      imageURL: "/assets/collections/bowchains.webp",
      imageCount: "02",
      imageCaption: "Bow Keychains",
    },
    {
      imageURL: "/assets/collections/tabledecorations.webp",
      imageCount: "03",
      imageCaption: "Crochet Pets",
    },
    {
      imageURL: "/assets/collections/petchains.webp",
      imageCount: "04",
      imageCaption: "Pet Keychains",
    },
    {
      imageURL: "/assets/collections/beanie.webp",
      imageCount: "05",
      imageCaption: "Crochet Beanie",
    },
    {
      imageURL: "/assets/collections/Keychains.webp",
      imageCount: "06",
      imageCaption: "Custom Keychains",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const section = document.querySelector(
      "[data-label-horizontalsection]"
    ) as HTMLElement;

    const pin = document.querySelector(
      "[data-label-horizontalpin]"
    ) as HTMLElement;

    const track = document.querySelector(
      "[data-label-horizontaltrack]"
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
            toggleActions: "play none none none"
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
        toggleActions: "play none none none"
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
      <div data-label-horizontalsection className="lg:block hidden">
        <div
          data-label-horizontalpin
          className="overflow-hidden flex pointer-events-auto"
        >
          <div
            data-label-horizontaltrack
            className="flex w-max gap-10 pl-[20vw] pr-[10vw] pt-[10vh] relative"
          >
            {/* Image */}

            {collectionFactory.map((items, index) => (
              <div key={index} data-label-panel className="glass-card">
                <div className="relative w-[90%] h-[90%] mt-5 overflow-hidden">
                  {/* Image */}
                  <img
                    src={items.imageURL}
                    alt={items.imageCaption}
                    className="h-full w-full object-cover opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out hover:scale-105"
                  />

                  {/* Top Number */}
                  <div className="absolute top-6 left-6">
                    <p className="text-[64px] md:text-[80px] poppins-extrabold text-pink-500 leading-none">
                      {items.imageCount}
                    </p>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white text-[24px] md:text-[32px] poppins-extrabold tracking-wider uppercase">
                      {items.imageCaption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Mobile */}
      <div className="lg:hidden flex justify-center ">
        <div className="flex flex-col justify-center w-max gap-10 pt-[5vh]">
          {collectionFactory.map((items, index) => (
            <div key={index} data-image-mobile className="glass-card-mobile">
              <div className="relative w-[90%] h-[90%] flex justify-center my-4 overflow-hidden">
                {/* Image */}
                <img
                  src={items.imageURL}
                  alt={items.imageCaption}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-300 ease-out"
                />

                {/* Top Count */}
                <div className="absolute top-4 left-4">
                  <p className="text-[42px] font-extrabold text-pink-500 leading-none">
                    {items.imageCount}
                  </p>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-[22px] poppins-extrabold tracking-wider uppercase">
                    {items.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="flex 2xl:mt-40 lg:mt-10 xl:mt-20 flex-col 2xl:min-h-[60vh] xl:min-h-screen h-[60vh] items-center justify-center gap-30 xl:gap-30 2xl:gap-40">
        <div ref={containerRef} className="flex justify-center items-center">
          <p
            className="
              poppins-bold
              text-center
              leading-[0.95]
              text-white
              max-w-[90vw]
              xl:max-w-300
              2xl:max-w-350
              mx-auto
              text-[clamp(1.375rem,0.5773rem+3.5455vw,6.25rem)]"
          >
            <span className="block whitespace-nowrap">
              <span className="biz-udmincho-regular text-[#7599C4] tracking-[-0.04em]">
                DESIGNED
              </span>{" "}
              TO BE PERSONAL,
            </span>

            <span className="block whitespace-nowrap">
              <span className="biz-udmincho-regular text-[#7599C4] tracking-[-0.04em]">
                CRAFTED
              </span>{" "}
              TO BE YOURS. LET’S
            </span>

            <span className="block whitespace-nowrap">
              <span className="biz-udmincho-regular text-[#7599C4] tracking-[-0.04em]">
                CUSTOMIZE
              </span>{" "}
              ONE JUST FOR YOU
            </span>
          </p>
        </div>

        <div className="flex justify-center">
          <div className="container">
            <div className="group">
              {/* Actual */}
              <div className="card">
                <img src="/assets/carousel/baby-hat-svgrepo-com.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/eraser.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/pen.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/pencil.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/pin.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/sciscor.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/tailoringmachine.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/threadhook.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/yarn.svg" />
              </div>

              {/* Duplicate */}
              <div className="card">
                <img src="/assets/carousel/baby-hat-svgrepo-com.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/eraser.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/pen.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/pencil.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/pin.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/sciscor.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/tailoringmachine.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/threadhook.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/yarn.svg" />
              </div>

              {/* Duplicate */}
              <div className="card">
                <img src="/assets/carousel/baby-hat-svgrepo-com.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/eraser.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/pen.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/pencil.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/pin.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/sciscor.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/tailoringmachine.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/threadhook.svg" />
              </div>
              <div className="card">
                <img src="/assets/carousel/yarn.svg" />
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
