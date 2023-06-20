import './Footer.scss';

import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="Footer">
      <ul className="Footer-all">
        <li>About</li>
        <li>Copyright</li>
        <li>Mentions légales</li>
      </ul>
    </div>
  );
}

export default Footer;
