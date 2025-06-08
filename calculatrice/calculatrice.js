const ecran = document.getElementById("ecran");
const ecran_conversion = document.getElementById("ecran-conversion");
const convert = document.getElementById("conversion");
const de = document.getElementById("de");
const a = document.getElementById("a");

// pour afficher les nombres
function ajouter(nbr) {
  if (ecran.value == "ok" || ecran.value == "IMPOSSIBLE LOOOO") {
    ecran.value = "";
    ecran.value += nbr;
  } else ecran.value += nbr;
}
//pour gerer l'egalite
function resultat(nbr) {
  let result;
  // ici c'st le probleme avec le ctr
  if (nbr == 0) {
    ecran.value = "";
  } else {
    try {
      ecran.value = eval(ecran.value).toString();
      //pour gerer la conversion
    } catch (error) {
      ecran.value = "IMPOSSIBLE LOOOO";
    }
  }
}
//pour les symboles
function symbole(symb) {
  if (ecran.value == "ok" || ecran.value == "IMPOSSIBLE LOOOO") {
    ecran.value = "";
    ecran.value += ` ${symb} `;
  } else ecran.value += `${symb}`;
}
//faire apparaitre la conversion
function shoxConversion() {
  if (convert.style.display === "none" || convert.style.display === "") {
    convert.style.display = "flex";
    de.style.display = "flex";
    ecran.style.width = "60%";
    ecran_conversion.style.width = "60%";
  }
}
