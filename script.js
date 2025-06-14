//calcul factorielle en utilisant une fonction
function factorielle(nbr) {
  let facto = 1;
  if (nbr != 0 && nbr != 1) {
    for (let i = 1; i <= nbr; i++) {
      facto *= i;
    }
  }
  return facto;
}
let nbrverif = 4;
console.log(`Votre factorielle est: ${factorielle(nbrverif)}`);

//declons un objet
const users = {
  //cle : "valeur",
  nom: "Kaleb",
  age: 20,
  sexe: "M",
  questions: ["bonjours", "hello"],
};
//afficher un objet
console.log(users);
console.log(users.questions[0]);
