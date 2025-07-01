import React, { useState, useEffect } from "react";
// composant simple
const TestDivs = () => {
  return (
    <div>
      <p>Hello word</p>
    </div>
  );
};

// composant avec parametre (props)
const TestDiv = ({ name }) => {
  return (
    <div>
      <p>bonjour {name}</p>
    </div>
  );
};

//composant avec children et renvoyan

// ici essayons un composant qui utilise une api de citation
const Test = () => {
  // ici un useState pour stocker la reponse de l'api
  const [reponse, setReponse] = useState("");

  // ici un useEffect pour recuperer la citation de l'api
  // car il faut attendre que le composant soit monté avant de faire la requete
  useEffect(() => {
    const url = "https://luha.alwaysdata.net/api/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setReponse(String(data.citation));
      });
  }, []);
  return (
    <div>
      <p>citation du jour: {reponse}</p>
    </div>
  );
};
export default Test;
