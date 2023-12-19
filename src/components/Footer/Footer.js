import './Footer.scss';

import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="Footer">
      <ul className="Footer-ul">
        <NavLink to="/About"><li>A propos</li></NavLink>
        <NavLink to="/LegalMentions"><li>Mentions légales</li></NavLink>
      </ul>
    </div>
  );
}

export default Footer;
