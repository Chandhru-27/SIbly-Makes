import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const HeaderContent = () => {

  return (
    <header className="w-full flex">
      <nav className="text-white opacity-70 px-[clamp(1.875rem,0.75rem+5vw,8.75rem)] py-8 flex lg:gap-16 2xl:gap-35  w-full lg:justify-normal justify-between items-center">
        <Link
          to="/"
          className="biz-udmincho-regular text-[clamp(1.3375rem,0.5284rem+1.8182vw,3.4375rem)] cursor-pointer"
        >
          <span className="tracking-wide glow-text">Sibly</span>{" "}
          <span className="text-[#7599C4] tracking-wider">Makes</span>
          <img src="/assets/thread.webp" alt="thread" className="w-[clamp(7.5rem,5.4545rem+9.0909vw,20rem)] h-[clamp(0.75rem,0.5864rem+0.7273vw,1.75rem)]"/>
        </Link>
        <div className="lg:space-x-15 2xl:space-x-35 text-[clamp(0.625rem,0.4716rem+0.6818vw,1.5625rem)] poppins-regular pt-2 2xl:pt-4">
            <>
              <button className="lg:hidden">
                <Menu color="#ffffff" size={22} strokeWidth={3}/>
              </button>
            </>
            <>
              <Link to="#" className="cursor-pointer hidden lg:inline poiret-one-regular">
               <span className="tracking-[2px]">Collections</span> ❋
              </Link>
              <Link to="#" className="cursor-pointer hidden lg:inline poiret-one-regular">
                <span className="tracking-[2px]">Contact us</span> ❋
              </Link>
            </>
        </div>
      </nav>
    </header>
  );
};

export default HeaderContent;
