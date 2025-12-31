const Footer = () => {
  return (
    <footer className="xl:mx-25 lg:mx-5 mx-6 mb-10 flex flex-col justify-center rounded-2xl bg-[#202832]">
      
      <div className="py-10 px-10 flex lg:flex-row flex-col max-lg:gap-10 items-center text-white justify-between">
        <div className="w-fit space-y-6">

          <div className="flex gap-4 items-center tracking-tight">
            <a className="pointer-events-auto" href="https://www.instagram.com/sibly.makes/"><img src="/assets/logo.webp" className="w-8 h-8" /></a>
            <p className="biz-udmincho-regular text-[35px]">
              Sibly <span className="text-[#7599C4]">Makes</span>
            </p>
          </div>

          <div className="space-y-8 poiret-one-regular text-[18px] pointer-events-auto">
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
          <img src="/assets/shield.webp" className="w-15 xl:w-25 lg:w-20" />
          <img src="/assets/dog.webp" className="w-10 xl:w-20 lg:w-15" />
        </div>

        <div className="w-fit space-y-15 max-lg:flex max-lg:flex-col items-center pointer-events-auto">
          <div className="space-y-2">
            <p className="text-[1.25rem] poiret-one-bold">UI Design:</p>
            <div className="flex items-center gap-4 max-lg:flex-col">
              <img src="/assets/profiles/aakash.png" className="w-8 h-8" />
              <p>
                <a
                  href="https://www.linkedin.com/in/aakash-a-3b11a7242/"
                  target="_blank"
                  className="poiret-one-bold text-[#d9d6d6] text-[22px]"
                >
                  Aakash A
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[1.25rem] ">CoDesign & Development:</p>
            <div className="flex items-center gap-4 max-lg:flex-col">
              <img
                src="/assets/profiles/chandhru.png"
                className="rounded-full w-8 h-8"
              />
              <p>
                <a
                  href=""
                  target="_blank"
                  className="poiret-one-bold text-[#d9d6d6] text-[22px]"
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
