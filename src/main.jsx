import React from "react";

import App from "./App.jsx";

import { createRoot } from "react-dom/client";

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
