const reponseDonner = document.getElementById("saisi");

function jeu() {
  let reponse = Number(reponseDonner.value);
  let test = getRandomInt(1, 100);
  if (reponse === 0) {
    return alert("rien n'a ete ecrit");
  }
  if (reponse === test) {
    alert("Vous avez trouvez");
  } else {
    alert(`vous avez perdu la reponse etait ${test}`);
  }
  location.reload();
}

function getRandomInt(min, max) {
  min = Math.ceil(min); // Arrondir vers le haut (pour éviter les erreurs)
  max = Math.floor(max); // Arrondir vers le bas
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
