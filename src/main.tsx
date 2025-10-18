import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { ThemeProvider } from "./context/ThemeContext";
import './styles/variables.css';
import './styles/global.css';
import ScrollToTop from "./components/ScrollToTop.tsx";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [stylisRTLPlugin],
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider>
        <StrictMode>
          <ScrollToTop />
          <App />
        </StrictMode>
      </ThemeProvider>
    </CacheProvider>
  </BrowserRouter>
);
