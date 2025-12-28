import React, { useRef } from "react";
import { gsap } from "../../lib/gsap";
import { useGSAP } from "@gsap/react";

const HeroContent = React.memo(() => {
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1.2,
        ease: "power3.out",
      },
    });
    tl.from(".hero-left > *", {
      x: -120,
      opacity: 0,
      stagger: 0.15,
    }).from(".hero-middle > *", {
      y: 120,
      opacity: 0,
      stagger: 0.15,
    }, "-=0.8").from(".hero-right", {
      x: 120,
      opacity: 0,
    }, "-=0.8")
  }, {scope: heroRef});

  

  return (
    <section className="hero relative z-10 grid xl:pt-2 xl:px-6" ref={heroRef}>
      <div className="w-full grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] items-center">
        {/* Hero start Text */}
        <div className="hero-left flex flex-col items-center h-full justify-center gap-10 order-1 xl:order-0">
          <p className="biz-udmincho-regular leading-[clamp(3.75rem,2.9318rem+3.6364vw,8.75rem)] text-center flex flex-col text-white opacity-[0.8] text-[clamp(3.5rem,1.3239rem+5.2273vw,9.6875rem)]">
            <span className="xl:text-left">DISCOVER</span>
            <span className="flex tracking-tighter gap-2 poppins-bold text-[#7599C4]">
              THE ART
              {/* Bow Image */}
              <img
                src="/assets/bow.webp"
                alt="bow"
                className="w-[clamp(1.5rem,1.2692rem+1.0256vw,2.5rem)] h-[clamp(2rem,1.7115rem+1.2821vw,3.25rem)]"
              />
            </span>
            <span className="">OF CRAFT</span>
          </p>

          <div className="flex flex-col xl:flex-row max-xl:items-center xl:gap-10">
            <p className="text-white text-[clamp(1rem,-0.6875rem+1.4063vw,1.5625rem)] flex flex-col justify-center tracking-wide items-center poiret-one-regular">
              Crafted with
              <span className="flex gap-6">
                <span> — Love </span> ✿{" "}
                <span className="text-[#70b0ff]"> Passion </span> ✿{" "}
                <span> Care —</span>
              </span>
            </p>

            {/* Hook Image */}
            <div className="flex">
              <img
                src="/assets/hook.webp"
                alt="crochet-hook"
                className="opacity-[0.5] w-15 h-15 rotate-325"
              />
            </div>
          </div>
        </div>

        {/* Center images */}
        <div className="hero-middle w-full order-2 xl:order-0 flex flex-col relative gap-0 xl:gap-15 justify-self-center items-center">
          {/* Yarn ball */}
          <div className="flex xl:justify-start justify-end w-full px-10 md:px-40 xl:px-0">
            <img
              src="/assets/yarn.webp"
              alt="yarn"
              className="w-[clamp(2rem,1.6727rem+1.4545vw,4rem)] top-0 opacity-[0.4]"
            />
          </div>
          {/* Keychain */}
          <img
            src="/assets/keychain.webp"
            alt="keychain"
            className="w-[clamp(7rem,3.0364rem+16.7173vw,28rem)] h-[clamp(7rem,3.0364rem+16.7173vw,28rem)] glow-image opacity-[0.9] xl:pb-5"
          />
          {/* Heart */}
          <div className="w-full flex xl:justify-end xl:px-0 px-10 md:px-40">
            <img
              src="/assets/heart.webp"
              alt="heart"
              className="w-[clamp(2rem,1.6727rem+1.4545vw,4rem)] rotate-20 right-[-10%] top-[-200%]"
            />
          </div>
        </div>

        {/* Hero end text */}
        <div className="hero-right order-3 xl:order-0 flex-1 xl:justify-self-end max-xs:mt-2 h-full flex flex-col xl:h-full justify-center w-full relative">
          <div className="flex-1 relative flex flex-col xl:items-center xl:gap-4 gap-10 justify-center">
            {/* Circular div */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute w-[clamp(26.5rem,18.7159rem+16.8182vw,45.625rem)] h-[clamp(26.5rem,18.7159rem+16.8182vw,45.625rem)] rounded-full border-8 border-[rgba(180,180,180,0.25)] top-[clamp(10rem,4.9409rem+10.8182vw,26.25rem)] -translate-y-1/2 pointer-events-none -z-10 opacity-20"></div>
            </div>

            <div className="flex justify-center ml-4 xl:ml-0">
              <p className="text-white opacity-[0.8] poppins-bold tracking-[4px] text-center text-[clamp(1.2875rem,0.2886rem+1.7727vw,2.925rem)] flex flex-col">
                <span>Handcrafted</span>
                <span className="text-[#7599C4]">crochet</span>
                <span>collections</span>
              </p>
            </div>

            <div className="xl:space-y-8 2xl:space-y-10 flex flex-col items-center md:space-y-6 space-y-4 w-full">
              <p className="text-[#a09f9f] text-center max-w-[clamp(20.9375rem,17.4091rem+15.6818vw,42.5rem)] text-wrap over-the-rainbow-regular text-[clamp(0.875rem,0.7727rem+0.4545vw,1.5rem)] md:px-4 tracking-wider">
                <span>
                  our products reveal the beauty of art and handcraft.
                </span>
              </p>
              <p className="over-the-rainbow-regular xl:text-4xl 2xl:text-5xl text-3xl lg:text-5xl md:text-4xl text-center text-[#7599C4] ">
                <span>- By Sibly Makes</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroContent;
