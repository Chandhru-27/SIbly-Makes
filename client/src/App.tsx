import Editorial from "./components/layout/Editorial";
import SharedLogoAnimator from "./components/animation/SharedLogoAnimation";
import HeroContent from "./components/layout/HeroContent";
import Decorations from "./components/ui/Decorations";
import { BrowserRouter } from "react-router-dom";
import LenisProvider from "./hooks/LenisProvider";
import Collections from "./components/layout/Collections";
import Contact from "./components/layout/Contact";
import Particles from "./components/Particles";
import Footer from "./components/layout/Footer";
import HeaderContent from "./components/layout/HeaderContent";

const App = () => {
  const viewPortHeight = window.innerHeight;

  return (
    <LenisProvider>
      <BrowserRouter>
        <main className="hero relative w-full min-h-screen max-w-640 mx-auto z-10">
          <div style={{ width: "100%", height: "100%", position: "absolute" }}>
            <Particles
              particleColors={["#ffffff", "#7599C4", "#b30b86"]}
              particleCount={viewPortHeight * 15}
              particleSpread={10}
              speed={0.05}
              particleBaseSize={115}
              moveParticlesOnHover={true}
              alphaParticles={false}
              sizeRandomness={1}
              disableRotation={false}
            />
          </div>
          
          {/* Landing Page */}
          <div className="relative min-h-screen flex flex-col gap-[5vh]">
            <Decorations />
            <div className="flex flex-col  2xl:mt-15">
              <HeaderContent />
            </div>
            <div>
              <HeroContent />
            </div>
          </div>

          {/* Editorial Section */}
          <div className="mt-40 max-w-640 mx-auto">
            <Editorial />
            {SharedLogoAnimator()}
          </div>

          {/* Collection Section */}
          <div className="mt-20 max-w-640 mx-auto">
            <Collections />
          </div>

          {/* Contact Section */}
          <div className="mt-20">
            <Contact />
          </div>

          {/* Footer section */}
          <div className="mt-20">
            <Footer />
          </div>
        </main>
      </BrowserRouter>
    </LenisProvider>
  );
};

export default App;
