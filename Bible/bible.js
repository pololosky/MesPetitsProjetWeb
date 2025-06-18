const recherche = document.getElementById("ecran");
const reponse = document.getElementById("reponse");

function repondre() {
  bibleAPI();
}

function bibleAPI() {
  const verset = recherche.value;
  const url = `https://bible-api.com/${verset}`;
  fetch(url)
    .then((Response) => {
      if (!Response.ok) {
        alert("verse mal tape");
        return;
      }
      return Response.json();
    })
    .then((data) => {
      reponse.style.display = "flex";
      reponse.innerHTML = `<h2>${data.text}</h2>`;
    });
}
