import { gsap } from "../../lib/gsap";
import { useGSAP } from "@gsap/react";

const Editorial = () => {
  

  useGSAP(() => {
    const items = gsap.utils.toArray("[data-why-item]") as Element[];

    gsap.set(items, {
      opacity: 0,
      y: 80,
    });

    gsap.set(items[0], {
      opacity: 1,
      y: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-why-section]",
        start: "top top+=20",
        end: () => `+=${window.innerHeight * items.length}`,
        scrub: true,
        pin: true,
      },
    });

    items.forEach((item, i) => {
      if (i === 0) return;

      // Element that goes out
      tl.to(items[i - 1], {
        opacity: 0,
        y: () => -window.innerHeight * 0.6,
        duration: 1,
        ease: "power2.inOut",
      });

      // Element that comes in
      tl.to(
        item,
        {
          opacity: 1,
          y: 20,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
    });
  }, []);

  return (
    <section
      className="min-h-screen relative text-white w-full z-99 px-[clamp(1.875rem,0.75rem+5vw,8.75rem)]"
    >
      <div className="flex flex-col items-center gap-[clamp(2.5rem,1.6818rem+3.6364vw,7.5rem)]">
        {/* Logo Holder */}
        <div className="pt-4 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center xl:gap-3 gap-1">
            <p className="text-[clamp(2rem,1.6932rem+1.3636vw,3.875rem)] text-[#cdcdcd]">
              (
            </p>
            <div
              data-logo-target
              className="w-[clamp(2rem,1.5909rem+1.8182vw,4.5rem)] h-[clamp(2rem,1.5909rem+1.8182vw,4.5rem)]"
            ></div>
            <p className="text-[clamp(2rem,1.6932rem+1.3636vw,3.875rem)] text-[#cdcdcd]">
              )
            </p>
          </div>
          <p className="poppins-extrabold text-[#cdcdcd] text-[clamp(0.625rem,0.2023rem+0.3455vw,1.375rem)]">
            SIBLY MAKES SINCE 2023
          </p>
        </div>

        {/* Editorial Section */}
        <div className="">
          <p className="text-[clamp(1.5625rem,0.5398rem+4.5455vw,7.8125rem)] text-center w-[clamp(20.625rem,7.125rem+60vw,103.125rem)]  poppins-bold leading-none">
            <span className="biz-udmincho-regular text-[#7599C4] tracking-tighter">
              HANDMADE
            </span>{" "}
            WITH PATIENCE AND CARE,
            <span className="biz-udmincho-regular tracking-tighter text-[#7599C4]">
              STITCHED
            </span>{" "}
            WITH INTENTION AND LOVE, CREATED{" "}
            <span className="biz-udmincho-regular tracking-tighter text-[#7599C4]">
              ONE LOOP AT A TIME
            </span>
            . HONOURING THE ART OF
            <span className="biz-udmincho-regular tracking-tighter text-[#7599C4]">
              CROCHET.
            </span>
          </p>
        </div>

        {/* Why Section Desktop */}
        <div className="relative w-full hidden lg:block">
          <div
            data-why-section
            className=" flex flex-col justify-center lg:items-center lg:flex-row lg:gap-30"
          >
            <div data-why-left className="lg:w-2/4 w-full">
              <div className="flex gap-4 justify-center w-full">
                <div className="w-0.5 bg-[#7599C4]"></div>
                <div className="flex flex-col leading-none tracking-tighter poppins-bold text-[clamp(2.8125rem,1.0227rem+7.9545vw,13.75rem)]">
                  <span>WHY</span>
                  <span className="biz-udmincho-regular text-[#7599C4]">
                    SIBLY
                  </span>
                  <span>MAKES?</span>
                </div>
              </div>
            </div>

            <div data-why-right className="lg:w-2/4 w-full">
              <div
                data-why-container
                className="relative h-screen overflow-hidden"
              >
                <div
                  data-why-item
                  className="absolute flex justify-center inset-0"
                >
                  <div className="flex flex-col gap-5 justify-center">
                    <p className="poppins-semibold text-[#7599C4] text-[clamp(2rem,1.3333rem+1.0417vw,3rem)]">
                      HANDWRITTEN, NEVER GENERATED ✍🏻
                    </p>
                    <p className="biz-udmincho-regular text-[clamp(1.5rem,0.9167rem+0.9115vw,2.375rem)] tracking-tight">
                      Every letter we create is written by hand using
                      traditional calligraphy techniques — no fonts, no
                      shortcuts. Each piece carries the warmth, imperfections,
                      and character that only human touch can bring, turning
                      words into timeless keepsakes.
                    </p>
                  </div>
                </div>
                <div
                  data-why-item
                  className="absolute flex justify-center inset-0"
                >
                  <div className="flex flex-col gap-5 justify-center">
                    <p className="poppins-semibold text-[#7599C4] text-[clamp(2rem,1.3333rem+1.0417vw,3rem)]">
                      CRAFTED WITH CARE 🪡
                    </p>
                    <p className="biz-udmincho-regular text-[clamp(1.5rem,0.9167rem+0.9115vw,2.375rem)] tracking-tight">
                      From delicate crochet details to fully custom designs,
                      every creation is made patiently, one loop at a time. We
                      believe true craftsmanship takes time, intention, and care
                      — and that’s exactly what goes into every Sibly Makes
                      piece.
                    </p>
                  </div>
                </div>
                <div
                  data-why-item
                  className="absolute flex justify-center inset-0"
                >
                  <div className="flex flex-col gap-5 justify-center">
                    <p className="poppins-semibold text-[#7599C4] text-[clamp(2rem,1.3333rem+1.0417vw,3rem)]">
                      MADE FOR YOU, SUPPORTED BY US 🫱🏻‍🫲🏻
                    </p>
                    <p className="biz-udmincho-regular text-[clamp(1.5rem,0.9167rem+0.9115vw,2.375rem)] tracking-tight">
                      Your ideas guide the process. We work closely with you to
                      customise each piece to your vision, provide clear
                      communication throughout, and ensure safe, hassle-free
                      shipping — so your handmade order reaches you just the way
                      it should.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why section Mobile */}
        <div className="mt-30 space-y-20 block lg:hidden">
          <div className="flex gap-3 w-full">
            <div className="w-0.5 bg-[#7599C4]"></div>
            <div className="flex flex-col leading-none tracking-tighter poppins-bold text-[54px] md:text-7xl">
              <span>WHY <span className="text-[#7599C4]">SIBLY</span></span>
              <span>MAKES ?</span>
            </div>
          </div>

          <div className="h-full overflow-hidden space-y-20">
            <div className=" flex justify-center">
              <div className="flex flex-col gap-5 justify-center">
                <p className="poppins-semibold text-[#7599C4] text-[28px]">
                  HANDWRITTEN, NEVER GENERATED ✍🏻
                </p>
                <p className="biz-udmincho-regular text-[18px] tracking-tight">
                  Every letter we create is written by hand using traditional
                  calligraphy techniques — no fonts, no shortcuts. Each piece
                  carries the warmth, imperfections, and character that only
                  human touch can bring, turning words into timeless keepsakes.
                </p>
              </div>
            </div>
            <div className=" flex justify-center">
              <div className="flex flex-col gap-5 justify-center">
                <p className="poppins-semibold text-[#7599C4] text-[28px]">
                  CRAFTED WITH CARE 🪡
                </p>
                <p className="biz-udmincho-regular text-[18px] tracking-tight">
                  From delicate crochet details to fully custom designs, every
                  creation is made patiently, one loop at a time. We believe
                  true craftsmanship takes time, intention, and care — and
                  that’s exactly what goes into every Sibly Makes piece.
                </p>
              </div>
            </div>
            <div className=" flex justify-center">
              <div className="flex flex-col gap-5 justify-center">
                <p className="poppins-semibold text-[#7599C4] text-[28px]">
                  MADE FOR YOU, SUPPORTED BY US 🫱🏻‍🫲🏻
                </p>
                <p className="biz-udmincho-regular text-[18px] tracking-tight">
                  Your ideas guide the process. We work closely with you to
                  customise each piece to your vision, provide clear
                  communication throughout, and ensure safe, hassle-free
                  shipping — so your handmade order reaches you just the way it
                  should.
                </p>
              </div>
            </div>
          </div>
      </div>
      </div>
    </section>
  );
};

export default Editorial;
