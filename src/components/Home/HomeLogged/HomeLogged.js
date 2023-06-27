import { Link } from 'react-router-dom';

import './HomeLogged.scss';

function HomeLogged() {
  return (
    <div className="HomeLogged">
      <button type="button">
        <Link
          className="HomeLogged-RunGame"
          to="/game"
        >
          Jouer
        </Link>
      </button>
    </div>
  );
}

export default HomeLogged;
