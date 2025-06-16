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
  // doConvertion(de.value, a.value);
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

function doConvertion(de, a) {
  const convertKey = "174325d0975396d8a2d5bdd3";
  const convertUrl = `https://v6.exchangerate-api.com/v6/${convertKey}/latest/${de}`;
  fetch(convertUrl).then((Response) => Response.json());
  alert(Response.json()).then((data) => {
    alert(data.a);
  });
}

// while (ecran.value != "") {
//   doConvertion(de.value, a.value);
// }
