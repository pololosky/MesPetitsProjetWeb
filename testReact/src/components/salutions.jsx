import React, { Component } from 'react'

//gestion d'un parametre dans un composant
const Salutation = ({ props }) => {
  return <h2>Bonjour, {props}</h2>;
};

export default Salutation;