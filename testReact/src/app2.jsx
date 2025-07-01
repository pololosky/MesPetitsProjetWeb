// on importe le hook useState et UseEffect de react pour pouvoir utiliser les states
import { useState, useEffect } from "react";
import Test from "./components/test.jsx";

const App2 = () => {
  const [count, setCount] = useState(0);

  // on utilise le hook useEffect qui est une fonction fleche pour executer du code apres le rendu du composant
  useEffect(() => {
    document.title = `Le compteur est à ${count}`; // on modifie le titre du document avec la valeur du compteur
  }, [count]); // le tableau de dépendances permet de spécifier quand l'effet doit être exécuté

  return (
    <div>
      <h1>Les effets en react</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Incrementer</button>
        <h2>La valeur du compteur est: {count}</h2>
      </div>
      <Test />
    </div>
  );
};

export default App2;
