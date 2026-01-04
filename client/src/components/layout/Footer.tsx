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
    <footer className="mx-[clamp(1.5rem,0.467rem+4.5909vw,7.8125rem)] mb-10 rounded-2xl border-2 border-[#4a657d] bg-[#1e3856]">
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

            <p className="biz-udmincho-regular text-[clamp(1.5625rem,1.358rem+0.9091vw,2.0125rem)]">
              Sibly <span className="text-[#7599C4]">Makes</span>
            </p>
          </div>

          <div className="space-y-8 poiret-one-regular text-[clamp(0.875rem,0.7318rem+0.6364vw,1.15rem)] pointer-events-auto">
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
            className="w-[clamp(3.75rem,2.9318rem+3.6364vw,8.75rem)] h-auto opacity-0 transition-opacity duration-500"
            onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
          />

          <img
            src="/assets/dog.webp"
            loading="lazy"
            decoding="async"
            width="120"
            height="120"
            className="w-[clamp(2.5rem,1.6818rem+3.6364vw,7.5rem)] h-auto opacity-0 transition-opacity duration-500"
            onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
          />
        </div>

        {/* Right */}
        <div className="space-y-15 max-lg:flex max-lg:flex-col items-center pointer-events-auto">
          {credits.map(({ role, name, image, link, rounded }) => (
            <div key={name} className="space-y-2">
              <p className="text-[clamp(1rem,0.8364rem+0.7273vw,1.4rem)] poiret-one-bold">
                {role}
              </p>

              <div className="flex items-center gap-4 max-lg:flex-col">
                <img
                  src={image}
                  loading="lazy"
                  decoding="async"
                  className={`w-[clamp(1.5rem,1.2545rem+1.0909vw,3rem)] ${
                    rounded ? "rounded-full" : ""
                  }`}
                />

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poiret-one-bold text-[#d9d6d6] text-[clamp(1.125rem,0.9818rem+0.6364vw,2rem)]"
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
