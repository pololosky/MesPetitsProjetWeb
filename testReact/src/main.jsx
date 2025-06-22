import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//ici on va creer des composants avec une fonction
function Welcome() {
    const nom = "Kaleb"
    const age = 15
  return (
    <div>
        <h1>YO YO YO</h1>
        <p>
          Comment allez-vous aujourd'hui {nom === "Kaleb"?"c'est bon":"C'est pas bon"}
          {
            age >= 18 ? "vous etes majeur" : "vous etes mineur"
          }
        </p>
    </div>
  );
}

// ici on vas injecter les elements dans le root en creant une route avec eb parametre un contenaire
createRoot(document.getElementById("root")).render(
    <>
        <Welcome/>
        <Welcome/>
    </>
);
