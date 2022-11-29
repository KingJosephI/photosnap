import { Logo, NavBar, Hamburger } from './components';
import logo from '../../../../assets/shared/desktop/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Logo logo={logo} className="header__logo" />
      <NavBar className="header__navigation" />
      <Hamburger className="header__hamburger" />
    </header>
  );
};

export default Header;
