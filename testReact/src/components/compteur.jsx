// il faut importer le useState de rect pour pouvoir declerer des variables d'etats
import { useState } from "react";

// on vas faire un test avec celui la
const Compteur = () => {
  // commentaire
  const [count, setCount] = useState(0);
  // commentaire
  const increment = () => {
    setCount(count + 1);
  };
  const decremente = () => {
    setCount(count - 1);
  };
  // commentaire
  return (
    <div
      style={{
        display: "flex",
        gap: 50,
      }}
    >
      <button onClick={decremente}>decrementer</button>
      <h2>{count}</h2>
      <button onClick={increment}>Incrémenter</button>
    </div>
  );
};

export default Compteur;
