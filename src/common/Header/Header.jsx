import { Link } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo.svg';
import './Header.scss';
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li>
            <Link className="header__link" to="/stories">
              Stories
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/features">
              Features
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/pricing">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
      <a className="header__invite-button" href="!#">
        Get an invite
      </a>
    </header>
  );
};

export default Header;
