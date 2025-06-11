let ecran = document.getElementById("ecran");
//le tableau contenant les citations
let citations = [
  `"La vie c'est comme une bite sa monte et sa descent." -AKOUETE Kaleb`,
  `"le vrai courage c'est de lacher quand tu as la diarhee." -Inconnu`,
  `"La vie est un défi à relever, un bonheur à mériter, une aventure à tenter." – Mère Teresa`,
  `"Chaque jour est une nouvelle chance de changer ta vie." – Inconnu`,
  `"La simplicité est la sophistication suprême." – Léonard de Vinci`,
  `"Soyez le changement que vous voulez voir dans le monde." – Gandhi`,
  `"La vie est faite de petits bonheurs." – Inconnu`,
  `"Tout ce qui vaut la peine d'être fait mérite d'être bien fait." – Nicolas Poussin`,
];

//function qui renvoies les citations
function citer() {
  const citation = citations[getRandomInt(0, citations.length - 1)];
  ecran.value = citation;
}

function randomiser(n1,n2){
    let seed = 2;
}

function getRandomInt(min, max) {
  min = Math.ceil(min); // Arrondir vers le haut (pour éviter les erreurs)
  max = Math.floor(max); // Arrondir vers le bas
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
