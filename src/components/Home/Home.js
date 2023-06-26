import { useSelector } from 'react-redux';

import HomeBook from './HomeBook/HomeBook';
import HomeLogged from './HomeLogged/HomeLogged';
import './Home.scss';

function Home() {
  const logged = useSelector((state) => state.user.logged);

  return (
    // Si personne n'est connecté : affichage de la page d'inscription/connexion
    // Si utilisateur connecté : affichage du bouton Play
    <div className="Home">
      { logged ? <HomeLogged /> : <HomeBook />}
    </div>
  );
}

export default Home;
