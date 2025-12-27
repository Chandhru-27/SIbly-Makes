import Editorial from "./components/layout/Editorial";
import HeaderContent from "./components/layout/HeaderContent";
import HeroContent from "./components/layout/HeroContent";
import Decorations from "./components/ui/Decorations";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
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

        {/* Collections Page */}
        <div className="mt-40 xl:mt-30">
          <Editorial />
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
