import './Footer.scss';

import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="Footer">
      <NavLink className="Footer-all Footer-about" to="/About">
        About
      </NavLink>

      <p className="Footer-all Footer-Copy">Copyright</p>

      <NavLink className="Footer-all Footer-mentions" to="/Mentions">
        Mentions légales
      </NavLink>
    </div>
  );
}

export default Footer;
