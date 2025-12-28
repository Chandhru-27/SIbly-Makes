import "./lib/gsap.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";

// Prevent browser from restoring scroll position on reload
window.history.scrollRestoration = "manual";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
