import './Footer.scss';

import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="Footer">
      <ul className="Footer-ul">
        <NavLink to="/About"><li>About</li></NavLink>
        <li>Mentions légales</li>
      </ul>
    </div>
  );
}

export default Footer;
