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
import Loading from "./components/ui/Loading";
import { useLoadingStore } from "./store/useLoadingStore";

const App = () => {
  const isLoaded = useLoadingStore((set) => set.isLoaded);
  const viewPortHeight = window.innerHeight;

  return (
    <LenisProvider>
      <BrowserRouter>
        {!isLoaded ? (
          <Loading className="loading-screen" />
        ) : (
          <main className="hero relative w-full min-h-screen max-w-640 mx-auto z-10">
            <div
              style={{ width: "100%", height: "100%", position: "absolute" }}
            >
              <Particles
                particleColors={["#ffffff", "#7599C4", "#b30b86"]}
                particleCount={viewPortHeight * 25}
                particleSpread={10}
                speed={0.05}
                particleBaseSize={115}
                moveParticlesOnHover={false}
                alphaParticles={false}
                sizeRandomness={1}
                disableRotation={false}
              />
            </div>

            <Decorations /> 

            {/* Landing Page */}
            <div id="home" className="min-h-dvh flex flex-col gap-[clamp(1.25rem,-0.1818rem+6.3636vw,10rem)]">
              <div className="mt-[clamp(2.5rem,-1.25rem+4.6875vw,6.25rem)] z-9999">
                <HeaderContent />
              </div>
              <div>
                <HeroContent />
              </div>
            </div>

            {/* Editorial Section */}
            <div id="editorial" className="mt-40 max-w-640 mx-auto">
              <Editorial />
              <SharedLogoAnimator />
            </div>

            {/* Collection Section */}
            <div id="collections" className="mt-20 max-w-640 mx-auto">
              <Collections />
            </div>

            {/* Contact Section */}
            <div id="contact" className="mt-20">
              <Contact />
            </div>

            {/* Footer section */}
            <div className="mt-20">
              <Footer />
            </div>
          </main>
        )}
      </BrowserRouter>
    </LenisProvider>
  );
};

export default App;
