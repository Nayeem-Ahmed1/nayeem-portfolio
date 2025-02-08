import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ScreenSizeProvider } from "./utils/ScreenSizeContext.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ScreenSizeProvider>
        <App />
      </ScreenSizeProvider>
    </HelmetProvider>
  </StrictMode>
);
