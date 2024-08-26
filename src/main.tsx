import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./global.css";
import router from "./Router.tsx";
import "@picocss/pico";
import "@picocss/pico/css/pico.colors.css";
import BackgroundWrapper from "./components/BackgroundWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BackgroundWrapper>
      <RouterProvider router={router} />{" "}
    </BackgroundWrapper>
  </StrictMode>
);
