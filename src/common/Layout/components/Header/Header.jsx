import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/shared/desktop/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })}
        >
          <img src={logo} alt="logo" loading="lazy" />
        </NavLink>
      </div>

      <nav className="header__nav">
        <ul className="header__menu">
          <li>
            <NavLink
              className="header__link"
              to="/stories"
              style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })}
            >
              Stories
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header__link"
              to="/features"
              style={({ isActive }) => ({
                color: isActive ? 'rgba(0,0,0,0.6)' : 'black',
              })}
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header__link"
              to="/pricing"
              style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })}
            >
              Pricing
            </NavLink>
          </li>
        </ul>
      </nav>
      <a className="header__invite-button" href="#!">
        Get an invite
      </a>

      <button className="header__hamburger">
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
