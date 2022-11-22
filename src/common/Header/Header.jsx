import { NavLink } from 'react-router-dom';
import logo from '../../assets/shared/desktop/logo.svg';
import './Header.scss';
const Header = () => {
  // const activeStyle = {
  //   color: 'red',
  // };
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })}
        >
          <img src={logo} alt="logo" />
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
              style={({ isActive }) => ({ color: isActive ? 'grey' : 'black' })}
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
      <a className="header__invite-button" href="!#">
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
