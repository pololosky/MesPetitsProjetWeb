import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//on import les composant de leurs chemin d'access
import App from "./app"
import App2 from "./app2"

// ici on vas injecter les elements dans le root en creant une route avec eb parametre un contenaire
createRoot(document.getElementById("root")).render(
  <>
    <App2/>
  </>
);
