import { NavLink } from 'react-router-dom';
import './HomeBookPlay.scss';

export default function HomeBookPlay() {
  return (
    <div className="HomeBookPlay">
      <NavLink to="/game" className="HomeBookPlay-title">Jouer !</NavLink>
    </div>
  );
}
