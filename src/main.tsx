import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "react-router-dom";
import route from "./routes/route.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <RouterProvider router={route}/>
    </Theme>
  </StrictMode>
);
