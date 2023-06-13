import { Link } from 'react-router-dom';

import './HomeLogged.scss';

function HomeLogged() {

  return (
    <div className="HomeLogged">
      <button><Link
      className="HomeLogged-RunGame" 
      to="/game"><h1>Jouer</h1></Link></button>
    </div>
  );
}

export default HomeLogged;
