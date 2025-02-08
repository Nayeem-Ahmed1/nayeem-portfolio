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

import { Helmet } from "react-helmet-async";

function App() {
  const isMobile = useScreenSize();

  return (
    <>
      <Helmet>
        <title>Md. Nayeem Ahmed | Developer</title>
        <meta
          name="description"
          content="The personal portfolio of Md. Nayeem Ahmed, a software developer specializing in React,Next,MongoDb,JavaScript and Vite."
        />
        <link rel="canonical" href="https://nayeem-portfolio-nu.vercel.app/" />
      </Helmet>
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
