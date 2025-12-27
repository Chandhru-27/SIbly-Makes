const Editorial = () => {
  return (
    <section className="min-h-screen relative text-white w-full z-99 px-[clamp(1.875rem,0.75rem+5vw,8.75rem)] overflow-hidden">
      <div className="flex flex-col items-center gap-[clamp(2.5rem,1.6818rem+3.6364vw,7.5rem)]">
        {/* Logo */}
        <div className="pt-4 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center xl:gap-3 gap-1">
            <p className="text-[clamp(2rem,1.6932rem+1.3636vw,3.875rem)] text-[#cdcdcd]">(</p>
            <img
              src="/assets/logo.webp"
              alt="logo"
              className="w-[clamp(2rem,1.5909rem+1.8182vw,4.5rem)] h-[clamp(2rem,1.5909rem+1.8182vw,4.5rem)] xl:mt-2 mt-1 opacity-90"
            />
            <p className="text-[clamp(2rem,1.6932rem+1.3636vw,3.875rem)] text-[#cdcdcd]">)</p>
          </div>
          <p className="poppins-extrabold text-[#cdcdcd] text-[clamp(0.625rem,0.5023rem+0.5455vw,1.375rem)]">
            SIBLY MAKES SINCE 2023
          </p>
        </div>

        <div className="">
          <p className="text-[clamp(1.5625rem,0.5398rem+4.5455vw,7.8125rem)] text-center w-[clamp(20.625rem,7.125rem+60vw,103.125rem)]  poppins-bold leading-none">
            <span className="biz-udmincho-regular text-[#7599C4] tracking-tighter">HANDMADE</span> WITH PATIENCE
            AND CARE,<span className="biz-udmincho-regular tracking-tighter text-[#7599C4]">STITCHED</span> WITH
            INTENTION AND LOVE, CREATED <span className="biz-udmincho-regular tracking-tighter text-[#7599C4]">ONE LOOP AT A TIME</span>. HONOURING THE ART OF
            <span className="biz-udmincho-regular tracking-tighter text-[#7599C4]">CROCHET.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Editorial;
