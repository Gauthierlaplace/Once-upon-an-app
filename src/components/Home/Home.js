import HomeBook from './HomeBook/HomeBook';
import './Home.scss';

function Home() {
  return (
    // Si personne n'est connecté : affichage de la page d'inscription/connexion
    // Si utilisateur connecté : affichage du bouton Play
    <div className="Home">
      <HomeBook />
    </div>
  );
}

export default Home;
