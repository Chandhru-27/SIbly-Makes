const Decorations = () => {
  return (
    <div>
      {/* <div className="absolute inset-y-0 z-50 left-0 max-h-full flex flex-col justify-between pt-[clamp(5.3125rem,4.8077rem+2.2436vw,7.5rem)] pl-5 ">
        <div className="hero-animate w-1 h-20 opacity-50 fill-current bg-white/70 rounded-2xl"></div>
        <div className="hero-animate w-1 h-20 opacity-50 fill-current bg-white/70 rounded-2xl"></div>
      </div> */}

      <div>
        <img
          src="/assets/leaf.webp"
          alt="leaf-image"
          rel="preload"
          fetchPriority="high"
          className="leaf opacity-[0.8] w-[clamp(28.125rem,26.0795rem+9.0909vw,40.625rem)] absolute top-[clamp(-11.25rem,13.8462rem+-111.5385vw,-120rem)]  right-[clamp(-12.5rem,-12.3558rem+-0.641vw,-13.125rem)]"
          height={500}
        />
      </div>
    </div>
  );
};

export default Decorations;
