import ListeUser from "./components/listeUtilisateurs";
import Test from "./components/test";
import Compteur from "./components/compteur";

const App = () => {
  const users = [
    {
      id: 1,
      nom: "kaleb",
      age: 20,
      sexe: "M",
    },
    {
      id: 2,
      nom: "joshua",
      age: 18,
      sexe: "M",
    },
    {
      id: 3,
      nom: "edith",
      age: 40,
      sexe: "F",
    },
  ];

  return (
    <>
      <h1>Les evenements en react </h1>
      <Compteur/>
      {/* on commente la liste pour le moment */}
      {/* {
        // c'est comme une boucle for sur le tableau users
        users.map((p) => (
          // ici on fait recours au composant ListeUser de la classe listeUtilisateur.jsx
          // ici il est important d'attribuer une cle une liste pour pouvoir differencier le elements
          <ListeUser user={p} key={p.id} />
        ))
      } */}
    </>
  );
};

//exporter par defaut la fonction App pour quelle soit utilisable partout
export default App;

// ici ce contenaire renvoie une div et modifie son style
const Contener = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        padding: "15px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
