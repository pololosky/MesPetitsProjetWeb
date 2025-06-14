const input = document.getElementById("saisi");
const reponse = document.getElementById("reponse");

function recherche() {
  const mot = input.value;
  connectAPI(mot);
}

function connectAPI(mot) {
  //si le mot est vide pas la peine
  if (mot === "") {
    reponse.style.display = "none";
    return;
  }
  //reference l'url de notre API
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${mot}`;
  //envoie d'une requete get
  fetch(url)
    //on recupere en format json
    .then((Response) => Response.json())
    .then((data) => {
      reponse.style.display = "flex";
      reponse.innerHTML = `Definition : ${data[0].meanings[0].definitions[0].definition}`;
    });
}
