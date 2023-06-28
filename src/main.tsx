import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { TiltEffect } from "@/core/components";
TiltEffect.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
