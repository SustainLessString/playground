import "@app/styles/main.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "@app/App";

const container = document.getElementById("root")!;

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
