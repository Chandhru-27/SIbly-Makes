const Footer = () => {
  return (
    <footer className="xl:mx-25 lg:mx-5 mx-6 mb-10 flex flex-col justify-center rounded-2xl bg-[#202832]">
      <div className="py-10 px-10 flex lg:flex-row flex-col max-lg:gap-10 items-center text-white justify-between">
        <div className="w-fit space-y-6">
          <div className="flex gap-4 items-center max-lg:justify-center tracking-tight">
            <a
              className="pointer-events-auto"
              href="https://www.instagram.com/sibly.makes/"
            >
              <img src="/assets/logo.webp" className="w-8 h-8" />
            </a>
            <p className="biz-udmincho-regular text-[25px] xs:text-[35px] 2xl:[45px]">
              Sibly <span className="text-[#7599C4]">Makes</span>
            </p>
          </div>

          <div className="space-y-8 poiret-one-regular xs:text-[18px] 2xl:text-[28px] text-[14px] pointer-events-auto">
            <div className="space-y-2 max-lg:text-center">
              <p className="hover:underline cursor-pointer ">
                <a>Home</a>
              </p>
              <p className="hover:underline cursor-pointer">
                <a>collections</a>
              </p>
              <p className="hover:underline cursor-pointer">
                <a>contact</a>
              </p>
            </div>

            <p>2025 Copyrights @ Sibly Makes</p>
          </div>
        </div>

        <div className="w-max flex items-center gap-30">
          <img src="/assets/shield.webp" className="w-15 xl:w-25 lg:w-20 2xl:w-35" />
          <img src="/assets/dog.webp" className="w-10 xl:w-20 lg:w-15 2xl:w-30" />
        </div>

        <div className="w-fit space-y-15 max-lg:flex max-lg:flex-col items-center pointer-events-auto">
          <div className="space-y-2">
            <p className="text-[1.25rem] 2xl:text-[2rem] poiret-one-bold">UI Design:</p>
            <div className="flex items-center gap-4 max-lg:flex-col">
              <img src="/assets/profiles/aakash.png" className="w-8 h-8 2xl:w-12 2xl:h-12" />
              <p>
                <a
                  href="https://www.linkedin.com/in/aakash-a-3b11a7242/"
                  target="_blank"
                  className="poiret-one-bold text-[#d9d6d6] text-[22px] 2xl:text-[32px]"
                >
                  Aakash A
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[1.25rem] 2xl:text-[2rem]">CoDesign & Development:</p>
            <div className="flex items-center gap-4 max-lg:flex-col">
              <img
                src="/assets/profiles/chandhru.png"
                className="rounded-full w-8 h-8 2xl:w-12 2xl:h-12"
              />
              <p>
                <a
                  href="https://www.linkedin.com/in/chandhrul27/"
                  target="_blank"
                  className="poiret-one-bold text-[#d9d6d6] text-[22px] 2xl:text-[32px]"
                >
                  Chandhru L
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
