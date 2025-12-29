import Editorial from "./components/layout/Editorial";
import SharedLogoAnimator from "./components/animation/SharedLogoAnimation";
import HeaderContent from "./components/layout/HeaderContent";
import HeroContent from "./components/layout/HeroContent";
import Decorations from "./components/ui/Decorations";
import { BrowserRouter } from "react-router-dom";
import LenisProvider from "./hooks/LenisProvider";
import Collections from "./components/layout/Collections";
import Contact from "./components/layout/Contact";

const App = () => {
  return (
    <LenisProvider>
      <BrowserRouter>
        <main className="hero relative w-full min-h-screen max-w-640 mx-auto z-10">
          {/* Landing Page */}
          <div className="relative">
            <Decorations />
            <div>
              <HeaderContent />
              <HeroContent />
            </div>
          </div>

          {/* Editorial Page */}
          <div className="mt-40 xl:mt-30">
            <Editorial />
            {SharedLogoAnimator()}
          </div>

          <div className="mt-20 xl:mt-20">
            <Collections/>
          </div>

          <div className="mt-20 xl:mt-60">
            <Contact/>
          </div>
        </main>
      </BrowserRouter>
    </LenisProvider>
  );
};

export default App;
