const navLinks = [
  { linkName: "Home", link: "#home" },
  { linkName: "Editorial", link: "#editorial" },
  { linkName: "Collections", link: "#collections" },
  { linkName: "Contact", link: "#contact" },
];

const credits = [
  {
    role: "UI Design:",
    name: "Aakash A",
    image: "/assets/profiles/aakash.webp",
    link: "https://www.linkedin.com/in/aakash-a-3b11a7242/",
    rounded: true,
  },
  {
    role: "CoDesign & Development:",
    name: "Chandhru L",
    image: "/assets/profiles/chandhru.webp",
    link: "https://www.linkedin.com/in/chandhrul27/",
    rounded: true,
  },
];

const Footer = () => {
  return (
    <footer className="xl:mx-25 lg:mx-5 mx-6 mb-10 rounded-2xl border-2 border-[#4a657d] bg-[#1e3856]">
      <div className="py-10 px-10 flex lg:flex-row flex-col items-center justify-between gap-10 text-white">
        {/* Left */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 tracking-tight max-lg:justify-center">
            <a
              href="https://www.instagram.com/sibly.makes/"
              className="pointer-events-auto"
              rel="noopener noreferrer"
            >
              <img src="/assets/logo.webp" className="w-8 h-8" />
            </a>

            <p className="biz-udmincho-regular text-[25px] xs:text-[35px] 2xl:text-[45px]">
              Sibly <span className="text-[#7599C4]">Makes</span>
            </p>
          </div>

          <div className="space-y-8 poiret-one-regular text-[14px] xs:text-[18px] 2xl:text-[28px] pointer-events-auto">
            <div className="space-y-2 max-lg:text-center">
              {navLinks.map((item, index) => (
                <p key={index} className="cursor-pointer hover:underline">
                  <a href={item.link} rel="noopener noreferrer">{item.linkName}</a>
                </p>
              ))}
            </div>

            <p>2025 Copyrights © Sibly Makes</p>
          </div>
        </div>

        {/* Center Images */}
        <div className="flex items-center gap-30">
          <img
            src="/assets/shield.webp"
            loading="lazy"
            decoding="async"
            width="160"
            height="160"
            className="w-15 lg:w-20 xl:w-25 2xl:w-35 h-auto opacity-0 transition-opacity duration-500"
            onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
          />

          <img
            src="/assets/dog.webp"
            loading="lazy"
            decoding="async"
            width="120"
            height="120"
            className="w-10 lg:w-15 xl:w-20 2xl:w-30 h-auto opacity-0 transition-opacity duration-500"
            onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
          />
        </div>

        {/* Right */}
        <div className="space-y-15 max-lg:flex max-lg:flex-col items-center pointer-events-auto">
          {credits.map(({ role, name, image, link, rounded }) => (
            <div key={name} className="space-y-2">
              <p className="text-[1rem] xs:text-[1.25rem] 2xl:text-[2rem] poiret-one-bold">
                {role}
              </p>

              <div className="flex items-center gap-4 max-lg:flex-col">
                <img
                  src={image}
                  loading="lazy"
                  decoding="async"
                  className={`w-8 h-8 2xl:w-12 2xl:h-12 ${
                    rounded ? "rounded-full" : ""
                  }`}
                />

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poiret-one-bold text-[#d9d6d6] text-[22px] 2xl:text-[32px]"
                >
                  {name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
