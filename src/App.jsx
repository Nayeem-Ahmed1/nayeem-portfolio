import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import toast, { Toaster } from "react-hot-toast";
import { useScreenSize } from "./utils/ScreenSizeContext";

function App() {
  const isMobile = useScreenSize();

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          {!isMobile && <Tech />}
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            {!isMobile && <StarsCanvas />}
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
