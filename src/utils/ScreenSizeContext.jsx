import React, { createContext, useState, useEffect, useContext } from "react";

const ScreenSizeContext = createContext();

export function useScreenSize() {
  return useContext(ScreenSizeContext);
}

export function ScreenSizeProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); //
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <ScreenSizeContext.Provider value={isMobile}>
      {children}
    </ScreenSizeContext.Provider>
  );
}
