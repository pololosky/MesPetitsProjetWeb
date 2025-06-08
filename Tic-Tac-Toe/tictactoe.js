let tours = 0;
let moves = [];
let countCercle = 0;
let countCroix = 0;
const scoreCercle = document.getElementById("cercle");
const scoreCroix = document.getElementById("croix");
scoreCercle.value = 0;
scoreCroix.value = 0;

function jeu(nbr) {
  const forme = document.getElementById(`${nbr}`);
  // Vérifier si l'élément contient déjà quelque chose
  if (forme.innerHTML.trim() !== "") {
    return; // Ne rien faire si l'élément n'est pas vide
  }
  tours += 1;
  // atribution des valeurs des btn a chaque tours
  if (tours % 2 == 0) {
    forme.innerHTML = `<i class="ri-close-large-line"></i>`;
  } else {
    forme.innerHTML = `<i class="ri-circle-line"></i>`;
  }
  //recuperation des cinqs premier
  if (tours <= 9) {
    moves[nbr] = forme.innerHTML;
  }
  //ici apres le 5eme tours on commence a verifier les victoires
  if (tours >= 5) {
    verify(0, 1, 2);
    verify(3, 4, 5);
    verify(6, 7, 8);
    verify(0, 3, 6);
    verify(1, 4, 7);
    verify(2, 5, 8);
    verify(0, 4, 8);
    verify(2, 4, 6);
  }
  if (tours == 9) refreshTab();
}

//function qui verifie si on gagne ou pas
function verify(a, b, c) {
  if (
    moves[a] === moves[b] &&
    moves[b] === moves[c] &&
    moves[a].trim() !== ""
  ) {
    alert("Manche remporter");
    getScore(moves[a]);
    refreshTab();
  }
}

//function qui attribut un score
function getScore(i) {
  if (i === `<i class="ri-close-large-line"></i>`) {
    countCroix += 1;
    scoreCroix.value = countCroix;
  } else {
    if (i === `<i class="ri-circle-line"></i>`) {
      countCercle += 1;
      scoreCercle.value = countCercle;
    }
  }
}

//function qui refraichie seulement le tableau
function refreshTab() {
  //revoir l'utilisation du foreach apres
  for (let i = 0; i < 9; i++) {
    const forme = document.getElementById(`${i}`);
    forme.innerHTML = "";
    moves[i] = null;
  }
  tours = 0;
}

// function qui rafraichi la page
function rafraichirPage() {
  location.reload();
}
