//ici on import la fonction createClient de pexel
const input = document.getElementById("saisi");
const reponse = document.getElementById("reponse");
const image = document.getElementById("image");
//cle unsplash
const unsplashKey = "f3KWzGAONkFzFoIcnsHG03zJN5sE8dpy3yFW9UDFCSw";

function recherche() {
  const mot = input.value;
  if (mot === "") {
    return;
  }
  afficherDefinition(mot);
  afficheImage(mot);
  input.value = "";
}

function afficherDefinition(mot) {
  //si le mot est vide pas la peine
  //reference l'url de notre API
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${mot}`;
  //envoie d'une requete get
  fetch(url)
    //on recupere en format json
    .then((Response) => Response.json())
    .then((data) => {
      reponse.style.display = "flex";
      reponse.innerHTML = `Definition : ${data[0].meanings[0].definitions[0].definition}`;
      // reponse.innerHTML += `se prononce : ${data[0].phonetics[0].text}`;
    });
}

//fonction pour afficher l'image
function afficheImage(mot) {
  const unsplashUrl = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
    mot
  )}&client_id=${unsplashKey}`;
  fetch(unsplashUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Supposons que vous avez un élément avec l'id "image-container"
      if (image) {
        image.style.display = "flex";
        image.innerHTML = `<img src="${data.urls.regular}" alt="${mot}">`;
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération de l'image:", error);
      alert("Une erreur est survenue lors du chargement de l'image");
    });
}
