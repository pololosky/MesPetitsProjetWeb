import React, { Component } from "react";

// donc ici on a importer la liste des utilisateur
const ListeUser = ({user}) => {
  return (
    <div
      style={{
        padding: 4,
        backgroundColor: "green",
        marginBottom: 5,
        borderRadius: 5,
      }}
    >
      <p>
        {user.nom} - {user.age} ans
      </p>
    </div>
  );
};

export default ListeUser;